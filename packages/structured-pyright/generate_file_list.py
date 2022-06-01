import os
import json

BASE_PATH = '../pyright-internal/typeshed-fallback'


dirlisting = {
  '': [{'name': 'stdlib', 'isFile': False, 'isDir': True}]
}

def scan(folderPath):
  dirlisting[folderPath] = []
  entries = os.scandir(os.path.join(BASE_PATH, folderPath))
  for dirEntry in entries:
    if dirEntry.is_file():
      dirlisting[folderPath].append({
        'name': dirEntry.name,
        'isFile': True,
        'isDir': False,
      })
    elif dirEntry.is_dir():
      dirlisting[folderPath].append({
        'name': dirEntry.name,
        'isFile': False,
        'isDir': True,
      })
      scan(os.path.join(folderPath, dirEntry.name))

scan('stdlib')

preamble = '''
type DirListing = { [key: string]: { name: string; isFile: boolean; isDir: boolean }[] };

export const typeshedDirEntries: DirListing = '''

with open('src/fileSystemData.ts', 'w') as f:
  f.write(preamble + json.dumps(dirlisting))

print('Done')