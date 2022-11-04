"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/.pnpm/registry.npmmirror.com+picocolors@1.0.0/node_modules/picocolors/picocolors.js
var require_picocolors = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+picocolors@1.0.0/node_modules/picocolors/picocolors.js"(exports, module2) {
    var tty = require("tty");
    var isColorSupported = !("NO_COLOR" in process.env || process.argv.includes("--no-color")) && ("FORCE_COLOR" in process.env || process.argv.includes("--color") || process.platform === "win32" || tty.isatty(1) && process.env.TERM !== "dumb" || "CI" in process.env);
    var formatter = (open, close, replace = open) => (input) => {
      let string = "" + input;
      let index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
    var replaceClose = (string, close, replace, index) => {
      let start = string.substring(0, index) + replace;
      let end = string.substring(index + close.length);
      let nextIndex = end.indexOf(close);
      return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
    };
    var createColors = (enabled = isColorSupported) => ({
      isColorSupported: enabled,
      reset: enabled ? (s) => `\x1B[0m${s}\x1B[0m` : String,
      bold: enabled ? formatter("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m") : String,
      dim: enabled ? formatter("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m") : String,
      italic: enabled ? formatter("\x1B[3m", "\x1B[23m") : String,
      underline: enabled ? formatter("\x1B[4m", "\x1B[24m") : String,
      inverse: enabled ? formatter("\x1B[7m", "\x1B[27m") : String,
      hidden: enabled ? formatter("\x1B[8m", "\x1B[28m") : String,
      strikethrough: enabled ? formatter("\x1B[9m", "\x1B[29m") : String,
      black: enabled ? formatter("\x1B[30m", "\x1B[39m") : String,
      red: enabled ? formatter("\x1B[31m", "\x1B[39m") : String,
      green: enabled ? formatter("\x1B[32m", "\x1B[39m") : String,
      yellow: enabled ? formatter("\x1B[33m", "\x1B[39m") : String,
      blue: enabled ? formatter("\x1B[34m", "\x1B[39m") : String,
      magenta: enabled ? formatter("\x1B[35m", "\x1B[39m") : String,
      cyan: enabled ? formatter("\x1B[36m", "\x1B[39m") : String,
      white: enabled ? formatter("\x1B[37m", "\x1B[39m") : String,
      gray: enabled ? formatter("\x1B[90m", "\x1B[39m") : String,
      bgBlack: enabled ? formatter("\x1B[40m", "\x1B[49m") : String,
      bgRed: enabled ? formatter("\x1B[41m", "\x1B[49m") : String,
      bgGreen: enabled ? formatter("\x1B[42m", "\x1B[49m") : String,
      bgYellow: enabled ? formatter("\x1B[43m", "\x1B[49m") : String,
      bgBlue: enabled ? formatter("\x1B[44m", "\x1B[49m") : String,
      bgMagenta: enabled ? formatter("\x1B[45m", "\x1B[49m") : String,
      bgCyan: enabled ? formatter("\x1B[46m", "\x1B[49m") : String,
      bgWhite: enabled ? formatter("\x1B[47m", "\x1B[49m") : String
    });
    module2.exports = createColors();
    module2.exports.createColors = createColors;
  }
});

// node_modules/.pnpm/registry.npmmirror.com+shell-quote@1.7.4/node_modules/shell-quote/index.js
var require_shell_quote = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+shell-quote@1.7.4/node_modules/shell-quote/index.js"(exports) {
    "use strict";
    exports.quote = function(xs) {
      return xs.map(function(s) {
        if (s && typeof s === "object") {
          return s.op.replace(/(.)/g, "\\$1");
        } else if (/["\s]/.test(s) && !/'/.test(s)) {
          return "'" + s.replace(/(['\\])/g, "\\$1") + "'";
        } else if (/["'\s]/.test(s)) {
          return '"' + s.replace(/(["\\$`!])/g, "\\$1") + '"';
        }
        return String(s).replace(/([A-Za-z]:)?([#!"$&'()*,:;<=>?@[\\\]^`{|}])/g, "$1\\$2");
      }).join(" ");
    };
    var CONTROL = "(?:" + [
      "\\|\\|",
      "\\&\\&",
      ";;",
      "\\|\\&",
      "\\<\\(",
      ">>",
      ">\\&",
      "[&;()|<>]"
    ].join("|") + ")";
    var META = "|&;()<> \\t";
    var BAREWORD = `(\\\\['"` + META + `]|[^\\s'"` + META + "])+";
    var SINGLE_QUOTE = '"((\\\\"|[^"])*?)"';
    var DOUBLE_QUOTE = "'((\\\\'|[^'])*?)'";
    var TOKEN = "";
    for (i = 0; i < 4; i++) {
      TOKEN += (Math.pow(16, 8) * Math.random()).toString(16);
    }
    var i;
    function parse(s, env, opts) {
      var chunker = new RegExp([
        "(" + CONTROL + ")",
        "(" + BAREWORD + "|" + SINGLE_QUOTE + "|" + DOUBLE_QUOTE + ")*"
      ].join("|"), "g");
      var match = s.match(chunker).filter(Boolean);
      if (!match) {
        return [];
      }
      if (!env) {
        env = {};
      }
      if (!opts) {
        opts = {};
      }
      var commented = false;
      function getVar(_, pre, key) {
        var r = typeof env === "function" ? env(key) : env[key];
        if (r === void 0 && key != "") {
          r = "";
        } else if (r === void 0) {
          r = "$";
        }
        if (typeof r === "object") {
          return pre + TOKEN + JSON.stringify(r) + TOKEN;
        }
        return pre + r;
      }
      return match.map(function(s2, j) {
        if (commented) {
          return void 0;
        }
        if (RegExp("^" + CONTROL + "$").test(s2)) {
          return { op: s2 };
        }
        var SQ = "'";
        var DQ = '"';
        var DS = "$";
        var BS = opts.escape || "\\";
        var quote = false;
        var esc = false;
        var out = "";
        var isGlob = false;
        var i2;
        function parseEnvVar() {
          i2 += 1;
          var varend;
          var varname;
          if (s2.charAt(i2) === "{") {
            i2 += 1;
            if (s2.charAt(i2) === "}") {
              throw new Error("Bad substitution: " + s2.substr(i2 - 2, 3));
            }
            varend = s2.indexOf("}", i2);
            if (varend < 0) {
              throw new Error("Bad substitution: " + s2.substr(i2));
            }
            varname = s2.substr(i2, varend - i2);
            i2 = varend;
          } else if (/[*@#?$!_-]/.test(s2.charAt(i2))) {
            varname = s2.charAt(i2);
            i2 += 1;
          } else {
            varend = s2.substr(i2).match(/[^\w\d_]/);
            if (!varend) {
              varname = s2.substr(i2);
              i2 = s2.length;
            } else {
              varname = s2.substr(i2, varend.index);
              i2 += varend.index - 1;
            }
          }
          return getVar(null, "", varname);
        }
        for (i2 = 0; i2 < s2.length; i2++) {
          var c = s2.charAt(i2);
          isGlob = isGlob || !quote && (c === "*" || c === "?");
          if (esc) {
            out += c;
            esc = false;
          } else if (quote) {
            if (c === quote) {
              quote = false;
            } else if (quote == SQ) {
              out += c;
            } else {
              if (c === BS) {
                i2 += 1;
                c = s2.charAt(i2);
                if (c === DQ || c === BS || c === DS) {
                  out += c;
                } else {
                  out += BS + c;
                }
              } else if (c === DS) {
                out += parseEnvVar();
              } else {
                out += c;
              }
            }
          } else if (c === DQ || c === SQ) {
            quote = c;
          } else if (RegExp("^" + CONTROL + "$").test(c)) {
            return { op: s2 };
          } else if (/^#$/.test(c)) {
            commented = true;
            if (out.length) {
              return [out, { comment: s2.slice(i2 + 1) + match.slice(j + 1).join(" ") }];
            }
            return [{ comment: s2.slice(i2 + 1) + match.slice(j + 1).join(" ") }];
          } else if (c === BS) {
            esc = true;
          } else if (c === DS) {
            out += parseEnvVar();
          } else {
            out += c;
          }
        }
        if (isGlob) {
          return { op: "glob", pattern: out };
        }
        return out;
      }).reduce(function(prev, arg) {
        if (arg === void 0) {
          return prev;
        }
        return prev.concat(arg);
      }, []);
    }
    exports.parse = function(s, env, opts) {
      var mapped = parse(s, env, opts);
      if (typeof env !== "function") {
        return mapped;
      }
      return mapped.reduce(function(acc, s2) {
        if (typeof s2 === "object") {
          return acc.concat(s2);
        }
        var xs = s2.split(RegExp("(" + TOKEN + ".*?" + TOKEN + ")", "g"));
        if (xs.length === 1) {
          return acc.concat(xs[0]);
        }
        return acc.concat(xs.filter(Boolean).map(function(x) {
          if (RegExp("^" + TOKEN).test(x)) {
            return JSON.parse(x.split(TOKEN)[1]);
          }
          return x;
        }));
      }, []);
    };
  }
});

// node_modules/.pnpm/registry.npmmirror.com+launch-editor@2.6.0/node_modules/launch-editor/editor-info/osx.js
var require_osx = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+launch-editor@2.6.0/node_modules/launch-editor/editor-info/osx.js"(exports, module2) {
    module2.exports = {
      "/Applications/Atom.app/Contents/MacOS/Atom": "atom",
      "/Applications/Atom Beta.app/Contents/MacOS/Atom Beta": "/Applications/Atom Beta.app/Contents/MacOS/Atom Beta",
      "/Applications/Brackets.app/Contents/MacOS/Brackets": "brackets",
      "/Applications/Sublime Text.app/Contents/MacOS/Sublime Text": "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl",
      "/Applications/Sublime Text.app/Contents/MacOS/sublime_text": "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl",
      "/Applications/Sublime Text 2.app/Contents/MacOS/Sublime Text 2": "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl",
      "/Applications/Sublime Text Dev.app/Contents/MacOS/Sublime Text": "/Applications/Sublime Text Dev.app/Contents/SharedSupport/bin/subl",
      "/Applications/Visual Studio Code.app/Contents/MacOS/Electron": "code",
      "/Applications/Visual Studio Code - Insiders.app/Contents/MacOS/Electron": "code-insiders",
      "/Applications/VSCodium.app/Contents/MacOS/Electron": "codium",
      "/Applications/AppCode.app/Contents/MacOS/appcode": "/Applications/AppCode.app/Contents/MacOS/appcode",
      "/Applications/CLion.app/Contents/MacOS/clion": "/Applications/CLion.app/Contents/MacOS/clion",
      "/Applications/IntelliJ IDEA.app/Contents/MacOS/idea": "/Applications/IntelliJ IDEA.app/Contents/MacOS/idea",
      "/Applications/PhpStorm.app/Contents/MacOS/phpstorm": "/Applications/PhpStorm.app/Contents/MacOS/phpstorm",
      "/Applications/PyCharm.app/Contents/MacOS/pycharm": "/Applications/PyCharm.app/Contents/MacOS/pycharm",
      "/Applications/PyCharm CE.app/Contents/MacOS/pycharm": "/Applications/PyCharm CE.app/Contents/MacOS/pycharm",
      "/Applications/RubyMine.app/Contents/MacOS/rubymine": "/Applications/RubyMine.app/Contents/MacOS/rubymine",
      "/Applications/WebStorm.app/Contents/MacOS/webstorm": "/Applications/WebStorm.app/Contents/MacOS/webstorm",
      "/Applications/MacVim.app/Contents/MacOS/MacVim": "mvim",
      "/Applications/GoLand.app/Contents/MacOS/goland": "/Applications/GoLand.app/Contents/MacOS/goland",
      "/Applications/Rider.app/Contents/MacOS/rider": "/Applications/Rider.app/Contents/MacOS/rider"
    };
  }
});

// node_modules/.pnpm/registry.npmmirror.com+launch-editor@2.6.0/node_modules/launch-editor/editor-info/linux.js
var require_linux = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+launch-editor@2.6.0/node_modules/launch-editor/editor-info/linux.js"(exports, module2) {
    module2.exports = {
      atom: "atom",
      Brackets: "brackets",
      code: "code",
      "code-insiders": "code-insiders",
      codium: "codium",
      vscodium: "vscodium",
      emacs: "emacs",
      gvim: "gvim",
      "idea.sh": "idea",
      "phpstorm.sh": "phpstorm",
      "pycharm.sh": "pycharm",
      "rubymine.sh": "rubymine",
      sublime_text: "subl",
      vim: "vim",
      "webstorm.sh": "webstorm",
      "goland.sh": "goland",
      "rider.sh": "rider"
    };
  }
});

// node_modules/.pnpm/registry.npmmirror.com+launch-editor@2.6.0/node_modules/launch-editor/editor-info/windows.js
var require_windows = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+launch-editor@2.6.0/node_modules/launch-editor/editor-info/windows.js"(exports, module2) {
    module2.exports = [
      "Brackets.exe",
      "Code.exe",
      "Code - Insiders.exe",
      "VSCodium.exe",
      "atom.exe",
      "sublime_text.exe",
      "notepad++.exe",
      "clion.exe",
      "clion64.exe",
      "idea.exe",
      "idea64.exe",
      "phpstorm.exe",
      "phpstorm64.exe",
      "pycharm.exe",
      "pycharm64.exe",
      "rubymine.exe",
      "rubymine64.exe",
      "webstorm.exe",
      "webstorm64.exe",
      "goland.exe",
      "goland64.exe",
      "rider.exe",
      "rider64.exe"
    ];
  }
});

// node_modules/.pnpm/registry.npmmirror.com+launch-editor@2.6.0/node_modules/launch-editor/guess.js
var require_guess = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+launch-editor@2.6.0/node_modules/launch-editor/guess.js"(exports, module2) {
    var path = require("path");
    var shellQuote = require_shell_quote();
    var childProcess = require("child_process");
    var COMMON_EDITORS_OSX = require_osx();
    var COMMON_EDITORS_LINUX = require_linux();
    var COMMON_EDITORS_WIN = require_windows();
    module2.exports = function guessEditor(specifiedEditor) {
      if (specifiedEditor) {
        return shellQuote.parse(specifiedEditor);
      }
      if (process.env.LAUNCH_EDITOR) {
        return [process.env.LAUNCH_EDITOR];
      }
      if (process.versions.webcontainer) {
        return [process.env.EDITOR || "code"];
      }
      try {
        if (process.platform === "darwin") {
          const output = childProcess.execSync("ps x -o comm=", {
            stdio: ["pipe", "pipe", "ignore"]
          }).toString();
          const processNames = Object.keys(COMMON_EDITORS_OSX);
          const processList = output.split("\n");
          for (let i = 0; i < processNames.length; i++) {
            const processName = processNames[i];
            if (output.indexOf(processName) !== -1) {
              return [COMMON_EDITORS_OSX[processName]];
            }
            const processNameWithoutApplications = processName.replace("/Applications", "");
            if (output.indexOf(processNameWithoutApplications) !== -1) {
              if (processName !== COMMON_EDITORS_OSX[processName]) {
                return [COMMON_EDITORS_OSX[processName]];
              }
              const runningProcess = processList.find((procName) => procName.endsWith(processNameWithoutApplications));
              if (runningProcess !== void 0) {
                return [runningProcess];
              }
            }
          }
        } else if (process.platform === "win32") {
          const output = childProcess.execSync(
            'powershell -NoProfile -Command "Get-CimInstance -Query \\"select executablepath from win32_process where executablepath is not null\\" | % { $_.ExecutablePath }"',
            {
              stdio: ["pipe", "pipe", "ignore"]
            }
          ).toString();
          const runningProcesses = output.split("\r\n");
          for (let i = 0; i < runningProcesses.length; i++) {
            const fullProcessPath = runningProcesses[i].trim();
            const shortProcessName = path.basename(fullProcessPath);
            if (COMMON_EDITORS_WIN.indexOf(shortProcessName) !== -1) {
              return [fullProcessPath];
            }
          }
        } else if (process.platform === "linux") {
          const output = childProcess.execSync("ps x --no-heading -o comm --sort=comm", {
            stdio: ["pipe", "pipe", "ignore"]
          }).toString();
          const processNames = Object.keys(COMMON_EDITORS_LINUX);
          for (let i = 0; i < processNames.length; i++) {
            const processName = processNames[i];
            if (output.indexOf(processName) !== -1) {
              return [COMMON_EDITORS_LINUX[processName]];
            }
          }
        }
      } catch (error) {
      }
      if (process.env.VISUAL) {
        return [process.env.VISUAL];
      } else if (process.env.EDITOR) {
        return [process.env.EDITOR];
      }
      return [null];
    };
  }
});

// node_modules/.pnpm/registry.npmmirror.com+launch-editor@2.6.0/node_modules/launch-editor/get-args.js
var require_get_args = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+launch-editor@2.6.0/node_modules/launch-editor/get-args.js"(exports, module2) {
    var path = require("path");
    module2.exports = function getArgumentsForPosition(editor, fileName, lineNumber, columnNumber = 1) {
      const editorBasename = path.basename(editor).replace(/\.(exe|cmd|bat)$/i, "");
      switch (editorBasename) {
        case "atom":
        case "Atom":
        case "Atom Beta":
        case "subl":
        case "sublime":
        case "sublime_text":
        case "wstorm":
        case "charm":
          return [`${fileName}:${lineNumber}:${columnNumber}`];
        case "notepad++":
          return ["-n" + lineNumber, "-c" + columnNumber, fileName];
        case "vim":
        case "mvim":
          return [`+call cursor(${lineNumber}, ${columnNumber})`, fileName];
        case "joe":
        case "gvim":
          return [`+${lineNumber}`, fileName];
        case "emacs":
        case "emacsclient":
          return [`+${lineNumber}:${columnNumber}`, fileName];
        case "rmate":
        case "mate":
        case "mine":
          return ["--line", lineNumber, fileName];
        case "code":
        case "Code":
        case "code-insiders":
        case "Code - Insiders":
        case "codium":
        case "vscodium":
        case "VSCodium":
          return ["-r", "-g", `${fileName}:${lineNumber}:${columnNumber}`];
        case "appcode":
        case "clion":
        case "clion64":
        case "idea":
        case "idea64":
        case "phpstorm":
        case "phpstorm64":
        case "pycharm":
        case "pycharm64":
        case "rubymine":
        case "rubymine64":
        case "webstorm":
        case "webstorm64":
        case "goland":
        case "goland64":
        case "rider":
        case "rider64":
          return ["--line", lineNumber, "--column", columnNumber, fileName];
      }
      if (process.env.LAUNCH_EDITOR) {
        return [fileName, lineNumber, columnNumber];
      }
      return [fileName];
    };
  }
});

// node_modules/.pnpm/registry.npmmirror.com+launch-editor@2.6.0/node_modules/launch-editor/index.js
var require_launch_editor = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+launch-editor@2.6.0/node_modules/launch-editor/index.js"(exports, module2) {
    var fs = require("fs");
    var os = require("os");
    var path = require("path");
    var colors = require_picocolors();
    var childProcess = require("child_process");
    var guessEditor = require_guess();
    var getArgumentsForPosition = require_get_args();
    function wrapErrorCallback(cb) {
      return (fileName, errorMessage) => {
        console.log();
        console.log(
          colors.red("Could not open " + path.basename(fileName) + " in the editor.")
        );
        if (errorMessage) {
          if (errorMessage[errorMessage.length - 1] !== ".") {
            errorMessage += ".";
          }
          console.log(
            colors.red("The editor process exited with an error: " + errorMessage)
          );
        }
        console.log();
        if (cb)
          cb(fileName, errorMessage);
      };
    }
    function isTerminalEditor(editor) {
      switch (editor) {
        case "vim":
        case "emacs":
        case "nano":
          return true;
      }
      return false;
    }
    var positionRE = /:(\d+)(:(\d+))?$/;
    function parseFile(file) {
      const fileName = file.replace(positionRE, "");
      const match = file.match(positionRE);
      const lineNumber = match && match[1];
      const columnNumber = match && match[3];
      return {
        fileName,
        lineNumber,
        columnNumber
      };
    }
    var _childProcess = null;
    function launchEditor(file, specifiedEditor, onErrorCallback) {
      const parsed = parseFile(file);
      let { fileName } = parsed;
      const { lineNumber, columnNumber } = parsed;
      if (!fs.existsSync(fileName)) {
        return;
      }
      if (typeof specifiedEditor === "function") {
        onErrorCallback = specifiedEditor;
        specifiedEditor = void 0;
      }
      onErrorCallback = wrapErrorCallback(onErrorCallback);
      const [editor, ...args] = guessEditor(specifiedEditor);
      if (!editor) {
        onErrorCallback(fileName, null);
        return;
      }
      if (process.platform === "linux" && fileName.startsWith("/mnt/") && /Microsoft/i.test(os.release())) {
        fileName = path.relative("", fileName);
      }
      if (lineNumber) {
        const extraArgs = getArgumentsForPosition(editor, fileName, lineNumber, columnNumber);
        args.push.apply(args, extraArgs);
      } else {
        args.push(fileName);
      }
      if (_childProcess && isTerminalEditor(editor)) {
        _childProcess.kill("SIGKILL");
      }
      if (process.platform === "win32") {
        _childProcess = childProcess.spawn(
          "cmd.exe",
          ["/C", editor].concat(args),
          { stdio: "inherit" }
        );
      } else {
        _childProcess = childProcess.spawn(editor, args, { stdio: "inherit" });
      }
      _childProcess.on("exit", function(errorCode) {
        _childProcess = null;
        if (errorCode) {
          onErrorCallback(fileName, "(code " + errorCode + ")");
        }
      });
      _childProcess.on("error", function(error) {
        onErrorCallback(fileName, error.message);
      });
    }
    module2.exports = launchEditor;
  }
});

// node_modules/.pnpm/registry.npmmirror.com+launch-editor-middleware@2.6.0/node_modules/launch-editor-middleware/index.js
var require_launch_editor_middleware = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+launch-editor-middleware@2.6.0/node_modules/launch-editor-middleware/index.js"(exports, module2) {
    var url = require("url");
    var path = require("path");
    var launch = require_launch_editor();
    module2.exports = (specifiedEditor, srcRoot, onErrorCallback) => {
      if (typeof specifiedEditor === "function") {
        onErrorCallback = specifiedEditor;
        specifiedEditor = void 0;
      }
      if (typeof srcRoot === "function") {
        onErrorCallback = srcRoot;
        srcRoot = void 0;
      }
      srcRoot = srcRoot || process.cwd();
      return function launchEditorMiddleware(req, res, next) {
        const { file } = url.parse(req.url, true).query || {};
        if (!file) {
          res.statusCode = 500;
          res.end(`launch-editor-middleware: required query param "file" is missing.`);
        } else {
          launch(path.resolve(srcRoot, file), specifiedEditor, onErrorCallback);
          res.end();
        }
      };
    };
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  openEditor: () => openEditor
});
module.exports = __toCommonJS(src_exports);
var import_launch_editor_middleware = __toESM(require_launch_editor_middleware());
var import_http = require("http");
var import_net = require("net");
async function openEditor(specifiedEditor = "code", port = 5001) {
  const server = (0, import_http.createServer)();
  server.on("request", (req, res) => {
    const next = () => {
      res.end(JSON.stringify({
        data: 0
      }));
    };
    const open = (0, import_launch_editor_middleware.default)(specifiedEditor);
    open(req, res, next);
  });
  const canUse = await checkPort(port);
  if (canUse) {
    server.listen(port, () => {
      console.log("open in editor server run at http://127.0.0.1:" + port);
    });
  }
}
function checkPort(port) {
  return new Promise((resolve) => {
    const server = (0, import_net.createServer)().listen(port);
    server.on("listening", () => {
      server.close();
      resolve(true);
    });
    server.on("error", () => resolve(false));
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  openEditor
});
