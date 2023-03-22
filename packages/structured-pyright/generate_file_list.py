import os
import json

TYPESHED_BASE_PATH = '../pyright-internal/typeshed-fallback'

dirlisting = {
  '': [
        {'name': 'stdlib', 'isFile': False, 'isDir': True},
        {'name': 'stubs', 'isFile': False, 'isDir': True}
      ],
  'stubs': [
        {'name': 'requests', 'isFile': False, 'isDir': True},
        {'name': 'pandas', 'isFile': False, 'isDir': True}
      ],
}

def scan(basePath, folderPath):
  dirlisting[folderPath] = []
  entries = os.scandir(os.path.join(basePath, folderPath))
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
      scan(basePath, os.path.join(folderPath, dirEntry.name))

scan(TYPESHED_BASE_PATH, 'stdlib')
scan(TYPESHED_BASE_PATH, 'stubs/requests')
scan(TYPESHED_BASE_PATH, 'stubs/pandas')

preamble = '''
type DirListing = { [key: string]: { name: string; isFile: boolean; isDir: boolean }[] };

export const typeshedDirEntries: DirListing = '''

with open('src/fileSystemData.ts', 'w') as f:
  f.write(preamble + json.dumps(dirlisting))

print('Done')
