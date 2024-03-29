type DirListing = { [key: string]: { name: string; isFile: boolean; isDir: boolean }[] };

export const typeshedDirEntries: DirListing = {
    '': [
        { name: 'stdlib', isFile: false, isDir: true },
        { name: 'stubs', isFile: false, isDir: true },
    ],
    stubs: [{ name: 'requests', isFile: false, isDir: true }],
    stdlib: [
        { name: 'contextvars.pyi', isFile: true, isDir: false },
        { name: 'nturl2path.pyi', isFile: true, isDir: false },
        { name: 'encodings', isFile: false, isDir: true },
        { name: 'zipapp.pyi', isFile: true, isDir: false },
        { name: 'argparse.pyi', isFile: true, isDir: false },
        { name: 'distutils', isFile: false, isDir: true },
        { name: '__main__.pyi', isFile: true, isDir: false },
        { name: 'profile.pyi', isFile: true, isDir: false },
        { name: 'posix.pyi', isFile: true, isDir: false },
        { name: 'socketserver.pyi', isFile: true, isDir: false },
        { name: 'string.pyi', isFile: true, isDir: false },
        { name: 'chunk.pyi', isFile: true, isDir: false },
        { name: 'zoneinfo', isFile: false, isDir: true },
        { name: 'ctypes', isFile: false, isDir: true },
        { name: 'telnetlib.pyi', isFile: true, isDir: false },
        { name: 'gzip.pyi', isFile: true, isDir: false },
        { name: 'xxlimited.pyi', isFile: true, isDir: false },
        { name: 'itertools.pyi', isFile: true, isDir: false },
        { name: 'calendar.pyi', isFile: true, isDir: false },
        { name: 'cmd.pyi', isFile: true, isDir: false },
        { name: 'rlcompleter.pyi', isFile: true, isDir: false },
        { name: 'pathlib.pyi', isFile: true, isDir: false },
        { name: 'syslog.pyi', isFile: true, isDir: false },
        { name: 'unittest', isFile: false, isDir: true },
        { name: 'pty.pyi', isFile: true, isDir: false },
        { name: 'py_compile.pyi', isFile: true, isDir: false },
        { name: 'asynchat.pyi', isFile: true, isDir: false },
        { name: '_stat.pyi', isFile: true, isDir: false },
        { name: 'getpass.pyi', isFile: true, isDir: false },
        { name: 'socket.pyi', isFile: true, isDir: false },
        { name: 'curses', isFile: false, isDir: true },
        { name: 'nis.pyi', isFile: true, isDir: false },
        { name: 'tty.pyi', isFile: true, isDir: false },
        { name: 'ftplib.pyi', isFile: true, isDir: false },
        { name: 'ssl.pyi', isFile: true, isDir: false },
        { name: 'gettext.pyi', isFile: true, isDir: false },
        { name: 'wave.pyi', isFile: true, isDir: false },
        { name: 'filecmp.pyi', isFile: true, isDir: false },
        { name: 'functools.pyi', isFile: true, isDir: false },
        { name: 'modulefinder.pyi', isFile: true, isDir: false },
        { name: '_warnings.pyi', isFile: true, isDir: false },
        { name: 'termios.pyi', isFile: true, isDir: false },
        { name: 'asyncore.pyi', isFile: true, isDir: false },
        { name: 'random.pyi', isFile: true, isDir: false },
        { name: 'timeit.pyi', isFile: true, isDir: false },
        { name: 'ipaddress.pyi', isFile: true, isDir: false },
        { name: 'math.pyi', isFile: true, isDir: false },
        { name: 'cProfile.pyi', isFile: true, isDir: false },
        { name: '_socket.pyi', isFile: true, isDir: false },
        { name: 'statistics.pyi', isFile: true, isDir: false },
        { name: 'sunau.pyi', isFile: true, isDir: false },
        { name: 'operator.pyi', isFile: true, isDir: false },
        { name: 'ossaudiodev.pyi', isFile: true, isDir: false },
        { name: 'fileinput.pyi', isFile: true, isDir: false },
        { name: 'poplib.pyi', isFile: true, isDir: false },
        { name: 'sysconfig.pyi', isFile: true, isDir: false },
        { name: 'optparse.pyi', isFile: true, isDir: false },
        { name: '_imp.pyi', isFile: true, isDir: false },
        { name: 'imaplib.pyi', isFile: true, isDir: false },
        { name: 'quopri.pyi', isFile: true, isDir: false },
        { name: '_pydecimal.pyi', isFile: true, isDir: false },
        { name: 'dummy_threading.pyi', isFile: true, isDir: false },
        { name: '_heapq.pyi', isFile: true, isDir: false },
        { name: 'mmap.pyi', isFile: true, isDir: false },
        { name: '_random.pyi', isFile: true, isDir: false },
        { name: 'colorsys.pyi', isFile: true, isDir: false },
        { name: 'trace.pyi', isFile: true, isDir: false },
        { name: 'pwd.pyi', isFile: true, isDir: false },
        { name: 'copy.pyi', isFile: true, isDir: false },
        { name: 'site.pyi', isFile: true, isDir: false },
        { name: 'builtins.pyi', isFile: true, isDir: false },
        { name: 'pstats.pyi', isFile: true, isDir: false },
        { name: '_dummy_thread.pyi', isFile: true, isDir: false },
        { name: 'pdb.pyi', isFile: true, isDir: false },
        { name: 'zipimport.pyi', isFile: true, isDir: false },
        { name: '_tracemalloc.pyi', isFile: true, isDir: false },
        { name: 'stat.pyi', isFile: true, isDir: false },
        { name: 'decimal.pyi', isFile: true, isDir: false },
        { name: 'shutil.pyi', isFile: true, isDir: false },
        { name: 'pprint.pyi', isFile: true, isDir: false },
        { name: 'weakref.pyi', isFile: true, isDir: false },
        { name: 'multiprocessing', isFile: false, isDir: true },
        { name: 'base64.pyi', isFile: true, isDir: false },
        { name: 'locale.pyi', isFile: true, isDir: false },
        { name: 'aifc.pyi', isFile: true, isDir: false },
        { name: 'csv.pyi', isFile: true, isDir: false },
        { name: '_typeshed', isFile: false, isDir: true },
        { name: 'ast.pyi', isFile: true, isDir: false },
        { name: 'sre_parse.pyi', isFile: true, isDir: false },
        { name: 'binhex.pyi', isFile: true, isDir: false },
        { name: 'posixpath.pyi', isFile: true, isDir: false },
        { name: 'msilib', isFile: false, isDir: true },
        { name: 'urllib', isFile: false, isDir: true },
        { name: 'difflib.pyi', isFile: true, isDir: false },
        { name: 'fractions.pyi', isFile: true, isDir: false },
        { name: 'this.pyi', isFile: true, isDir: false },
        { name: 'faulthandler.pyi', isFile: true, isDir: false },
        { name: 'linecache.pyi', isFile: true, isDir: false },
        { name: 'tokenize.pyi', isFile: true, isDir: false },
        { name: 'resource.pyi', isFile: true, isDir: false },
        { name: 'VERSIONS', isFile: true, isDir: false },
        { name: '_thread.pyi', isFile: true, isDir: false },
        { name: 'tabnanny.pyi', isFile: true, isDir: false },
        { name: 'typing_extensions.pyi', isFile: true, isDir: false },
        { name: 'runpy.pyi', isFile: true, isDir: false },
        { name: 'webbrowser.pyi', isFile: true, isDir: false },
        { name: '_operator.pyi', isFile: true, isDir: false },
        { name: 'lzma.pyi', isFile: true, isDir: false },
        { name: 'crypt.pyi', isFile: true, isDir: false },
        { name: 'struct.pyi', isFile: true, isDir: false },
        { name: 'atexit.pyi', isFile: true, isDir: false },
        { name: 'pydoc.pyi', isFile: true, isDir: false },
        { name: 'html', isFile: false, isDir: true },
        { name: 'secrets.pyi', isFile: true, isDir: false },
        { name: 'contextlib.pyi', isFile: true, isDir: false },
        { name: 'zlib.pyi', isFile: true, isDir: false },
        { name: 'symbol.pyi', isFile: true, isDir: false },
        { name: 'grp.pyi', isFile: true, isDir: false },
        { name: 'macpath.pyi', isFile: true, isDir: false },
        { name: '_weakref.pyi', isFile: true, isDir: false },
        { name: 'unicodedata.pyi', isFile: true, isDir: false },
        { name: 'tkinter', isFile: false, isDir: true },
        { name: '_decimal.pyi', isFile: true, isDir: false },
        { name: '_dummy_threading.pyi', isFile: true, isDir: false },
        { name: 'netrc.pyi', isFile: true, isDir: false },
        { name: 'warnings.pyi', isFile: true, isDir: false },
        { name: '_py_abc.pyi', isFile: true, isDir: false },
        { name: 'compileall.pyi', isFile: true, isDir: false },
        { name: 'ntpath.pyi', isFile: true, isDir: false },
        { name: 'select.pyi', isFile: true, isDir: false },
        { name: 'xml', isFile: false, isDir: true },
        { name: 'types.pyi', isFile: true, isDir: false },
        { name: '_compat_pickle.pyi', isFile: true, isDir: false },
        { name: 'codeop.pyi', isFile: true, isDir: false },
        { name: 'codecs.pyi', isFile: true, isDir: false },
        { name: 'bz2.pyi', isFile: true, isDir: false },
        { name: 'sndhdr.pyi', isFile: true, isDir: false },
        { name: 'typing.pyi', isFile: true, isDir: false },
        { name: 'copyreg.pyi', isFile: true, isDir: false },
        { name: 'sre_constants.pyi', isFile: true, isDir: false },
        { name: 'parser.pyi', isFile: true, isDir: false },
        { name: 'wsgiref', isFile: false, isDir: true },
        { name: 'sched.pyi', isFile: true, isDir: false },
        { name: 'token.pyi', isFile: true, isDir: false },
        { name: '_codecs.pyi', isFile: true, isDir: false },
        { name: 'symtable.pyi', isFile: true, isDir: false },
        { name: 'json', isFile: false, isDir: true },
        { name: 'imghdr.pyi', isFile: true, isDir: false },
        { name: '_markupbase.pyi', isFile: true, isDir: false },
        { name: 'time.pyi', isFile: true, isDir: false },
        { name: '_tkinter.pyi', isFile: true, isDir: false },
        { name: 'msvcrt.pyi', isFile: true, isDir: false },
        { name: 'hashlib.pyi', isFile: true, isDir: false },
        { name: '_msi.pyi', isFile: true, isDir: false },
        { name: 'http', isFile: false, isDir: true },
        { name: '_sitebuiltins.pyi', isFile: true, isDir: false },
        { name: 'spwd.pyi', isFile: true, isDir: false },
        { name: 'mimetypes.pyi', isFile: true, isDir: false },
        { name: 'mailcap.pyi', isFile: true, isDir: false },
        { name: 'sqlite3', isFile: false, isDir: true },
        { name: '_osx_support.pyi', isFile: true, isDir: false },
        { name: 'ensurepip', isFile: false, isDir: true },
        { name: 'bisect.pyi', isFile: true, isDir: false },
        { name: 'cgi.pyi', isFile: true, isDir: false },
        { name: 'concurrent', isFile: false, isDir: true },
        { name: 'stringprep.pyi', isFile: true, isDir: false },
        { name: 'sys.pyi', isFile: true, isDir: false },
        { name: 'turtle.pyi', isFile: true, isDir: false },
        { name: 'code.pyi', isFile: true, isDir: false },
        { name: 'pickle.pyi', isFile: true, isDir: false },
        { name: 'smtplib.pyi', isFile: true, isDir: false },
        { name: 'cmath.pyi', isFile: true, isDir: false },
        { name: '_posixsubprocess.pyi', isFile: true, isDir: false },
        { name: '_compression.pyi', isFile: true, isDir: false },
        { name: 'marshal.pyi', isFile: true, isDir: false },
        { name: '_csv.pyi', isFile: true, isDir: false },
        { name: 'reprlib.pyi', isFile: true, isDir: false },
        { name: 'shlex.pyi', isFile: true, isDir: false },
        { name: '_ast.pyi', isFile: true, isDir: false },
        { name: '_bootlocale.pyi', isFile: true, isDir: false },
        { name: 'datetime.pyi', isFile: true, isDir: false },
        { name: '_weakrefset.pyi', isFile: true, isDir: false },
        { name: '_bisect.pyi', isFile: true, isDir: false },
        { name: 'uu.pyi', isFile: true, isDir: false },
        { name: 'keyword.pyi', isFile: true, isDir: false },
        { name: 'threading.pyi', isFile: true, isDir: false },
        { name: 'queue.pyi', isFile: true, isDir: false },
        { name: 'os', isFile: false, isDir: true },
        { name: 'configparser.pyi', isFile: true, isDir: false },
        { name: 'plistlib.pyi', isFile: true, isDir: false },
        { name: 'heapq.pyi', isFile: true, isDir: false },
        { name: 'abc.pyi', isFile: true, isDir: false },
        { name: 'genericpath.pyi', isFile: true, isDir: false },
        { name: 'tarfile.pyi', isFile: true, isDir: false },
        { name: 'opcode.pyi', isFile: true, isDir: false },
        { name: 'errno.pyi', isFile: true, isDir: false },
        { name: 'venv', isFile: false, isDir: true },
        { name: 'subprocess.pyi', isFile: true, isDir: false },
        { name: 'winsound.pyi', isFile: true, isDir: false },
        { name: 'inspect.pyi', isFile: true, isDir: false },
        { name: 'binascii.pyi', isFile: true, isDir: false },
        { name: 'dbm', isFile: false, isDir: true },
        { name: 'formatter.pyi', isFile: true, isDir: false },
        { name: 'numbers.pyi', isFile: true, isDir: false },
        { name: 'tempfile.pyi', isFile: true, isDir: false },
        { name: 'bdb.pyi', isFile: true, isDir: false },
        { name: 'pipes.pyi', isFile: true, isDir: false },
        { name: 'audioop.pyi', isFile: true, isDir: false },
        { name: '_winapi.pyi', isFile: true, isDir: false },
        { name: 'importlib', isFile: false, isDir: true },
        { name: 'xmlrpc', isFile: false, isDir: true },
        { name: '_collections_abc.pyi', isFile: true, isDir: false },
        { name: 'lib2to3', isFile: false, isDir: true },
        { name: 'dataclasses.pyi', isFile: true, isDir: false },
        { name: 'xdrlib.pyi', isFile: true, isDir: false },
        { name: 'platform.pyi', isFile: true, isDir: false },
        { name: 'pydoc_data', isFile: false, isDir: true },
        { name: 'readline.pyi', isFile: true, isDir: false },
        { name: 'zipfile.pyi', isFile: true, isDir: false },
        { name: 'gc.pyi', isFile: true, isDir: false },
        { name: 'fnmatch.pyi', isFile: true, isDir: false },
        { name: 'glob.pyi', isFile: true, isDir: false },
        { name: 'imp.pyi', isFile: true, isDir: false },
        { name: '_threading_local.pyi', isFile: true, isDir: false },
        { name: 'getopt.pyi', isFile: true, isDir: false },
        { name: 'collections', isFile: false, isDir: true },
        { name: 'smtpd.pyi', isFile: true, isDir: false },
        { name: 'selectors.pyi', isFile: true, isDir: false },
        { name: 'nntplib.pyi', isFile: true, isDir: false },
        { name: 'doctest.pyi', isFile: true, isDir: false },
        { name: 'winreg.pyi', isFile: true, isDir: false },
        { name: 'cgitb.pyi', isFile: true, isDir: false },
        { name: 'mailbox.pyi', isFile: true, isDir: false },
        { name: 'uuid.pyi', isFile: true, isDir: false },
        { name: '_json.pyi', isFile: true, isDir: false },
        { name: 'traceback.pyi', isFile: true, isDir: false },
        { name: 'shelve.pyi', isFile: true, isDir: false },
        { name: 'asyncio', isFile: false, isDir: true },
        { name: 'logging', isFile: false, isDir: true },
        { name: '_curses.pyi', isFile: true, isDir: false },
        { name: 'array.pyi', isFile: true, isDir: false },
        { name: 'pickletools.pyi', isFile: true, isDir: false },
        { name: 'graphlib.pyi', isFile: true, isDir: false },
        { name: 'fcntl.pyi', isFile: true, isDir: false },
        { name: 'email', isFile: false, isDir: true },
        { name: 'tracemalloc.pyi', isFile: true, isDir: false },
        { name: '__future__.pyi', isFile: true, isDir: false },
        { name: 'signal.pyi', isFile: true, isDir: false },
        { name: 'macurl2path.pyi', isFile: true, isDir: false },
        { name: 'antigravity.pyi', isFile: true, isDir: false },
        { name: 'io.pyi', isFile: true, isDir: false },
        { name: 're.pyi', isFile: true, isDir: false },
        { name: 'sre_compile.pyi', isFile: true, isDir: false },
        { name: 'hmac.pyi', isFile: true, isDir: false },
        { name: 'pkgutil.pyi', isFile: true, isDir: false },
        { name: 'dis.pyi', isFile: true, isDir: false },
        { name: 'tomllib.pyi', isFile: true, isDir: false },
        { name: 'textwrap.pyi', isFile: true, isDir: false },
        { name: 'enum.pyi', isFile: true, isDir: false },
        { name: 'pyclbr.pyi', isFile: true, isDir: false },
        { name: 'pyexpat', isFile: false, isDir: true },
    ],
    'stdlib/encodings': [
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'utf_8_sig.pyi', isFile: true, isDir: false },
        { name: 'utf_8.pyi', isFile: true, isDir: false },
    ],
    'stdlib/distutils': [
        { name: 'filelist.pyi', isFile: true, isDir: false },
        { name: 'cmd.pyi', isFile: true, isDir: false },
        { name: 'version.pyi', isFile: true, isDir: false },
        { name: 'bcppcompiler.pyi', isFile: true, isDir: false },
        { name: 'sysconfig.pyi', isFile: true, isDir: false },
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'cygwinccompiler.pyi', isFile: true, isDir: false },
        { name: 'text_file.pyi', isFile: true, isDir: false },
        { name: 'core.pyi', isFile: true, isDir: false },
        { name: 'file_util.pyi', isFile: true, isDir: false },
        { name: 'dep_util.pyi', isFile: true, isDir: false },
        { name: 'extension.pyi', isFile: true, isDir: false },
        { name: 'spawn.pyi', isFile: true, isDir: false },
        { name: 'util.pyi', isFile: true, isDir: false },
        { name: 'log.pyi', isFile: true, isDir: false },
        { name: 'fancy_getopt.pyi', isFile: true, isDir: false },
        { name: 'dir_util.pyi', isFile: true, isDir: false },
        { name: 'dist.pyi', isFile: true, isDir: false },
        { name: 'errors.pyi', isFile: true, isDir: false },
        { name: 'unixccompiler.pyi', isFile: true, isDir: false },
        { name: 'config.pyi', isFile: true, isDir: false },
        { name: 'command', isFile: false, isDir: true },
        { name: 'debug.pyi', isFile: true, isDir: false },
        { name: 'ccompiler.pyi', isFile: true, isDir: false },
        { name: 'msvccompiler.pyi', isFile: true, isDir: false },
        { name: 'archive_util.pyi', isFile: true, isDir: false },
    ],
    'stdlib/distutils/command': [
        { name: 'bdist.pyi', isFile: true, isDir: false },
        { name: 'install_lib.pyi', isFile: true, isDir: false },
        { name: 'clean.pyi', isFile: true, isDir: false },
        { name: 'bdist_rpm.pyi', isFile: true, isDir: false },
        { name: 'upload.pyi', isFile: true, isDir: false },
        { name: 'install_data.pyi', isFile: true, isDir: false },
        { name: 'build_ext.pyi', isFile: true, isDir: false },
        { name: 'build_py.pyi', isFile: true, isDir: false },
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'bdist_packager.pyi', isFile: true, isDir: false },
        { name: 'build.pyi', isFile: true, isDir: false },
        { name: 'install.pyi', isFile: true, isDir: false },
        { name: 'install_headers.pyi', isFile: true, isDir: false },
        { name: 'install_scripts.pyi', isFile: true, isDir: false },
        { name: 'check.pyi', isFile: true, isDir: false },
        { name: 'build_scripts.pyi', isFile: true, isDir: false },
        { name: 'install_egg_info.pyi', isFile: true, isDir: false },
        { name: 'config.pyi', isFile: true, isDir: false },
        { name: 'bdist_msi.pyi', isFile: true, isDir: false },
        { name: 'sdist.pyi', isFile: true, isDir: false },
        { name: 'build_clib.pyi', isFile: true, isDir: false },
        { name: 'bdist_wininst.pyi', isFile: true, isDir: false },
        { name: 'register.pyi', isFile: true, isDir: false },
        { name: 'bdist_dumb.pyi', isFile: true, isDir: false },
    ],
    'stdlib/zoneinfo': [{ name: '__init__.pyi', isFile: true, isDir: false }],
    'stdlib/ctypes': [
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'util.pyi', isFile: true, isDir: false },
        { name: 'wintypes.pyi', isFile: true, isDir: false },
    ],
    'stdlib/unittest': [
        { name: 'mock.pyi', isFile: true, isDir: false },
        { name: 'async_case.pyi', isFile: true, isDir: false },
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'runner.pyi', isFile: true, isDir: false },
        { name: 'suite.pyi', isFile: true, isDir: false },
        { name: 'util.pyi', isFile: true, isDir: false },
        { name: 'main.pyi', isFile: true, isDir: false },
        { name: 'case.pyi', isFile: true, isDir: false },
        { name: '_log.pyi', isFile: true, isDir: false },
        { name: 'signals.pyi', isFile: true, isDir: false },
        { name: 'loader.pyi', isFile: true, isDir: false },
        { name: 'result.pyi', isFile: true, isDir: false },
    ],
    'stdlib/curses': [
        { name: 'ascii.pyi', isFile: true, isDir: false },
        { name: 'panel.pyi', isFile: true, isDir: false },
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'textpad.pyi', isFile: true, isDir: false },
    ],
    'stdlib/multiprocessing': [
        { name: 'synchronize.pyi', isFile: true, isDir: false },
        { name: 'dummy', isFile: false, isDir: true },
        { name: 'reduction.pyi', isFile: true, isDir: false },
        { name: 'context.pyi', isFile: true, isDir: false },
        { name: 'queues.pyi', isFile: true, isDir: false },
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'process.pyi', isFile: true, isDir: false },
        { name: 'shared_memory.pyi', isFile: true, isDir: false },
        { name: 'managers.pyi', isFile: true, isDir: false },
        { name: 'spawn.pyi', isFile: true, isDir: false },
        { name: 'sharedctypes.pyi', isFile: true, isDir: false },
        { name: 'connection.pyi', isFile: true, isDir: false },
        { name: 'pool.pyi', isFile: true, isDir: false },
    ],
    'stdlib/multiprocessing/dummy': [
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'connection.pyi', isFile: true, isDir: false },
    ],
    'stdlib/_typeshed': [
        { name: 'dbapi.pyi', isFile: true, isDir: false },
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'README.md', isFile: true, isDir: false },
        { name: 'wsgi.pyi', isFile: true, isDir: false },
        { name: 'xml.pyi', isFile: true, isDir: false },
    ],
    'stdlib/msilib': [
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'text.pyi', isFile: true, isDir: false },
        { name: 'schema.pyi', isFile: true, isDir: false },
        { name: 'sequence.pyi', isFile: true, isDir: false },
    ],
    'stdlib/urllib': [
        { name: 'error.pyi', isFile: true, isDir: false },
        { name: 'request.pyi', isFile: true, isDir: false },
        { name: 'robotparser.pyi', isFile: true, isDir: false },
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'parse.pyi', isFile: true, isDir: false },
        { name: 'response.pyi', isFile: true, isDir: false },
    ],
    'stdlib/html': [
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'parser.pyi', isFile: true, isDir: false },
        { name: 'entities.pyi', isFile: true, isDir: false },
    ],
    'stdlib/tkinter': [
        { name: 'ttk.pyi', isFile: true, isDir: false },
        { name: 'commondialog.pyi', isFile: true, isDir: false },
        { name: 'messagebox.pyi', isFile: true, isDir: false },
        { name: 'filedialog.pyi', isFile: true, isDir: false },
        { name: 'dialog.pyi', isFile: true, isDir: false },
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'font.pyi', isFile: true, isDir: false },
        { name: 'constants.pyi', isFile: true, isDir: false },
        { name: 'simpledialog.pyi', isFile: true, isDir: false },
        { name: 'scrolledtext.pyi', isFile: true, isDir: false },
        { name: 'colorchooser.pyi', isFile: true, isDir: false },
        { name: 'dnd.pyi', isFile: true, isDir: false },
        { name: 'tix.pyi', isFile: true, isDir: false },
    ],
    'stdlib/xml': [
        { name: 'parsers', isFile: false, isDir: true },
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'sax', isFile: false, isDir: true },
        { name: 'dom', isFile: false, isDir: true },
        { name: 'etree', isFile: false, isDir: true },
    ],
    'stdlib/xml/parsers': [
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'expat', isFile: false, isDir: true },
    ],
    'stdlib/xml/parsers/expat': [
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'errors.pyi', isFile: true, isDir: false },
        { name: 'model.pyi', isFile: true, isDir: false },
    ],
    'stdlib/xml/sax': [
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'handler.pyi', isFile: true, isDir: false },
        { name: 'saxutils.pyi', isFile: true, isDir: false },
        { name: 'xmlreader.pyi', isFile: true, isDir: false },
    ],
    'stdlib/xml/dom': [
        { name: 'minicompat.pyi', isFile: true, isDir: false },
        { name: 'minidom.pyi', isFile: true, isDir: false },
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'xmlbuilder.pyi', isFile: true, isDir: false },
        { name: 'domreg.pyi', isFile: true, isDir: false },
        { name: 'expatbuilder.pyi', isFile: true, isDir: false },
        { name: 'NodeFilter.pyi', isFile: true, isDir: false },
        { name: 'pulldom.pyi', isFile: true, isDir: false },
    ],
    'stdlib/xml/etree': [
        { name: 'cElementTree.pyi', isFile: true, isDir: false },
        { name: 'ElementTree.pyi', isFile: true, isDir: false },
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'ElementInclude.pyi', isFile: true, isDir: false },
        { name: 'ElementPath.pyi', isFile: true, isDir: false },
    ],
    'stdlib/wsgiref': [
        { name: 'validate.pyi', isFile: true, isDir: false },
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'simple_server.pyi', isFile: true, isDir: false },
        { name: 'handlers.pyi', isFile: true, isDir: false },
        { name: 'util.pyi', isFile: true, isDir: false },
        { name: 'types.pyi', isFile: true, isDir: false },
        { name: 'headers.pyi', isFile: true, isDir: false },
    ],
    'stdlib/json': [
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'encoder.pyi', isFile: true, isDir: false },
        { name: 'tool.pyi', isFile: true, isDir: false },
        { name: 'decoder.pyi', isFile: true, isDir: false },
    ],
    'stdlib/http': [
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'client.pyi', isFile: true, isDir: false },
        { name: 'cookiejar.pyi', isFile: true, isDir: false },
        { name: 'cookies.pyi', isFile: true, isDir: false },
        { name: 'server.pyi', isFile: true, isDir: false },
    ],
    'stdlib/sqlite3': [
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'dbapi2.pyi', isFile: true, isDir: false },
    ],
    'stdlib/ensurepip': [{ name: '__init__.pyi', isFile: true, isDir: false }],
    'stdlib/concurrent': [
        { name: 'futures', isFile: false, isDir: true },
        { name: '__init__.pyi', isFile: true, isDir: false },
    ],
    'stdlib/concurrent/futures': [
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'process.pyi', isFile: true, isDir: false },
        { name: 'thread.pyi', isFile: true, isDir: false },
        { name: '_base.pyi', isFile: true, isDir: false },
    ],
    'stdlib/os': [
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'path.pyi', isFile: true, isDir: false },
    ],
    'stdlib/venv': [{ name: '__init__.pyi', isFile: true, isDir: false }],
    'stdlib/dbm': [
        { name: 'ndbm.pyi', isFile: true, isDir: false },
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'dumb.pyi', isFile: true, isDir: false },
        { name: 'gnu.pyi', isFile: true, isDir: false },
    ],
    'stdlib/importlib': [
        { name: 'resources.pyi', isFile: true, isDir: false },
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'machinery.pyi', isFile: true, isDir: false },
        { name: 'util.pyi', isFile: true, isDir: false },
        { name: 'abc.pyi', isFile: true, isDir: false },
        { name: 'metadata', isFile: false, isDir: true },
    ],
    'stdlib/importlib/metadata': [
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: '_meta.pyi', isFile: true, isDir: false },
    ],
    'stdlib/xmlrpc': [
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'client.pyi', isFile: true, isDir: false },
        { name: 'server.pyi', isFile: true, isDir: false },
    ],
    'stdlib/lib2to3': [
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'pytree.pyi', isFile: true, isDir: false },
        { name: 'pygram.pyi', isFile: true, isDir: false },
        { name: 'pgen2', isFile: false, isDir: true },
        { name: 'refactor.pyi', isFile: true, isDir: false },
    ],
    'stdlib/lib2to3/pgen2': [
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'pgen.pyi', isFile: true, isDir: false },
        { name: 'parse.pyi', isFile: true, isDir: false },
        { name: 'tokenize.pyi', isFile: true, isDir: false },
        { name: 'token.pyi', isFile: true, isDir: false },
        { name: 'driver.pyi', isFile: true, isDir: false },
        { name: 'literals.pyi', isFile: true, isDir: false },
        { name: 'grammar.pyi', isFile: true, isDir: false },
    ],
    'stdlib/pydoc_data': [
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'topics.pyi', isFile: true, isDir: false },
    ],
    'stdlib/collections': [
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'abc.pyi', isFile: true, isDir: false },
    ],
    'stdlib/asyncio': [
        { name: 'proactor_events.pyi', isFile: true, isDir: false },
        { name: 'protocols.pyi', isFile: true, isDir: false },
        { name: 'transports.pyi', isFile: true, isDir: false },
        { name: 'queues.pyi', isFile: true, isDir: false },
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'runners.pyi', isFile: true, isDir: false },
        { name: 'coroutines.pyi', isFile: true, isDir: false },
        { name: 'constants.pyi', isFile: true, isDir: false },
        { name: 'selector_events.pyi', isFile: true, isDir: false },
        { name: 'base_events.pyi', isFile: true, isDir: false },
        { name: 'futures.pyi', isFile: true, isDir: false },
        { name: 'mixins.pyi', isFile: true, isDir: false },
        { name: 'exceptions.pyi', isFile: true, isDir: false },
        { name: 'compat.pyi', isFile: true, isDir: false },
        { name: 'base_futures.pyi', isFile: true, isDir: false },
        { name: 'log.pyi', isFile: true, isDir: false },
        { name: 'locks.pyi', isFile: true, isDir: false },
        { name: 'threads.pyi', isFile: true, isDir: false },
        { name: 'trsock.pyi', isFile: true, isDir: false },
        { name: 'sslproto.pyi', isFile: true, isDir: false },
        { name: 'staggered.pyi', isFile: true, isDir: false },
        { name: 'unix_events.pyi', isFile: true, isDir: false },
        { name: 'subprocess.pyi', isFile: true, isDir: false },
        { name: 'windows_utils.pyi', isFile: true, isDir: false },
        { name: 'streams.pyi', isFile: true, isDir: false },
        { name: 'events.pyi', isFile: true, isDir: false },
        { name: 'taskgroups.pyi', isFile: true, isDir: false },
        { name: 'base_tasks.pyi', isFile: true, isDir: false },
        { name: 'tasks.pyi', isFile: true, isDir: false },
        { name: 'windows_events.pyi', isFile: true, isDir: false },
        { name: 'format_helpers.pyi', isFile: true, isDir: false },
        { name: 'base_subprocess.pyi', isFile: true, isDir: false },
    ],
    'stdlib/logging': [
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'handlers.pyi', isFile: true, isDir: false },
        { name: 'config.pyi', isFile: true, isDir: false },
    ],
    'stdlib/email': [
        { name: '_header_value_parser.pyi', isFile: true, isDir: false },
        { name: 'quoprimime.pyi', isFile: true, isDir: false },
        { name: 'header.pyi', isFile: true, isDir: false },
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'message.pyi', isFile: true, isDir: false },
        { name: 'feedparser.pyi', isFile: true, isDir: false },
        { name: 'generator.pyi', isFile: true, isDir: false },
        { name: 'utils.pyi', isFile: true, isDir: false },
        { name: 'charset.pyi', isFile: true, isDir: false },
        { name: 'policy.pyi', isFile: true, isDir: false },
        { name: 'encoders.pyi', isFile: true, isDir: false },
        { name: 'parser.pyi', isFile: true, isDir: false },
        { name: 'errors.pyi', isFile: true, isDir: false },
        { name: 'mime', isFile: false, isDir: true },
        { name: 'iterators.pyi', isFile: true, isDir: false },
        { name: 'base64mime.pyi', isFile: true, isDir: false },
        { name: 'contentmanager.pyi', isFile: true, isDir: false },
        { name: 'headerregistry.pyi', isFile: true, isDir: false },
    ],
    'stdlib/email/mime': [
        { name: 'audio.pyi', isFile: true, isDir: false },
        { name: 'base.pyi', isFile: true, isDir: false },
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'text.pyi', isFile: true, isDir: false },
        { name: 'image.pyi', isFile: true, isDir: false },
        { name: 'message.pyi', isFile: true, isDir: false },
        { name: 'nonmultipart.pyi', isFile: true, isDir: false },
        { name: 'application.pyi', isFile: true, isDir: false },
        { name: 'multipart.pyi', isFile: true, isDir: false },
    ],
    'stdlib/pyexpat': [
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'errors.pyi', isFile: true, isDir: false },
        { name: 'model.pyi', isFile: true, isDir: false },
    ],
    'stubs/requests': [
        { name: 'requests', isFile: false, isDir: true },
        { name: 'METADATA.toml', isFile: true, isDir: false },
    ],
    'stubs/requests/requests': [
        { name: 'structures.pyi', isFile: true, isDir: false },
        { name: '__init__.pyi', isFile: true, isDir: false },
        { name: 'exceptions.pyi', isFile: true, isDir: false },
        { name: 'compat.pyi', isFile: true, isDir: false },
        { name: 'api.pyi', isFile: true, isDir: false },
        { name: 'utils.pyi', isFile: true, isDir: false },
        { name: 'cookies.pyi', isFile: true, isDir: false },
        { name: 'sessions.pyi', isFile: true, isDir: false },
        { name: 'auth.pyi', isFile: true, isDir: false },
        { name: 'models.pyi', isFile: true, isDir: false },
        { name: 'packages', isFile: false, isDir: true },
        { name: 'hooks.pyi', isFile: true, isDir: false },
        { name: 'status_codes.pyi', isFile: true, isDir: false },
        { name: 'adapters.pyi', isFile: true, isDir: false },
    ],
    'stubs/requests/requests/packages': [{ name: '__init__.pyi', isFile: true, isDir: false }],
};
