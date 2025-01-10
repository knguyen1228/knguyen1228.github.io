// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8G2QE":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"ebWYT":[function(require,module,exports,__globalThis) {
var _aTabGroupJs = require("@georapbox/a-tab-group/dist/a-tab-group.js");
var _webShareDefinedJs = require("@georapbox/web-share-element/dist/web-share-defined.js");
var _filesDropzoneDefinedJs = require("@georapbox/files-dropzone-element/dist/files-dropzone-defined.js");
var _resizeObserverDefinedJs = require("@georapbox/resize-observer-element/dist/resize-observer-defined.js");
var _modalElementDefinedJs = require("@georapbox/modal-element/dist/modal-element-defined.js");
var _constantsJs = require("./constants.js");
var _storageJs = require("./services/storage.js");
var _debounceJs = require("./utils/debounce.js");
var _logJs = require("./utils/log.js");
var _isDialogElementSupportedJs = require("./utils/isDialogElementSupported.js");
var _resultJs = require("./helpers/result.js");
var _triggerScanEffectsJs = require("./helpers/triggerScanEffects.js");
var _resizeScanFrameJs = require("./helpers/resizeScanFrame.js");
var _barcodeReaderJs = require("./helpers/BarcodeReader.js");
var _toggleTorchButtonStatusJs = require("./helpers/toggleTorchButtonStatus.js");
var _videoCaptureJs = require("./components/video-capture.js");
var _clipboardCopyJs = require("./components/clipboard-copy.js");
var _bsResultJs = require("./components/bs-result.js");
var _bsSettingsJs = require("./components/bs-settings.js");
var _bsHistoryJs = require("./components/bs-history.js");
(async function() {
    const tabGroupEl = document.querySelector('a-tab-group');
    const videoCaptureEl = document.querySelector('video-capture');
    const bsSettingsEl = document.querySelector('bs-settings');
    const bsHistoryEl = document.querySelector('bs-history');
    const cameraPanel = document.getElementById('cameraPanel');
    const filePanel = document.getElementById('filePanel');
    const scanInstructionsEl = document.getElementById('scanInstructions');
    const scanBtn = document.getElementById('scanBtn');
    const dropzoneEl = document.getElementById('dropzone');
    const resizeObserverEl = document.querySelector('resize-observer');
    const scanFrameEl = document.getElementById('scanFrame');
    const torchButton = document.getElementById('torchButton');
    const globalActionsEl = document.getElementById('globalActions');
    const historyBtn = document.getElementById('historyBtn');
    const historyDialog = document.getElementById('historyDialog');
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsDialog = document.getElementById('settingsDialog');
    const settingsForm = document.getElementById('settingsForm');
    const cameraSelect = document.getElementById('cameraSelect');
    let shouldScan = true;
    let rafId;
    // By default the dialog elements are hidden for browsers that don't support the dialog element.
    // If the dialog element is supported, we remove the hidden attribute and the dialogs' visibility
    // is controlled by using the `showModal()` and `close()` methods.
    if ((0, _isDialogElementSupportedJs.isDialogElementSupported)()) {
        globalActionsEl?.removeAttribute('hidden');
        historyDialog?.removeAttribute('hidden');
        settingsDialog?.removeAttribute('hidden');
    }
    const { barcodeReaderError } = await (0, _barcodeReaderJs.BarcodeReader).setup();
    if (barcodeReaderError) {
        const alertEl = document.getElementById('barcodeReaderError');
        shouldScan = false;
        globalActionsEl?.setAttribute('hidden', '');
        tabGroupEl?.setAttribute('hidden', '');
        alertEl?.removeAttribute('hidden');
        alertEl.textContent = barcodeReaderError?.message;
        return; // Stop the script execution as BarcodeDetector API is not supported.
    }
    const supportedBarcodeFormats = await (0, _barcodeReaderJs.BarcodeReader).getSupportedFormats();
    const [, settings] = await (0, _storageJs.getSettings)();
    const intitialFormats = settings?.formats || supportedBarcodeFormats;
    let barcodeReader = await (0, _barcodeReaderJs.BarcodeReader).create(intitialFormats);
    videoCaptureEl.addEventListener('video-capture:video-play', handleVideoCapturePlay, {
        once: true
    });
    videoCaptureEl.addEventListener('video-capture:error', handleVideoCaptureError, {
        once: true
    });
    (0, _videoCaptureJs.VideoCapture).defineCustomElement();
    const videoCaptureShadowRoot = videoCaptureEl?.shadowRoot;
    const videoCaptureVideoEl = videoCaptureShadowRoot?.querySelector('video');
    const videoCaptureActionsEl = videoCaptureShadowRoot?.querySelector('[part="actions-container"]');
    dropzoneEl.accept = (0, _constantsJs.ACCEPTED_MIME_TYPES).join(',');
    bsSettingsEl.supportedFormats = supportedBarcodeFormats;
    /**
   * Scans for barcodes.
   * If a barcode is detected, it stops scanning and displays the result.
   *
   * @returns {Promise<void>} - A Promise that resolves when the barcode is detected.
   */ async function scan() {
        (0, _logJs.log)('Scanning...');
        scanInstructionsEl?.removeAttribute('hidden');
        try {
            const barcode = await barcodeReader.detect(videoCaptureVideoEl);
            const barcodeValue = barcode?.rawValue ?? '';
            if (!barcodeValue) throw new Error((0, _constantsJs.NO_BARCODE_DETECTED));
            window.cancelAnimationFrame(rafId);
            (0, _resultJs.showResult)(cameraPanel, barcodeValue);
            bsHistoryEl?.add(barcodeValue);
            scanInstructionsEl?.setAttribute('hidden', '');
            scanBtn?.removeAttribute('hidden');
            scanFrameEl?.setAttribute('hidden', '');
            videoCaptureActionsEl?.setAttribute('hidden', '');
            (0, _triggerScanEffectsJs.triggerScanEffects)();
            return;
        } catch  {
        // If no barcode is detected, the error is caught here.
        // We can ignore the error and continue scanning.
        }
        if (shouldScan) rafId = window.requestAnimationFrame(()=>scan());
    }
    /**
   * Handles the click event on the scan button.
   * It is responsible for clearing previous results and starting the scan process again.
   */ function handleScanButtonClick() {
        scanBtn?.setAttribute('hidden', '');
        scanFrameEl?.removeAttribute('hidden');
        videoCaptureActionsEl?.removeAttribute('hidden');
        (0, _resultJs.hideResult)(cameraPanel);
        scan();
    }
    /**
   * Handles the tab show event.
   * It is responsible for starting or stopping the scan process based on the selected tab.
   *
   * @param {CustomEvent} evt - The event object.
   */ function handleTabShow(evt) {
        const tabId = evt.detail.tabId;
        const videoCaptureEl = document.querySelector('video-capture'); // Get the latest instance of video-capture element to ensure we don't use the cached one.
        if (tabId === 'cameraTab') {
            shouldScan = true;
            if (!videoCaptureEl) return;
            const hasResult = cameraPanel.querySelector('bs-result') != null;
            if (!videoCaptureEl.loading && !hasResult) {
                scanFrameEl?.removeAttribute('hidden');
                videoCaptureActionsEl?.removeAttribute('hidden');
                scan();
            }
            if (typeof videoCaptureEl.startVideoStream === 'function') {
                const videoDeviceId = cameraSelect?.value || undefined;
                videoCaptureEl.startVideoStream(videoDeviceId);
            }
        } else if (tabId === 'fileTab') {
            shouldScan = false;
            if (videoCaptureEl != null && typeof videoCaptureEl.stopVideoStream === 'function') videoCaptureEl.stopVideoStream();
            scanFrameEl?.setAttribute('hidden', '');
            videoCaptureActionsEl?.setAttribute('hidden', '');
        }
    }
    /**
   * Handles the selection of a file.
   * It is responsible for displaying the selected file in the dropzone.
   *
   * @param {File} file - The selected file.
   */ function handleFileSelect(file) {
        if (!file) return;
        const image = new Image();
        const reader = new FileReader();
        reader.onload = (evt)=>{
            const data = evt.target.result;
            image.onload = async ()=>{
                try {
                    const barcode = await barcodeReader.detect(image);
                    const barcodeValue = barcode?.rawValue ?? '';
                    if (!barcodeValue) throw new Error((0, _constantsJs.NO_BARCODE_DETECTED));
                    (0, _resultJs.showResult)(filePanel, barcodeValue);
                    bsHistoryEl?.add(barcodeValue);
                    (0, _triggerScanEffectsJs.triggerScanEffects)();
                } catch (err) {
                    (0, _logJs.log)(err);
                    (0, _resultJs.showResult)(filePanel, (0, _constantsJs.NO_BARCODE_DETECTED));
                    (0, _triggerScanEffectsJs.triggerScanEffects)({
                        success: false
                    });
                }
            };
            image.src = data;
            image.alt = 'Image preview';
            dropzoneEl.replaceChildren();
            const preview = document.createElement('div');
            preview.className = 'dropzone-preview';
            const imageWrapper = document.createElement('div');
            imageWrapper.className = 'dropzone-preview__image-wrapper';
            const fileNameWrapper = document.createElement('div');
            fileNameWrapper.className = 'dropzone-preview__file-name';
            fileNameWrapper.textContent = file.name;
            imageWrapper.appendChild(image);
            preview.appendChild(imageWrapper);
            preview.appendChild(fileNameWrapper);
            dropzoneEl.prepend(preview);
        };
        reader.readAsDataURL(file);
    }
    /**
   * Handles the drop event on the dropzone.
   *
   * @param {CustomEvent} evt - The event object.
   */ function handleFileDrop(evt) {
        const file = evt.detail.acceptedFiles[0];
        handleFileSelect(file);
    }
    /**
   * Handles the resize event on the video-capture element.
   * It is responsible for resizing the scan frame based on the video element.
   */ function handleVideoCaptureResize() {
        (0, _resizeScanFrameJs.resizeScanFrame)(videoCaptureEl.shadowRoot.querySelector('video'), scanFrameEl);
    }
    /**
   * Handles the video play event on the video-capture element.
   * It is responsible for displaying the scan frame and starting the scan process.
   * It also handles the zoom controls if the browser supports it.
   *
   * @param {CustomEvent} evt - The event object.
   */ async function handleVideoCapturePlay(evt) {
        scanFrameEl?.removeAttribute('hidden');
        (0, _resizeScanFrameJs.resizeScanFrame)(evt.detail.video, scanFrameEl);
        scan();
        const trackSettings = evt.target.getTrackSettings();
        const trackCapabilities = evt.target.getTrackCapabilities();
        const zoomLevelEl = document.getElementById('zoomLevel');
        // Torch CTA
        if (trackCapabilities?.torch) {
            torchButton?.addEventListener('click', handleTorchButtonClick);
            torchButton?.removeAttribute('hidden');
            if (videoCaptureEl.hasAttribute('torch')) (0, _toggleTorchButtonStatusJs.toggleTorchButtonStatus)({
                el: torchButton,
                isTorchOn: true
            });
        }
        // Zoom controls
        if (trackSettings?.zoom && trackCapabilities?.zoom) {
            const zoomControls = document.getElementById('zoomControls');
            const minZoom = trackCapabilities?.zoom?.min || 0;
            const maxZoom = trackCapabilities?.zoom?.max || 10;
            let currentZoom = trackSettings?.zoom || 1;
            const handleZoomControlsClick = (evt)=>{
                const zoomInBtn = evt.target.closest('[data-action="zoom-in"]');
                const zoomOutBtn = evt.target.closest('[data-action="zoom-out"]');
                if (zoomInBtn && currentZoom < maxZoom) currentZoom += 0.5;
                if (zoomOutBtn && currentZoom > minZoom) currentZoom -= 0.5;
                zoomLevelEl.textContent = currentZoom.toFixed(1);
                videoCaptureEl.zoom = currentZoom;
            };
            zoomControls?.addEventListener('click', handleZoomControlsClick);
            zoomControls?.removeAttribute('hidden');
            zoomLevelEl.textContent = currentZoom.toFixed(1);
        }
        // Camera select
        const videoInputDevices = await (0, _videoCaptureJs.VideoCapture).getVideoInputDevices();
        videoInputDevices.forEach((device, index)=>{
            const option = document.createElement('option');
            option.value = device.deviceId;
            option.textContent = device.label || `Camera ${index + 1}`;
            cameraSelect.appendChild(option);
        });
        if (videoInputDevices.length > 1) {
            cameraSelect?.addEventListener('change', handleCameraSelectChange);
            cameraSelect?.removeAttribute('hidden');
        }
    }
    /**
   * Handles the error event on the video-capture element.
   * It is responsible for displaying an error message if the camera cannot be accessed or permission is denied.
   *
   * @param {CustomEvent} evt - The event object.
   */ function handleVideoCaptureError(evt) {
        const error = evt.detail.error;
        if (error.name === 'NotFoundError') // If the browser cannot find all media tracks with the specified types that meet the constraints given.
        return;
        const errorMessage = error.name === 'NotAllowedError' ? 'Permission to use webcam was denied or video Autoplay is disabled. Reload the page to give appropriate permissions to webcam.' : error.message;
        cameraPanel.innerHTML = /* html */ `<div class="alert alert-danger" role="alert" style="margin: 0;">${errorMessage}</div>`;
    }
    /**
   * Handles the settings button click event.
   * It is responsible for displaying the settings dialog.
   */ function handleSettingsButtonClick() {
        settingsDialog.open = true;
    }
    /**
   * Handles the change event on the settings form.
   * It is responsible for saving the settings to persistent storage and updating the settings.
   *
   * @param {Event} evt - The event object.
   */ async function handleSettingsFormChange(evt) {
        evt.preventDefault();
        const settings = {};
        const formData = new FormData(settingsForm);
        const generalSettings = formData.getAll('general-settings');
        const formatsSettings = formData.getAll('formats-settings');
        generalSettings.forEach((value)=>settings[value] = true);
        settings.formats = formatsSettings;
        (0, _storageJs.setSettings)(settings);
        if (evt.target.name === 'formats-settings') barcodeReader = await (0, _barcodeReaderJs.BarcodeReader).create(formatsSettings);
    }
    /**
   * Handles the click event on the history button.
   * It is responsible for displaying the history dialog.
   */ function handleHistoryButtonClick() {
        historyDialog.open = true;
    }
    /**
   * Handles the click event on the torch button.
   * It is responsible for toggling the torch on and off.
   *
   * @param {MouseEvent} evt - The event object.
   */ function handleTorchButtonClick(evt) {
        videoCaptureEl.torch = !videoCaptureEl.torch;
        (0, _toggleTorchButtonStatusJs.toggleTorchButtonStatus)({
            el: evt.currentTarget,
            isTorchOn: videoCaptureEl.hasAttribute('torch')
        });
    }
    /**
   * Handles the change event on the camera select element.
   * It is responsible for restarting the video stream with the selected video input device id.
   *
   * @param {Event} evt - The event object.
   */ function handleCameraSelectChange(evt) {
        if (typeof videoCaptureEl.restartVideoStream !== 'function') return;
        const videoDeviceId = evt.target.value || undefined;
        videoCaptureEl.restartVideoStream(videoDeviceId);
    }
    /**
   * Handles the visibility change event on the document.
   * It is responsible for stopping the scan process when the document is not visible.
   */ function handleDocumentVisibilityChange() {
        const selectedTab = tabGroupEl.querySelector('[selected]');
        const tabId = selectedTab.getAttribute('id');
        if (tabId !== 'cameraTab') return;
        if (document.visibilityState === 'hidden') {
            shouldScan = false;
            if (videoCaptureEl != null && typeof videoCaptureEl.stopVideoStream === 'function') videoCaptureEl.stopVideoStream();
        } else {
            shouldScan = true;
            // Get the latest instance of video-capture element to ensure we don't use the cached one.
            const videoCaptureEl = document.querySelector('video-capture');
            if (!videoCaptureEl) return;
            if (!videoCaptureEl.loading && !cameraPanel.querySelector('bs-result')) scan();
            if (typeof videoCaptureEl.startVideoStream === 'function') {
                const videoDeviceId = cameraSelect?.value || undefined;
                videoCaptureEl.startVideoStream(videoDeviceId);
            }
        }
    }
    /**
   * Handles the escape key press event on the document.
   * It is responsible for triggering the scan button click event if there is already a barcode detected.
   */ function handleDocumentEscapeKey() {
        const cameraTabSelected = tabGroupEl.querySelector('#cameraTab').hasAttribute('selected');
        const scanBtnVisible = !scanBtn.hidden;
        const settingsDialogOpen = settingsDialog.hasAttribute('open');
        const historyDialogOpen = historyDialog.hasAttribute('open');
        const anyDialogOpen = settingsDialogOpen || historyDialogOpen;
        if (!scanBtnVisible || !cameraTabSelected || anyDialogOpen) return;
        scanBtn.click();
    }
    /**
   * Handles the key down event on the document.
   */ function handleDocumentKeyDown(evt) {
        if (evt.key === 'Escape') handleDocumentEscapeKey();
    }
    scanBtn.addEventListener('click', handleScanButtonClick);
    tabGroupEl.addEventListener('a-tab-show', (0, _debounceJs.debounce)(handleTabShow, 250));
    dropzoneEl.addEventListener('files-dropzone-drop', handleFileDrop);
    resizeObserverEl.addEventListener('resize-observer:resize', handleVideoCaptureResize);
    settingsBtn.addEventListener('click', handleSettingsButtonClick);
    settingsForm.addEventListener('change', (0, _debounceJs.debounce)(handleSettingsFormChange, 500));
    historyBtn.addEventListener('click', handleHistoryButtonClick);
    document.addEventListener('visibilitychange', handleDocumentVisibilityChange);
    document.addEventListener('keydown', handleDocumentKeyDown);
})();

},{"@georapbox/a-tab-group/dist/a-tab-group.js":"2l2kO","@georapbox/web-share-element/dist/web-share-defined.js":"gYIRO","@georapbox/files-dropzone-element/dist/files-dropzone-defined.js":"kqofg","@georapbox/resize-observer-element/dist/resize-observer-defined.js":"4Cj3u","@georapbox/modal-element/dist/modal-element-defined.js":"7Tu6f","./constants.js":"itKcQ","./services/storage.js":"sgsxU","./utils/debounce.js":"hVhN7","./utils/log.js":"dMd8G","./utils/isDialogElementSupported.js":"2DHze","./helpers/result.js":"gKxXl","./helpers/triggerScanEffects.js":"6LHLu","./helpers/resizeScanFrame.js":"ekHmu","./helpers/BarcodeReader.js":"2psgK","./helpers/toggleTorchButtonStatus.js":"aQSuU","./components/video-capture.js":"du64y","./components/clipboard-copy.js":"1BWwM","./components/bs-result.js":"bNF1U","./components/bs-settings.js":"9CYWG","./components/bs-history.js":"5npAu"}],"2l2kO":[function(require,module,exports,__globalThis) {
/*!
 * @georapbox/a-tab-group
 * A custom element to create a group of tabs and tab panels.
 *
 * @version 2.4.1
 * @homepage https://github.com/georapbox/a-tab-group#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ATab", ()=>u);
parcelHelpers.export(exports, "ATabGroup", ()=>f);
parcelHelpers.export(exports, "ATabPanel", ()=>p);
var h = (a = "", t = "")=>{
    let e = typeof a == "string" && a !== "" ? a + "-" : "", s = typeof t == "string" && t !== "" ? "-" + t : "", i = Math.random().toString(36).substring(2, 8);
    return `${e}${i}${s}`;
};
var b = (a, t)=>{
    if (Object.prototype.hasOwnProperty.call(t, a)) {
        let e = t[a];
        delete t[a], t[a] = e;
    }
};
var E = 0, C = `
  :host {
    box-sizing: border-box;
    display: inline-block;
    contain: content;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.375rem 0.75rem;
    white-space: nowrap;
    cursor: pointer;
  }

  :host([disabled]) .tab {
    opacity: 0.7;
    cursor: not-allowed;
  }

  :host([selected]) .tab {
    color: var(--selected-tab-color);
    background-color: var(--selected-tab-bg-color);
  }

  .tab__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    font-size: inherit;
    cursor: pointer;
  }
`, w = document.createElement("template");
w.innerHTML = `
  <style>
    ${C}
  </style>

  <div part="base" class="tab">
    <slot></slot>
  </div>
`;
var u = class a extends HTMLElement {
    constructor(){
        super(), this.shadowRoot || this.attachShadow({
            mode: "open"
        }).appendChild(w.content.cloneNode(!0));
    }
    static get observedAttributes() {
        return [
            "selected",
            "disabled",
            "closable"
        ];
    }
    attributeChangedCallback(t, e, s) {
        if (t === "selected" && e !== s && (this.setAttribute("aria-selected", this.selected.toString()), this.setAttribute("tabindex", this.disabled || !this.selected ? "-1" : "0")), t === "disabled" && e !== s && (this.setAttribute("aria-disabled", this.disabled.toString()), this.setAttribute("tabindex", this.disabled || !this.selected ? "-1" : "0")), t === "closable" && e !== s) {
            if (this.closable) {
                let i = document.createElement("span");
                i.className = "tab__close", i.setAttribute("part", "close-tab"), i.innerHTML = '<svg part="close-tab-icon" xmlns="http://www.w3.org/2000/svg" width="0.875em" height="0.875em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>', this.shadowRoot?.querySelector(".tab")?.appendChild(i), i.addEventListener("click", this.#e);
            } else {
                let i = this.shadowRoot?.querySelector(".tab__close");
                i?.removeEventListener("click", this.#e), i?.remove();
            }
        }
    }
    connectedCallback() {
        this.#s("selected"), this.#s("disabled"), this.#s("closable"), this.id || (this.id = h("tab", (++E).toString())), this.setAttribute("slot", "tab"), this.setAttribute("role", "tab"), this.setAttribute("aria-selected", "false"), this.setAttribute("tabindex", this.disabled || !this.selected ? "-1" : "0");
    }
    disconnectedCallback() {
        this.shadowRoot?.querySelector(".tab__close")?.removeEventListener("click", this.#e);
    }
    get selected() {
        return this.hasAttribute("selected");
    }
    set selected(t) {
        this.toggleAttribute("selected", !!t);
    }
    get disabled() {
        return this.hasAttribute("disabled");
    }
    set disabled(t) {
        this.toggleAttribute("disabled", !!t);
    }
    get closable() {
        return this.hasAttribute("closable");
    }
    set closable(t) {
        this.toggleAttribute("closable", !!t);
    }
    #e = (t)=>{
        t.stopPropagation(), this.dispatchEvent(new CustomEvent("a-tab-close", {
            bubbles: !0,
            composed: !0,
            detail: {
                tabId: this.id
            }
        }));
    };
    #s(t) {
        return b(t, this);
    }
    static defineCustomElement(t = "a-tab") {
        typeof window < "u" && !window.customElements.get(t) && window.customElements.define(t, a);
    }
};
u.defineCustomElement();
var L = 0, S = `
  :host {
    box-sizing: border-box;
    display: block;
    contain: content;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }
`, T = document.createElement("template");
T.innerHTML = `
  <style>
    ${S}
  </style>

  <div part="base" class="tab-panel">
    <slot></slot>
  </div>
`;
var p = class a extends HTMLElement {
    constructor(){
        super(), this.shadowRoot || this.attachShadow({
            mode: "open"
        }).appendChild(T.content.cloneNode(!0));
    }
    connectedCallback() {
        this.setAttribute("slot", "panel"), this.setAttribute("role", "tabpanel"), this.setAttribute("hidden", ""), this.id || (this.id = h("panel", (++L).toString()));
    }
    static defineCustomElement(t = "a-tab-panel") {
        typeof window < "u" && !window.customElements.get(t) && window.customElements.define(t, a);
    }
};
p.defineCustomElement();
var y = 200, n = {
    TOP: "top",
    BOTTOM: "bottom",
    START: "start",
    END: "end"
}, l = {
    LTR: "ltr",
    RTL: "rtl"
}, R = Object.entries(n).map(([, a])=>a), r = {
    AUTO: "auto",
    MANUAL: "manual"
}, c = {
    DOWN: "ArrowDown",
    LEFT: "ArrowLeft",
    RIGHT: "ArrowRight",
    UP: "ArrowUp",
    HOME: "Home",
    END: "End",
    ENTER: "Enter",
    SPACE: " "
}, x = `
  :host {
    --selected-tab-color: #005fcc;
    --selected-tab-bg-color: transparent;
    --tabs-scroll-behavior: smooth;
    --scroll-button-width: 2.125em;
    --scroll-button-height: 2.125em;
    --scroll-button-inline-offset: 0rem;

    box-sizing: border-box;
    display: block;
    contain: content;
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      --tabs-scroll-behavior: auto;
    }
  }

  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  .tab-group {
    display: flex;
    width: 100%;
  }

  .tab-group__nav {
    position: relative;
  }

  .tab-group__nav--has-scroll-controls {
    padding: 0 calc(var(--scroll-button-width) + var(--scroll-button-inline-offset));
  }

  .tab-group__scroll-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: var(--scroll-button-width);
    height: var(--scroll-button-height);
    padding: 0; /* Required for iOS, otherwise the svg is not visible: https://stackoverflow.com/questions/66532071/flex-svg-behaving-strange-in-ios-safari-14-0-3 */
    border: 0;
    z-index: 1;
    background-color: transparent;
    font-size: inherit;
    cursor: pointer;
    color: currentColor;
  }

  .tab-group__scroll-button--start {
    left: var(--scroll-button-inline-offset);
  }

  .tab-group__scroll-button--end {
    right: var(--scroll-button-inline-offset);
  }

  :host([dir="${l.RTL}"]) .tab-group__scroll-button--start,
  :host(:dir(${l.RTL})) .tab-group__scroll-button--start {
    right: var(--scroll-button-inline-offset);
    left: auto;
    transform: translateY(-50%) rotate(180deg);
  }

  :host([dir="${l.RTL}"]) .tab-group__scroll-button--end,
  :host(:dir(${l.RTL})) .tab-group__scroll-button--end {
    left: var(--scroll-button-inline-offset);
    right: auto;
    transform: translateY(-50%) rotate(180deg);
  }

  .tab-group__tabs {
    display: flex;
    padding: 0.25rem;
    overflow-x: auto;
    scroll-behavior: var(--tabs-scroll-behavior);
    scrollbar-width: none;
  }

  .tab-group__tabs::-webkit-scrollbar {
    display: none;
  }

  .tab-group__panels {
    padding: 1rem 0;
  }

  /* placement="top" */
  .tab-group,
  :host([placement="${n.TOP}"]) .tab-group {
    flex-direction: column;
  }

  /* placement="bottom" */
  :host([placement="${n.BOTTOM}"]) .tab-group {
    flex-direction: column;
  }

  :host([placement="${n.BOTTOM}"]) .tab-group__nav {
    order: 1;
  }

  /* placement="start" */
  :host([placement="${n.START}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${n.START}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${n.START}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }

  /* placement="end" */
  :host([placement="${n.END}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${n.END}"]) .tab-group__nav {
    order: 1;
  }

  :host([placement="${n.END}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${n.END}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }
`, A = document.createElement("template");
A.innerHTML = `
  <style>${x}</style>

  <div part="base" class="tab-group">
    <div part="nav" class="tab-group__nav">
      <button type="button" part="scroll-button scroll-button--start" class="tab-group__scroll-button tab-group__scroll-button--start" aria-label="Scroll to start">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>

      <div part="tabs" class="tab-group__tabs" role="tablist" tabindex="-1">
        <slot name="tab"></slot>
      </div>

      <button type="button" part="scroll-button scroll-button--end" class="tab-group__scroll-button tab-group__scroll-button--end" aria-label="Scroll to end">
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
    </div>

    <div part="panels" class="tab-group__panels">
      <slot name="panel"></slot>
    </div>
  </div>
`;
var f = class a extends HTMLElement {
    #e = null;
    #s = null;
    #l = !1;
    constructor(){
        super(), this.shadowRoot || this.attachShadow({
            mode: "open"
        }).appendChild(A.content.cloneNode(!0));
    }
    static get observedAttributes() {
        return [
            "placement",
            "no-scroll-controls"
        ];
    }
    attributeChangedCallback(t, e, s) {
        t === "placement" && e !== s && this.#i(), t === "no-scroll-controls" && e !== s && this.#i();
    }
    get placement() {
        return this.getAttribute("placement") || n.TOP;
    }
    set placement(t) {
        t != null && this.setAttribute("placement", t);
    }
    get noScrollControls() {
        return this.hasAttribute("no-scroll-controls");
    }
    set noScrollControls(t) {
        this.toggleAttribute("no-scroll-controls", !!t);
    }
    get scrollDistance() {
        let t = Number(this.getAttribute("scroll-distance"));
        return Math.abs(t) || y;
    }
    set scrollDistance(t) {
        this.setAttribute("scroll-distance", Math.abs(t).toString() || y.toString());
    }
    get activation() {
        return this.getAttribute("activation") || r.AUTO;
    }
    set activation(t) {
        this.setAttribute("activation", t || r.AUTO);
    }
    get noTabCycling() {
        return this.hasAttribute("no-tab-cycling");
    }
    set noTabCycling(t) {
        this.toggleAttribute("no-tab-cycling", !!t);
    }
    connectedCallback() {
        this.#o("placement"), this.#o("noScrollControls"), this.#o("scrollDistance"), this.#o("activation"), this.#o("noTabCycling");
        let t = this.shadowRoot?.querySelector("slot[name=tab]"), e = this.shadowRoot?.querySelector("slot[name=panel]"), s = this.shadowRoot?.querySelector(".tab-group__tabs"), i = this.shadowRoot?.querySelector(".tab-group__nav"), o = Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button") || []);
        t?.addEventListener("slotchange", this.#n), e?.addEventListener("slotchange", this.#n), s?.addEventListener("click", this.#g), s?.addEventListener("keydown", this.#p), o.forEach((d)=>d.addEventListener("click", this.#f)), this.addEventListener("a-tab-close", this.#m), "ResizeObserver" in window && (this.#e = new ResizeObserver((d)=>{
            this.#s = window.requestAnimationFrame(()=>{
                let v = d?.[0]?.target, g = v?.scrollWidth > v?.clientWidth;
                o.forEach((_)=>_.toggleAttribute("hidden", !g)), i?.part.toggle("nav--has-scroll-controls", g), i?.classList.toggle("tab-group__nav--has-scroll-controls", g);
            });
        })), this.#h(), this.#i();
    }
    disconnectedCallback() {
        let t = this.shadowRoot?.querySelector("slot[name=tab]"), e = this.shadowRoot?.querySelector("slot[name=panel]"), s = this.shadowRoot?.querySelector(".tab-group__tabs"), i = Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button") || []);
        t?.removeEventListener("slotchange", this.#n), e?.removeEventListener("slotchange", this.#n), s?.removeEventListener("click", this.#g), s?.removeEventListener("keydown", this.#p), i.forEach((o)=>o.removeEventListener("click", this.#f)), this.removeEventListener("a-tab-close", this.#m), this.#c();
    }
    #v() {
        if (!this.#e) return;
        let t = this.shadowRoot?.querySelector(".tab-group__tabs");
        t && (this.#e.unobserve(t), this.#e.observe(t));
    }
    #c() {
        this.#e && (this.#e.disconnect(), this.#s !== null && (window.cancelAnimationFrame(this.#s), this.#s = null));
    }
    #d() {
        return window.CSS.supports("selector(:dir(ltr))") ? this.matches(":dir(ltr)") ? l.LTR : l.RTL : window.getComputedStyle(this).direction || l.LTR;
    }
    #h() {
        this.hidden = this.#t().length === 0;
    }
    #w() {
        let t = this.#t();
        this.#h(), t.forEach((e)=>{
            let s = e.nextElementSibling;
            if (!s || s.tagName.toLowerCase() !== "a-tab-panel") return console.error(`Tab #${e.id} is not a sibling of a <a-tab-panel>`);
            e.setAttribute("aria-controls", s.id), s.setAttribute("aria-labelledby", e.id);
        });
    }
    #T() {
        return Array.from(this.querySelectorAll("a-tab-panel"));
    }
    #t() {
        return Array.from(this.querySelectorAll("a-tab"));
    }
    #b(t) {
        let e = t.getAttribute("aria-controls");
        return this.querySelector(`#${e}`);
    }
    #y() {
        return this.#t().find((e)=>!e.disabled) || null;
    }
    #A() {
        let t = this.#t();
        for(let e = t.length - 1; e >= 0; e--)if (!t[e].disabled) return t[e];
        return null;
    }
    #a() {
        let t = this.#t(), e = this.activation === r.MANUAL ? t.findIndex((s)=>s.matches(":focus")) - 1 : t.findIndex((s)=>s.selected) - 1;
        for(; t[(e + t.length) % t.length].disabled;)e--;
        return this.noTabCycling && e < 0 ? null : t[(e + t.length) % t.length];
    }
    #r() {
        let t = this.#t(), e = this.activation === r.MANUAL ? t.findIndex((s)=>s.matches(":focus")) + 1 : t.findIndex((s)=>s.selected) + 1;
        for(; t[e % t.length].disabled;)e++;
        return this.noTabCycling && e >= t.length ? null : t[e % t.length];
    }
    #_() {
        let t = this.#t(), e = this.#T();
        t.forEach((s)=>s.selected = !1), e.forEach((s)=>s.hidden = !0);
    }
    #i() {
        let t = this.shadowRoot?.querySelector(".tab-group__nav"), e = this.shadowRoot?.querySelector(".tab-group__tabs"), s = Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button") || []);
        this.noScrollControls || this.placement === n.START || this.placement === n.END ? (this.#c(), s.forEach((i)=>i.hidden = !0), t?.part.remove("nav--has-scroll-controls"), t?.classList.remove("tab-group__nav--has-scroll-controls"), e?.setAttribute("aria-orientation", "vertical")) : (this.#v(), s.forEach((i)=>i.hidden = !1), e?.setAttribute("aria-orientation", "horizontal"));
    }
    #E() {
        let t = this.#t(), e = t.find((s)=>s.selected && !s.disabled) || t.find((s)=>!s.disabled);
        e && (this.#l && !e.selected && this.dispatchEvent(new CustomEvent("a-tab-show", {
            bubbles: !0,
            composed: !0,
            detail: {
                tabId: e.id
            }
        })), this.#u(e));
    }
    #u(t) {
        this.#_(), t && (t.selected = !0);
        let e = this.#b(t);
        e && (e.hidden = !1);
    }
    #n = (t)=>{
        this.#w(), this.#i(), this.#E(), t.target.name === "tab" && (this.#l = !0);
    };
    #p = (t)=>{
        if (t.target.tagName.toLowerCase() !== "a-tab" || t.altKey) return;
        let e = R.includes(this.placement || "") ? this.placement : n.TOP, s = [
            n.TOP,
            n.BOTTOM
        ].includes(e || "") ? "horizontal" : "vertical", i = this.#d(), o = null;
        switch(t.key){
            case c.LEFT:
                s === "horizontal" && (o = i === l.LTR ? this.#a() : this.#r(), o && (this.activation === r.MANUAL ? o.focus() : this.selectTab(o)));
                break;
            case c.RIGHT:
                s === "horizontal" && (o = i === l.LTR ? this.#r() : this.#a(), o && (this.activation === r.MANUAL ? o.focus() : this.selectTab(o)));
                break;
            case c.UP:
                s === "vertical" && (o = this.#a(), o && (this.activation === r.MANUAL ? o.focus() : this.selectTab(o)));
                break;
            case c.DOWN:
                s === "vertical" && (o = this.#r(), o && (this.activation === r.MANUAL ? o.focus() : this.selectTab(o)));
                break;
            case c.HOME:
                o = this.#y(), o && (this.activation === r.MANUAL ? o.focus() : this.selectTab(o));
                break;
            case c.END:
                o = this.#A(), o && (this.activation === r.MANUAL ? o.focus() : this.selectTab(o));
                break;
            case c.ENTER:
            case c.SPACE:
                o = t.target, o && this.selectTab(o);
                break;
            default:
                return;
        }
        t.preventDefault();
    };
    #g = (t)=>{
        let e = t.target.closest("a-tab");
        e && this.selectTab(e);
    };
    #f = (t)=>{
        let e = t.target.closest(".tab-group__scroll-button"), s = this.shadowRoot?.querySelector(".tab-group__tabs");
        if (!e || !s) return;
        let i = e.classList.contains("tab-group__scroll-button--start"), o = this.#d() === l.LTR, d = i ? o ? -1 : 1 : o ? 1 : -1, m = s.scrollLeft;
        s.scrollTo({
            left: m + d * this.scrollDistance
        });
    };
    #m = (t)=>{
        let e = t.target, s = this.#b(e);
        e && (e.remove(), e.selected && this.dispatchEvent(new CustomEvent("a-tab-hide", {
            bubbles: !0,
            composed: !0,
            detail: {
                tabId: e.id
            }
        }))), s && s.tagName.toLowerCase() === "a-tab-panel" && s.remove();
    };
    #o(t) {
        return b(t, this);
    }
    selectTabByIndex(t) {
        let s = this.#t()[t];
        s && this.selectTab(s);
    }
    selectTabById(t) {
        let s = this.#t().find((i)=>i.id === t);
        s && this.selectTab(s);
    }
    selectTab(t) {
        let e = this.#t().find((s)=>s.selected);
        !t || t.disabled || t.selected || t.tagName.toLowerCase() !== "a-tab" || (this.#u(t), window.requestAnimationFrame(()=>{
            t.scrollIntoView({
                inline: "nearest",
                block: "nearest"
            }), t.focus();
        }), e && this.dispatchEvent(new CustomEvent("a-tab-hide", {
            bubbles: !0,
            composed: !0,
            detail: {
                tabId: e.id
            }
        })), this.dispatchEvent(new CustomEvent("a-tab-show", {
            bubbles: !0,
            composed: !0,
            detail: {
                tabId: t.id
            }
        })));
    }
    static defineCustomElement(t = "a-tab-group") {
        typeof window < "u" && !window.customElements.get(t) && window.customElements.define(t, a);
    }
};
f.defineCustomElement();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gYIRO":[function(require,module,exports,__globalThis) {
/*!
 * @georapbox/web-share-element
 * A custom element that implements the Web Share API to share user-defined data.
 *
 * @version 3.1.1
 * @homepage https://github.com/georapbox/web-share-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WebShare", ()=>s);
var h = `
  :host {
    display: inline-block;
  }
`, r = document.createElement("template");
r.innerHTML = `
  <style>${h}</style>
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;
var s = class a extends HTMLElement {
    #e;
    #t;
    #r = [];
    constructor(){
        super(), this.shadowRoot || this.attachShadow({
            mode: "open",
            delegatesFocus: !0
        }).appendChild(r.content.cloneNode(!0)), this.#e = this.shadowRoot?.querySelector('slot[name="button"]') || null, this.#t = this.#h();
    }
    static get observedAttributes() {
        return [
            "disabled"
        ];
    }
    attributeChangedCallback(t, e, i) {
        t === "disabled" && e !== i && this.#t && (this.#t.toggleAttribute("disabled", this.disabled), this.#t.setAttribute("aria-disabled", this.disabled.toString()), this.#t.part && this.#t.part.contains("button") && this.#t.part.toggle("button--disabled", this.disabled));
    }
    connectedCallback() {
        this.#s("shareUrl"), this.#s("shareTitle"), this.#s("shareText"), this.#s("shareFiles"), this.#s("disabled"), this.#e?.addEventListener("slotchange", this.#a), this.#t?.addEventListener("click", this.#i);
    }
    disconnectedCallback() {
        this.#e?.removeEventListener("slotchange", this.#a), this.#t?.removeEventListener("click", this.#i);
    }
    get disabled() {
        return this.hasAttribute("disabled");
    }
    set disabled(t) {
        this.toggleAttribute("disabled", !!t);
    }
    get shareUrl() {
        return this.getAttribute("share-url") || "";
    }
    set shareUrl(t) {
        this.setAttribute("share-url", t);
    }
    get shareTitle() {
        return this.getAttribute("share-title") || "";
    }
    set shareTitle(t) {
        this.setAttribute("share-title", t);
    }
    get shareText() {
        return this.getAttribute("share-text") || "";
    }
    set shareText(t) {
        this.setAttribute("share-text", t);
    }
    get shareFiles() {
        return this.#r;
    }
    set shareFiles(t) {
        Array.isArray(t) && t.length > 0 && (this.#r = t);
    }
    async share() {
        if (!this.disabled) try {
            let t = {};
            this.shareUrl && (t.url = this.shareUrl), this.shareTitle && (t.title = this.shareTitle), this.shareText && (t.text = this.shareText), Array.isArray(this.shareFiles) && this.shareFiles.length > 0 && navigator.canShare && navigator.canShare({
                files: this.shareFiles
            }) && (t.files = this.shareFiles), await navigator.share(t), this.dispatchEvent(new CustomEvent("web-share:success", {
                bubbles: !0,
                composed: !0,
                detail: {
                    shareData: t
                }
            }));
        } catch (t) {
            if (t instanceof Error && t.name === "AbortError") {
                this.dispatchEvent(new CustomEvent("web-share:abort", {
                    bubbles: !0,
                    composed: !0,
                    detail: {
                        error: t
                    }
                }));
                return;
            }
            this.dispatchEvent(new CustomEvent("web-share:error", {
                bubbles: !0,
                composed: !0,
                detail: {
                    error: t
                }
            }));
        }
    }
    #i = (t)=>{
        t.preventDefault(), !this.disabled && this.share();
    };
    #a = (t)=>{
        t.target && t.target.name === "button" && (this.#t?.removeEventListener("click", this.#i), this.#t = this.#h(), this.#t && (this.#t.addEventListener("click", this.#i), this.#t.nodeName !== "BUTTON" && !this.#t.hasAttribute("role") && this.#t.setAttribute("role", "button")));
    };
    #h() {
        return this.#e && this.#e.assignedElements({
            flatten: !0
        }).find((t)=>t.nodeName === "BUTTON" || t.getAttribute("slot") === "button") || null;
    }
    #s(t) {
        let e = this;
        if (Object.prototype.hasOwnProperty.call(e, t)) {
            let i = e[t];
            delete e[t], e[t] = i;
        }
    }
    static defineCustomElement(t = "web-share") {
        typeof window < "u" && !window.customElements.get(t) && window.customElements.define(t, a);
    }
};
s.defineCustomElement();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqofg":[function(require,module,exports,__globalThis) {
/*!
 * @georapbox/files-dropzone-element
 * A custom element that creates a drag and drop zone for files
 *
 * @version 2.0.1
 * @homepage https://github.com/georapbox/files-dropzone-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FilesDropzone", ()=>d);
function u(o, e = "") {
    if (!e) return !0;
    let t = [
        ...new Set(e.split(",").map((r)=>r.trim()).filter(Boolean))
    ], i = o.type, s = i.replace(/\/.*$/, "");
    for (let r of t)if (r.charAt(0) === ".") {
        if (o.name.toLowerCase().indexOf(r.toLowerCase(), o.name.length - r.length) !== -1) return !0;
    } else if (/\/\*$/.test(r)) {
        if (s === r.replace(/\/.*$/, "")) return !0;
    } else if (i === r) return !0;
    return !1;
}
var x = new Map([
    [
        "aac",
        "audio/aac"
    ],
    [
        "abw",
        "application/x-abiword"
    ],
    [
        "arc",
        "application/x-freearc"
    ],
    [
        "avif",
        "image/avif"
    ],
    [
        "avi",
        "video/x-msvideo"
    ],
    [
        "azw",
        "application/vnd.amazon.ebook"
    ],
    [
        "bin",
        "application/octet-stream"
    ],
    [
        "bmp",
        "image/bmp"
    ],
    [
        "bz",
        "application/x-bzip"
    ],
    [
        "bz2",
        "application/x-bzip2"
    ],
    [
        "cda",
        "application/x-cdf"
    ],
    [
        "csh",
        "application/x-csh"
    ],
    [
        "css",
        "text/css"
    ],
    [
        "csv",
        "text/csv"
    ],
    [
        "doc",
        "application/msword"
    ],
    [
        "docx",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ],
    [
        "eot",
        "application/vnd.ms-fontobject"
    ],
    [
        "epub",
        "application/epub+zip"
    ],
    [
        "gz",
        "application/gzip"
    ],
    [
        "gif",
        "image/gif"
    ],
    [
        "heic",
        "image/heic"
    ],
    [
        "heif",
        "image/heif"
    ],
    [
        "htm",
        "text/html"
    ],
    [
        "html",
        "text/html"
    ],
    [
        "ico",
        "image/vnd.microsoft.icon"
    ],
    [
        "ics",
        "text/calendar"
    ],
    [
        "jar",
        "application/java-archive"
    ],
    [
        "jpeg",
        "image/jpeg"
    ],
    [
        "jpg",
        "image/jpeg"
    ],
    [
        "jxl",
        "image/jxl"
    ],
    [
        "js",
        "text/javascript"
    ],
    [
        "json",
        "application/json"
    ],
    [
        "jsonld",
        "application/ld+json"
    ],
    [
        "markdown",
        "text/markdown"
    ],
    [
        "md",
        "text/markdown"
    ],
    [
        "mid",
        "audio/midi"
    ],
    [
        "midi",
        "audio/midi"
    ],
    [
        "mjs",
        "text/javascript"
    ],
    [
        "mp3",
        "audio/mpeg"
    ],
    [
        "mp4",
        "video/mp4"
    ],
    [
        "mpeg",
        "video/mpeg"
    ],
    [
        "mpkg",
        "application/vnd.apple.installer+xml"
    ],
    [
        "odp",
        "application/vnd.oasis.opendocument.presentation"
    ],
    [
        "ods",
        "application/vnd.oasis.opendocument.spreadsheet"
    ],
    [
        "odt",
        "application/vnd.oasis.opendocument.text"
    ],
    [
        "oga",
        "audio/ogg"
    ],
    [
        "ogv",
        "video/ogg"
    ],
    [
        "ogx",
        "application/ogg"
    ],
    [
        "opus",
        "audio/opus"
    ],
    [
        "otf",
        "font/otf"
    ],
    [
        "png",
        "image/png"
    ],
    [
        "pdf",
        "application/pdf"
    ],
    [
        "php",
        "application/x-httpd-php"
    ],
    [
        "ppt",
        "application/vnd.ms-powerpoint"
    ],
    [
        "pptx",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    ],
    [
        "rar",
        "application/vnd.rar"
    ],
    [
        "rtf",
        "application/rtf"
    ],
    [
        "sh",
        "application/x-sh"
    ],
    [
        "svg",
        "image/svg+xml"
    ],
    [
        "swf",
        "application/x-shockwave-flash"
    ],
    [
        "tar",
        "application/x-tar"
    ],
    [
        "tif",
        "image/tiff"
    ],
    [
        "tiff",
        "image/tiff"
    ],
    [
        "ts",
        "video/mp2t"
    ],
    [
        "ttf",
        "font/ttf"
    ],
    [
        "txt",
        "text/plain"
    ],
    [
        "vsd",
        "application/vnd.visio"
    ],
    [
        "wav",
        "audio/wav"
    ],
    [
        "weba",
        "audio/webm"
    ],
    [
        "webm",
        "video/webm"
    ],
    [
        "webp",
        "image/webp"
    ],
    [
        "woff",
        "font/woff"
    ],
    [
        "woff2",
        "font/woff2"
    ],
    [
        "xhtml",
        "application/xhtml+xml"
    ],
    [
        "xls",
        "application/vnd.ms-excel"
    ],
    [
        "xlsx",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ],
    [
        "xml",
        "application/xml"
    ],
    [
        "xul",
        "application/vnd.mozilla.xul+xml"
    ],
    [
        "zip",
        "application/zip"
    ],
    [
        "7z",
        "application/x-7z-compressed"
    ],
    [
        "mkv",
        "video/x-matroska"
    ],
    [
        "mov",
        "video/quicktime"
    ],
    [
        "msg",
        "application/vnd.ms-outlook"
    ]
]), b = [
    ".DS_Store",
    "Thumbs.db"
], y = (o)=>{
    let { name: e } = o;
    if (e && e.lastIndexOf(".") !== -1 && !o.type) {
        let i = (e.split(".").pop() || "").toLowerCase(), s = x.get(i);
        s && Object.defineProperty(o, "type", {
            value: s,
            writable: !1,
            configurable: !1,
            enumerable: !0
        });
    }
    return o;
}, g = (o, e)=>{
    let t = y(o);
    if (typeof t.path != "string") {
        let { webkitRelativePath: i } = o;
        Object.defineProperty(t, "path", {
            value: typeof e == "string" ? e : i || o.name,
            writable: !1,
            configurable: !1,
            enumerable: !0
        });
    }
    return t;
}, m = async (o)=>await new Promise((e, t)=>{
        o.readEntries(e, t);
    }), w = async (o)=>{
    let e = [], t = await m(o);
    for(; t.length > 0;)e.push(...t), t = await m(o);
    return e;
}, E = (o)=>new Promise((e, t)=>{
        o.file((i)=>e(g(i, o.fullPath)), t);
    }), F = async (o)=>{
    let e = [], t = [];
    for (let i of o){
        if (i.kind !== "file") continue;
        let s = i.getAsEntry ? i.getAsEntry() : i.webkitGetAsEntry();
        t.push(s);
    }
    for(; t.length > 0;){
        let i = t.shift();
        if (i) {
            if (i.isFile) {
                let s = await E(i);
                b.indexOf(s.name) === -1 && e.push(s);
            } else i.isDirectory && t.push(...await w(i.createReader()));
        } else continue;
    }
    return e;
}, f = async (o)=>{
    let e = [];
    for (let t of o)b.indexOf(t.name) === -1 && e.push(g(t));
    return e;
}, l = async (o)=>o.dataTransfer ? o.dataTransfer.items ? await F(o.dataTransfer.items) : await f(o.dataTransfer.files) : await f(o.target.files);
var n = "files-dropzone", v = "TOO_MANY_FILES", L = "FILE_TOO_LARGE", k = "FILE_TOO_SMALL", A = "INVALID_MIME_TYPE", z = document.createElement("template"), S = `
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host {
    --dropzone-border-width: 2px;
    --dropzone-border-style: dashed;
    --dropzone-border-radius: 0.25rem;
    --dropzone-border-color: #6c757d;
    --dropzone-border-color-dragover: #0d6efd;
    --dropzone-border-color-hover: var(--dropzone-border-color-dragover);
    --dropzone-background-color: #ffffff;
    --dropzone-background-color-dragover: #f4f4f5;
    --dropzone-background-color-hover: var(--dropzone-background-color-dragover);
    --dropzone-body-color: #3f3f46;
    --dropzone-body-color-dragover: var(--dropzone-body-color);
    --dropzone-body-color-hover: var(--dropzone-body-color-dragover);
    --dropzone-focus-shadow-rgb: 49,132,253;
    --dropzone-focus-box-shadow: 0 0 0 0.25rem rgba(var(--dropzone-focus-shadow-rgb), 0.5);
    --transition-duration: 0.2s; /* for backwards compatibility */
    --dropzone-transition-duration: var(--transition-duration);

    display: block;
  }

  :host(:not([no-style])) .dropzone {
    border: var(--dropzone-border-width) var(--dropzone-border-style) var(--dropzone-border-color);
    border-radius: var(--dropzone-border-radius);
    padding: 3rem 1rem;
    overflow: hidden;
    background-color: var(--dropzone-background-color);
    color: var(--dropzone-body-color);
    text-align: center;
    cursor: pointer;
    transition: border var(--dropzone-transition-duration) ease-in-out, background-color var(--dropzone-transition-duration) ease-in-out, color var(--dropzone-transition-duration) ease-in-out, box-shadow var(--dropzone-transition-duration) ease-in-out;
  }

  :host(:not([no-style])[disabled]) .dropzone {
    opacity: 0.8;
    cursor: not-allowed;
    user-select: none;
  }

  :host(:not([no-style]):not([disabled])) .dropzone--dragover {
    border-color: var(--dropzone-border-color-dragover);
    background-color: var(--dropzone-background-color-dragover);
    color: var(--dropzone-body-color-dragover);
  }

  :host(:not([no-style]):not([disabled])) .dropzone:focus-visible {
    outline: none;
    box-shadow: var(--dropzone-focus-box-shadow);
  }

  @media (hover: hover) {
    :host(:not([no-style]):not([disabled])) .dropzone:not(.dropzone--dragover):hover {
      border-color: var(--dropzone-border-color-hover);
      background-color: var(--dropzone-background-color-hover);
      color: var(--dropzone-body-color-hover);
    }
  }
`;
z.innerHTML = `
  <style>
    ${S}
  </style>

  <input type="file" id="file-input" hidden>

  <div part="dropzone" class="dropzone" id="dropzone" tabindex="0" role="button" aria-disabled="false">
    <slot>Drag 'n' drop files here, or click to select files</slot>
  </div>
`;
var d = class o extends HTMLElement {
    #t = null;
    #e = null;
    constructor(){
        super(), this.shadowRoot || this.attachShadow({
            mode: "open",
            delegatesFocus: !0
        }).appendChild(z.content.cloneNode(!0)), this.shadowRoot && (this.#t = this.shadowRoot.getElementById("file-input"), this.#e = this.shadowRoot.getElementById("dropzone"));
    }
    static get observedAttributes() {
        return [
            "accept",
            "disabled",
            "multiple"
        ];
    }
    attributeChangedCallback(e, t, i) {
        e === "accept" && t !== i && this.#t && (this.#t.accept = this.accept), e === "disabled" && t !== i && this.#t && (this.#t.disabled = this.disabled, this.disabled ? (this.#e?.removeAttribute("tabindex"), this.#e?.setAttribute("aria-disabled", "true")) : (this.#e?.setAttribute("tabindex", "0"), this.#e?.setAttribute("aria-disabled", "false"))), e === "multiple" && t !== i && this.#t && (this.#t.multiple = this.multiple);
    }
    connectedCallback() {
        this.#o("accept"), this.#o("disabled"), this.#o("maxFiles"), this.#o("maxSize"), this.#o("minSize"), this.#o("multiple"), this.#o("autoFocus"), this.#o("noStyle"), this.#t?.addEventListener("change", this.#i), this.#e?.addEventListener("dragenter", this.#r), this.#e?.addEventListener("dragover", this.#s), this.#e?.addEventListener("dragleave", this.#n), this.#e?.addEventListener("drop", this.#a), this.#e?.addEventListener("click", this.#d), this.#e?.addEventListener("keyup", this.#l), this.autoFocus && this.#e?.focus();
    }
    disconnectedCallback() {
        this.#t?.removeEventListener("change", this.#i), this.#e?.removeEventListener("dragenter", this.#r), this.#e?.removeEventListener("dragover", this.#s), this.#e?.removeEventListener("dragleave", this.#n), this.#e?.removeEventListener("drop", this.#a), this.#e?.removeEventListener("click", this.#d), this.#e?.removeEventListener("keyup", this.#l);
    }
    get accept() {
        return this.getAttribute("accept") || "";
    }
    set accept(e) {
        this.setAttribute("accept", e != null ? e.toString() : e);
    }
    get disabled() {
        return this.hasAttribute("disabled");
    }
    set disabled(e) {
        this.toggleAttribute("disabled", !!e);
    }
    get maxFiles() {
        let e = Number(this.getAttribute("max-files")) || 0;
        return e <= 0 ? 1 / 0 : Math.floor(Math.abs(e));
    }
    set maxFiles(e) {
        this.setAttribute("max-files", e != null ? e.toString() : e);
    }
    get maxSize() {
        let e = this.getAttribute("max-size");
        if (e === null) return 1 / 0;
        let t = Number(e);
        return Number.isNaN(t) ? 1 / 0 : t;
    }
    set maxSize(e) {
        this.setAttribute("max-size", e != null ? e.toString() : e);
    }
    get minSize() {
        let e = this.getAttribute("min-size");
        if (e === null) return 0;
        let t = Number(e);
        return Number.isNaN(t) ? 0 : t;
    }
    set minSize(e) {
        this.setAttribute("min-size", e != null ? e.toString() : e);
    }
    get multiple() {
        return this.hasAttribute("multiple");
    }
    set multiple(e) {
        this.toggleAttribute("multiple", !!e);
    }
    get autoFocus() {
        return this.hasAttribute("auto-focus");
    }
    set autoFocus(e) {
        this.toggleAttribute("auto-focus", !!e);
    }
    get noStyle() {
        return this.hasAttribute("no-style");
    }
    set noStyle(e) {
        this.toggleAttribute("no-style", !!e);
    }
    #i = async (e)=>{
        try {
            this.#c(await l(e));
        } catch (t) {
            this.dispatchEvent(new CustomEvent(`${n}-error`, {
                bubbles: !0,
                composed: !0,
                detail: {
                    error: t
                }
            }));
        }
    };
    #r = ()=>{
        this.disabled || this.dispatchEvent(new Event(`${n}-dragenter`, {
            bubbles: !0,
            composed: !0
        }));
    };
    #s = (e)=>{
        if (e.preventDefault(), this.disabled) {
            e.dataTransfer.dropEffect = "none";
            return;
        }
        e.dataTransfer.dropEffect = "copy", this.#e && (this.#e.classList.add("dropzone--dragover"), this.#e.part.add("dropzone--dragover")), this.dispatchEvent(new Event(`${n}-dragover`, {
            bubbles: !0,
            composed: !0
        }));
    };
    #n = ()=>{
        this.disabled || (this.#e && (this.#e.classList.remove("dropzone--dragover"), this.#e.part.remove("dropzone--dragover")), this.dispatchEvent(new Event(`${n}-dragleave`, {
            bubbles: !0,
            composed: !0
        })));
    };
    #a = async (e)=>{
        if (!this.disabled) {
            e.preventDefault(), this.#e && (this.#e.classList.remove("dropzone--dragover"), this.#e.part.remove("dropzone--dragover"));
            try {
                this.#c(await l(e));
            } catch (t) {
                this.dispatchEvent(new CustomEvent(`${n}-error`, {
                    bubbles: !0,
                    composed: !0,
                    detail: {
                        error: t
                    }
                }));
            }
        }
    };
    #d = ()=>{
        this.disabled || this.#t?.click();
    };
    #l = (e)=>{
        this.disabled || (e.key === " " || e.key === "Enter") && this.#t?.click();
    };
    #c(e) {
        if (!Array.isArray(e) || !e.length) return;
        let t = [], i = [], s = e.length;
        if (!this.multiple && s > 1) for (let r of e)i.push({
            file: r,
            errors: [
                {
                    code: v,
                    message: "Too many files selected. Only 1 file is allowed."
                }
            ]
        });
        else if (this.multiple && s > this.maxFiles) for (let r of e)i.push({
            file: r,
            errors: [
                {
                    code: v,
                    message: `Too many files selected. Only ${this.maxFiles} ${this.maxFiles > 1 ? "files are" : "file is"} allowed.`
                }
            ]
        });
        else for (let r of e){
            let c = u(r, this.accept), p = r.size > this.maxSize, h = r.size < this.minSize;
            if (c && !p && !h) t.push(r);
            else {
                let a = [];
                c || a.push({
                    code: A,
                    message: `File type "${r.type}" is not accepted.`
                }), p && a.push({
                    code: L,
                    message: `File size ${r.size} exceeds the maximum size of ${this.maxSize}.`
                }), h && a.push({
                    code: k,
                    message: `File size ${r.size} is smaller than the minimum size of ${this.minSize}.`
                }), i.push({
                    file: r,
                    errors: a
                });
            }
        }
        this.dispatchEvent(new CustomEvent(`${n}-drop`, {
            bubbles: !0,
            composed: !0,
            detail: {
                acceptedFiles: t,
                rejectedFiles: i
            }
        })), t.length > 0 && this.dispatchEvent(new CustomEvent(`${n}-drop-accepted`, {
            bubbles: !0,
            composed: !0,
            detail: {
                acceptedFiles: t
            }
        })), i.length > 0 && this.dispatchEvent(new CustomEvent(`${n}-drop-rejected`, {
            bubbles: !0,
            composed: !0,
            detail: {
                rejectedFiles: i
            }
        })), this.#t && (this.#t.value = this.#t.defaultValue);
    }
    openFileDialog() {
        this.disabled || this.#t?.click();
    }
    #o(e) {
        let t = this;
        if (Object.prototype.hasOwnProperty.call(t, e)) {
            let i = t[e];
            delete t[e], t[e] = i;
        }
    }
    static defineCustomElement(e = n) {
        typeof window < "u" && !window.customElements.get(e) && window.customElements.define(e, o);
    }
};
d.defineCustomElement();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Cj3u":[function(require,module,exports,__globalThis) {
/*!
 * @georapbox/resize-observer-element
 * A custom element that offers a declarative interface to the ResizeObserver API.
 *
 * @version 2.0.1
 * @homepage https://github.com/georapbox/resize-observer-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ResizeObserverElement", ()=>s);
var d = ":host { display: contents; }", o = document.createElement("template");
o.innerHTML = `
  <style>${d}</style>
  <slot></slot>
`;
var s = class n extends HTMLElement {
    #e = null;
    #t = null;
    #s = [];
    constructor(){
        super(), this.shadowRoot || this.attachShadow({
            mode: "open"
        }).appendChild(o.content.cloneNode(!0)), this.#e = this.shadowRoot?.querySelector("slot") ?? null;
    }
    static get observedAttributes() {
        return [
            "disabled"
        ];
    }
    attributeChangedCallback(e, t, i) {
        e === "disabled" && t !== i && (this.disabled ? this.#o() : this.#i());
    }
    connectedCallback() {
        this.#d("disabled"), "ResizeObserver" in window && (this.#t = new ResizeObserver((e)=>{
            this.dispatchEvent(new CustomEvent("resize-observer:resize", {
                bubbles: !0,
                composed: !0,
                detail: {
                    entries: e
                }
            }));
        }), this.disabled || this.#i(), this.#e?.addEventListener("slotchange", this.#n));
    }
    disconnectedCallback() {
        this.#o(), this.#e?.removeEventListener("slotchange", this.#n);
    }
    get disabled() {
        return this.hasAttribute("disabled");
    }
    set disabled(e) {
        this.toggleAttribute("disabled", !!e);
    }
    #i() {
        !this.#e || !this.#t || (this.#s.forEach((e)=>this.#t?.unobserve(e)), this.#s = [], this.#e.assignedElements().forEach((e)=>{
            this.#t?.observe(e), this.#s.push(e);
        }));
    }
    #o() {
        this.#t?.disconnect();
    }
    #n = ()=>{
        this.disabled || this.#i();
    };
    #d(e) {
        let t = this;
        if (Object.prototype.hasOwnProperty.call(t, e)) {
            let i = t[e];
            delete t[e], t[e] = i;
        }
    }
    static defineCustomElement(e = "resize-observer") {
        typeof window < "u" && !window.customElements.get(e) && window.customElements.define(e, n);
    }
};
s.defineCustomElement();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Tu6f":[function(require,module,exports,__globalThis) {
/*!
 * @georapbox/modal-element
 * A custom element to create a modal, using the native dialog element under the hood.
 *
 * @version 1.8.0
 * @homepage https://github.com/georapbox/modal-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ModalElement", ()=>a);
var n = document.createElement("template"), r = `
  :host {
    --me-width: 32rem;
    --me-height: fit-content;
    --me-border-color: initial;
    --me-border-style: solid;
    --me-border-width: initial;
    --me-border-radius: 0;
    --me-box-shadow: none;
    --me-background-color: canvas;
    --me-color: canvastext;

    --me-header-spacing: 1rem;
    --me-footer-spacing: 1rem;
    --me-header-background-color: transparent;
    --me-header-color: initial;

    --me-body-spacing: 1rem;
    --me-body-background-color: transparent;
    --me-body-color: initial;
    --me-footer-background-color: transparent;
    --me-footer-color: initial;

    --me-close-padding: 0.4375rem;
    --me-close-border: none;
    --me-close-border-radius: 0;
    --me-close-background-color: transparent;
    --me-close-color: inherit;
    --me-close-font-size: 1rem;

    --me-backdrop-background: rgba(0, 0, 0, 0.5);
    --me-backdrop-filter: none;

    display: contents;
    box-sizing: border-box;
  }

  :host *,
  :host *:after,
  :host *:before {
    box-sizing: inherit;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  /* Dialog */
  .dialog {
    --dialog-placement-margin: calc((2em + 6px) / 2);

    width: var(--me-width);
    height: var(--me-height);
    padding: 0;
    border-color: var(--me-border-color);
    border-style: var(--me-border-style);
    border-width: var(--me-border-width);
    border-radius: var(--me-border-radius);
    box-shadow: var(--me-box-shadow);
    background-color: var(--me-background-color);
    color: var(--me-color);
  }

  .dialog[open] {
    display: flex;
  }

  :host([fullscreen]) .dialog {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
  }

  .dialog::backdrop {
    background: var(--me-backdrop-background, rgba(0, 0, 0, 0.5));
    backdrop-filter: var(--me-backdrop-filter, none);
    opacity: 0;
  }

  .dialog[open]::backdrop {
    opacity: 1;
  }

  /* Dialog placement */
  :host(:not([fullscreen])[placement="top-start"]) .dialog {
    margin-block-start: var(--dialog-placement-margin);
    margin-inline-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="top-center"]) .dialog {
    margin-block-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="top-end"]) .dialog {
    margin-block-start: var(--dialog-placement-margin);
    margin-inline-end: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="center-start"]) .dialog {
    margin-inline-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="center"]) .dialog {
    margin: auto;
  }

  :host(:not([fullscreen])[placement="center-end"]) .dialog {
    margin-inline-end: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="bottom-start"]) .dialog {
    margin-block-end: var(--dialog-placement-margin);
    margin-inline-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="bottom-center"]) .dialog {
    margin-block-end: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="bottom-end"]) .dialog {
    margin-block-end: var(--dialog-placement-margin);
    margin-inline-end: var(--dialog-placement-margin);
  }

  /* Dialog animations */
  @media (prefers-reduced-motion: no-preference) {
    .dialog:not(.dialog--no-animations),
    .dialog:not(.dialog--no-animations)::backdrop {
      transition: transform 0.3s, opacity 0.3s, display 0.3s allow-discrete, overlay 0.3s allow-discrete;
    }

    /* 1. IS-OPEN STATE */
    .dialog[open] {
      transform: scale(1);
      opacity: 1;
    }

    /* 2. EXIT STATE */
    .dialog {
      transform: scale(0.95);
      opacity: 0;
    }

    /* 0. BEFORE-OPEN STATE */
    @starting-style {
      .dialog[open] {
        transform: scale(0.95);
        opacity: 0;
      }

      .dialog[open]::backdrop {
        opacity: 0;
      }
    }

    .dialog--pulse:not(.dialog--no-animations) {
      animation-name: pulse;
      animation-duration: 300ms;
      animation-timing-function: cubic-bezier(0.2, 0, 0.38, 0.9);
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.02); }
      100% { transform: scale(1); }
    }
  }

  /* Dialog panel, header, body, footer */
  .dialog__panel {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: 100%;
  }

  .dialog__header {
    display: flex;
    align-items: center;
    padding: var(--me-header-spacing);
    column-gap: 0.5rem;
    background-color: var(--me-header-background-color);
    color: var(--me-header-color);
  }

  :host([no-close-button]) .dialog__header {
    column-gap: 0;
  }

  .dialog__title {
    display: block;
    flex: 1 1 auto;
    padding: 0;
    margin: 0;
  }

  .dialog__body {
    display: block;
    flex: 1 1 auto;
    padding: var(--me-body-spacing);
    overflow: auto;
    background-color: var(--me-body-background-color);
    color: var(--me-body-color);
    overscroll-behavior: contain;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: end;
    padding: var(--me-footer-spacing);
    background-color: var(--me-footer-background-color);
    color: var(--me-footer-color);
  }

  .dialog__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--me-close-padding);
    border: var(--me-close-border);
    border-radius: var(--me-close-border-radius);
    background-color: var(--me-close-background-color);
    color: var(--me-close-color);
    font-size: var(--me-close-font-size);
  }

  .dialog__close:not(:disabled) {
    cursor: pointer;
  }

  .dialog__close:disabled {
    cursor: not-allowed;
  }
`;
n.innerHTML = `
  <style>${r}</style>

  <dialog part="base" class="dialog">
    <div part="panel" class="dialog__panel" aria-labelledby="title">
      <header part="header" class="dialog__header">
        <slot name="header" part="title" class="dialog__title" id="title"></slot>

        <form method="dialog">
          <button type="submit" part="close" class="dialog__close" aria-label="Close">
            <slot name="close">
              <svg part="close-icon" xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
            </slot>
          </button>
        </form>
      </header>

      <slot part="body" class="dialog__body"></slot>

      <footer part="footer" class="dialog__footer" hidden>
        <slot name="footer"></slot>
      </footer>
    </div>
  </dialog>
`;
var a = class s extends HTMLElement {
    #e = null;
    #i = null;
    #a = null;
    #o = void 0;
    constructor(){
        super(), this.shadowRoot || this.attachShadow({
            mode: "open"
        }).appendChild(n.content.cloneNode(!0)), this.shadowRoot && (this.#e = this.shadowRoot.querySelector("dialog"), this.#i = this.shadowRoot.querySelector('slot[name="footer"]'), this.#a = this.shadowRoot.querySelector('slot[name="close"]'));
    }
    static get observedAttributes() {
        return [
            "open",
            "no-header",
            "no-animations",
            "no-close-button",
            "close-label"
        ];
    }
    attributeChangedCallback(e, t, i) {
        if (this.#e !== null) {
            if (e === "open" && t !== i && (this.open ? (this.#e.showModal(), this.dispatchEvent(new CustomEvent("me-open", {
                bubbles: !0,
                composed: !0,
                detail: {
                    element: this
                }
            })), document.body && !this.preserveOverflow && (document.body.style.overflow = "hidden")) : this.#e.close()), e === "no-header" && t !== i) {
                let o = this.#e.querySelector(".dialog__header");
                o !== null && (o.hidden = this.noHeader);
            }
            if (e === "no-animations" && t !== i && this.#e.classList.toggle("dialog--no-animations", this.noAnimations), e === "no-close-button" && t !== i) {
                let o = this.#e.querySelector(".dialog__close");
                o !== null && (o.hidden = this.noCloseButton);
            }
            e === "close-label" && t !== i && this.#r();
        }
    }
    connectedCallback() {
        this.#t("open"), this.#t("staticBackdrop"), this.#t("noHeader"), this.#t("noAnimations"), this.#t("noCloseButton"), this.#t("fullscreen"), this.#t("preserveOverflow"), this.#t("placement"), this.#t("closeLabel"), this.#e?.addEventListener("click", this.#h), this.#e?.addEventListener("close", this.#l), this.#e?.addEventListener("cancel", this.#d), this.#e?.querySelector('form[method="dialog"]')?.addEventListener("submit", this.#c), this.#i?.addEventListener("slotchange", this.#m), this.#a?.addEventListener("slotchange", this.#g);
    }
    disconnectedCallback() {
        this.#o && clearTimeout(this.#o), this.#e?.addEventListener("click", this.#h), this.#e?.removeEventListener("close", this.#l), this.#e?.removeEventListener("cancel", this.#d), this.#e?.querySelector('form[method="dialog"]')?.removeEventListener("submit", this.#c), this.#i?.removeEventListener("slotchange", this.#m), this.#a?.removeEventListener("slotchange", this.#g);
    }
    get open() {
        return this.hasAttribute("open");
    }
    set open(e) {
        this.toggleAttribute("open", !!e);
    }
    get staticBackdrop() {
        return this.hasAttribute("static-backdrop");
    }
    set staticBackdrop(e) {
        this.toggleAttribute("static-backdrop", !!e);
    }
    get noHeader() {
        return this.hasAttribute("no-header");
    }
    set noHeader(e) {
        this.toggleAttribute("no-header", !!e);
    }
    get noAnimations() {
        return this.hasAttribute("no-animations");
    }
    set noAnimations(e) {
        this.toggleAttribute("no-animations", !!e);
    }
    get noCloseButton() {
        return this.hasAttribute("no-close-button");
    }
    set noCloseButton(e) {
        this.toggleAttribute("no-close-button", !!e);
    }
    get fullscreen() {
        return this.hasAttribute("fullscreen");
    }
    set fullscreen(e) {
        this.toggleAttribute("fullscreen", !!e);
    }
    get preserveOverflow() {
        return this.hasAttribute("preserve-overflow");
    }
    set preserveOverflow(e) {
        this.toggleAttribute("preserve-overflow", !!e);
    }
    get placement() {
        return this.getAttribute("placement") || "center";
    }
    set placement(e) {
        this.setAttribute("placement", e != null ? e.toString() : e);
    }
    get closeLabel() {
        return this.getAttribute("close-label") || "Close";
    }
    set closeLabel(e) {
        this.setAttribute("close-label", e != null ? e.toString() : e);
    }
    #r() {
        if (this.#e === null) return;
        let e = this.#e.querySelector(".dialog__close");
        if (e === null) return;
        (this.#a?.assignedElements() || [])?.some((o)=>o.textContent?.replace(/\s/g, "") !== "") ? e.removeAttribute("aria-label") : e.setAttribute("aria-label", this.closeLabel);
    }
    #n() {
        this.#o || (this.#e?.classList.add("dialog--pulse"), this.#o = setTimeout(()=>{
            this.#e?.classList.remove("dialog--pulse"), clearTimeout(this.#o), this.#o = void 0;
        }, 300));
    }
    #l = ()=>{
        this.open = !1, this.dispatchEvent(new CustomEvent("me-close", {
            bubbles: !0,
            composed: !0,
            detail: {
                element: this
            }
        })), document.body && !this.preserveOverflow && (document.body.style.overflow = "");
    };
    #d = (e)=>{
        let t = this.#s("escape-key");
        this.dispatchEvent(t), t.defaultPrevented && (e.preventDefault(), !this.noAnimations && this.#n());
    };
    #c = (e)=>{
        let t = this.#s("close-button");
        this.dispatchEvent(t), t.defaultPrevented && (e.preventDefault(), !this.noAnimations && this.#n());
    };
    #h = (e)=>{
        let t = e.target, i = e.currentTarget;
        if (t === i) {
            let o = this.#s("backdrop-click");
            this.dispatchEvent(o), o.defaultPrevented || this.staticBackdrop ? !this.noAnimations && this.#n() : this.hide();
        }
        if (t instanceof HTMLElement && t.closest("[data-me-close]") !== null) {
            let o = this.#s("external-invoker");
            this.dispatchEvent(o), o.defaultPrevented ? !this.noAnimations && this.#n() : this.hide();
        }
    };
    #m = ()=>{
        if (this.#e === null) return;
        let e = this.#e.querySelector(".dialog__footer");
        if (e === null) return;
        let t = this.#i?.assignedNodes(), i = t ? t.length > 0 : !1;
        e.hidden = !i;
    };
    #g = ()=>{
        this.#r();
    };
    #s(e) {
        return new CustomEvent("me-request-close", {
            bubbles: !0,
            composed: !0,
            cancelable: !0,
            detail: {
                reason: e,
                element: this
            }
        });
    }
    #t(e) {
        let t = this;
        if (Object.prototype.hasOwnProperty.call(t, e)) {
            let i = t[e];
            delete t[e], t[e] = i;
        }
    }
    show() {
        this.open || (this.open = !0);
    }
    hide() {
        this.open && (this.open = !1);
    }
    static defineCustomElement(e = "modal-element") {
        typeof window < "u" && !window.customElements.get(e) && window.customElements.define(e, s);
    }
};
a.defineCustomElement();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"itKcQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EXPERIMENTAL_FLAG", ()=>EXPERIMENTAL_FLAG);
parcelHelpers.export(exports, "NO_BARCODE_DETECTED", ()=>NO_BARCODE_DETECTED);
parcelHelpers.export(exports, "ACCEPTED_MIME_TYPES", ()=>ACCEPTED_MIME_TYPES);
const EXPERIMENTAL_FLAG = 'experimental';
const NO_BARCODE_DETECTED = 'No barcode detected';
const ACCEPTED_MIME_TYPES = [
    'image/jpg',
    'image/jpeg',
    'image/png',
    'image/apng',
    'image/gif',
    'image/webp',
    'image/avif'
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"sgsxU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSettings", ()=>getSettings);
parcelHelpers.export(exports, "setSettings", ()=>setSettings);
parcelHelpers.export(exports, "getHistory", ()=>getHistory);
parcelHelpers.export(exports, "setHistory", ()=>setHistory);
var _idbKeyval = require("idb-keyval");
const STORAGE_PREFIX = 'barcode-scanner/';
const SETTINGS_STORAGE_KEY = 'settings';
const HISTORY_STORAGE_KEY = 'history';
/**
 * Gets an item from the storage.
 *
 * @param {string} key - The key to get the item from.
 * @returns {Promise<[ error: any, value: any ]>} The item and an error if occurred.
 */ const getItem = async (key)=>{
    try {
        return [
            null,
            await (0, _idbKeyval.get)(key)
        ];
    } catch (error) {
        return [
            error,
            void 0
        ];
    }
};
/**
 * Sets an item in the storage.
 *
 * @param {string} key - The key to set the item to.
 * @param {any} data - The data to set.
 * @returns {Promise<[ error: any ]>} An error if occurred.
 */ const setItem = async (key, data)=>{
    try {
        await (0, _idbKeyval.set)(key, data);
        return [
            null
        ];
    } catch (error) {
        return [
            error
        ];
    }
};
const getSettings = async ()=>{
    return getItem(STORAGE_PREFIX + SETTINGS_STORAGE_KEY);
};
const setSettings = async (data)=>{
    return setItem(STORAGE_PREFIX + SETTINGS_STORAGE_KEY, data);
};
const getHistory = async ()=>{
    return getItem(STORAGE_PREFIX + HISTORY_STORAGE_KEY);
};
const setHistory = async (data)=>{
    return setItem(STORAGE_PREFIX + HISTORY_STORAGE_KEY, data);
};

},{"idb-keyval":"lciyz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lciyz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clear", ()=>clear);
parcelHelpers.export(exports, "createStore", ()=>createStore);
parcelHelpers.export(exports, "del", ()=>del);
parcelHelpers.export(exports, "delMany", ()=>delMany);
parcelHelpers.export(exports, "entries", ()=>entries);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "getMany", ()=>getMany);
parcelHelpers.export(exports, "keys", ()=>keys);
parcelHelpers.export(exports, "promisifyRequest", ()=>promisifyRequest);
parcelHelpers.export(exports, "set", ()=>set);
parcelHelpers.export(exports, "setMany", ()=>setMany);
parcelHelpers.export(exports, "update", ()=>update);
parcelHelpers.export(exports, "values", ()=>values);
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function promisifyRequest(request) {
    return new Promise(function(resolve, reject) {
        // @ts-ignore - file size hacks
        request.oncomplete = request.onsuccess = function() {
            return resolve(request.result);
        }; // @ts-ignore - file size hacks
        request.onabort = request.onerror = function() {
            return reject(request.error);
        };
    });
}
function createStore(dbName, storeName) {
    var request = indexedDB.open(dbName);
    request.onupgradeneeded = function() {
        return request.result.createObjectStore(storeName);
    };
    var dbp = promisifyRequest(request);
    return function(txMode, callback) {
        return dbp.then(function(db) {
            return callback(db.transaction(storeName, txMode).objectStore(storeName));
        });
    };
}
var defaultGetStoreFunc;
function defaultGetStore() {
    if (!defaultGetStoreFunc) defaultGetStoreFunc = createStore('keyval-store', 'keyval');
    return defaultGetStoreFunc;
}
/**
 * Get a value by its key.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function get(key) {
    var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();
    return customStore('readonly', function(store) {
        return promisifyRequest(store.get(key));
    });
}
/**
 * Set a value with a key.
 *
 * @param key
 * @param value
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function set(key, value) {
    var customStore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGetStore();
    return customStore('readwrite', function(store) {
        store.put(value, key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Set multiple values at once. This is faster than calling set() multiple times.
 * It's also atomic – if one of the pairs can't be added, none will be added.
 *
 * @param entries Array of entries, where each entry is an array of `[key, value]`.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function setMany(entries) {
    var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();
    return customStore('readwrite', function(store) {
        entries.forEach(function(entry) {
            return store.put(entry[1], entry[0]);
        });
        return promisifyRequest(store.transaction);
    });
}
/**
 * Get multiple values by their keys
 *
 * @param keys
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function getMany(keys) {
    var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();
    return customStore('readonly', function(store) {
        return Promise.all(keys.map(function(key) {
            return promisifyRequest(store.get(key));
        }));
    });
}
/**
 * Update a value. This lets you see the old value and update it as an atomic operation.
 *
 * @param key
 * @param updater A callback that takes the old value and returns a new value.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function update(key, updater) {
    var customStore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGetStore();
    return customStore('readwrite', function(store) {
        return(// If I try to chain promises, the transaction closes in browsers
        // that use a promise polyfill (IE10/11).
        new Promise(function(resolve, reject) {
            store.get(key).onsuccess = function() {
                try {
                    store.put(updater(this.result), key);
                    resolve(promisifyRequest(store.transaction));
                } catch (err) {
                    reject(err);
                }
            };
        }));
    });
}
/**
 * Delete a particular key from the store.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function del(key) {
    var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();
    return customStore('readwrite', function(store) {
        store.delete(key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Delete multiple keys at once.
 *
 * @param keys List of keys to delete.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function delMany(keys) {
    var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();
    return customStore('readwrite', function(store) {
        keys.forEach(function(key) {
            return store.delete(key);
        });
        return promisifyRequest(store.transaction);
    });
}
/**
 * Clear all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function clear() {
    var customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGetStore();
    return customStore('readwrite', function(store) {
        store.clear();
        return promisifyRequest(store.transaction);
    });
}
function eachCursor(store, callback) {
    store.openCursor().onsuccess = function() {
        if (!this.result) return;
        callback(this.result);
        this.result.continue();
    };
    return promisifyRequest(store.transaction);
}
/**
 * Get all keys in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function keys() {
    var customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGetStore();
    return customStore('readonly', function(store) {
        // Fast path for modern browsers
        if (store.getAllKeys) return promisifyRequest(store.getAllKeys());
        var items = [];
        return eachCursor(store, function(cursor) {
            return items.push(cursor.key);
        }).then(function() {
            return items;
        });
    });
}
/**
 * Get all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function values() {
    var customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGetStore();
    return customStore('readonly', function(store) {
        // Fast path for modern browsers
        if (store.getAll) return promisifyRequest(store.getAll());
        var items = [];
        return eachCursor(store, function(cursor) {
            return items.push(cursor.value);
        }).then(function() {
            return items;
        });
    });
}
/**
 * Get all entries in the store. Each entry is an array of `[key, value]`.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function entries() {
    var customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGetStore();
    return customStore('readonly', function(store) {
        // Fast path for modern browsers
        // (although, hopefully we'll get a simpler path some day)
        if (store.getAll && store.getAllKeys) return Promise.all([
            promisifyRequest(store.getAllKeys()),
            promisifyRequest(store.getAll())
        ]).then(function(_ref) {
            var _ref2 = _slicedToArray(_ref, 2), keys = _ref2[0], values = _ref2[1];
            return keys.map(function(key, i) {
                return [
                    key,
                    values[i]
                ];
            });
        });
        var items = [];
        return customStore('readonly', function(store) {
            return eachCursor(store, function(cursor) {
                return items.push([
                    cursor.key,
                    cursor.value
                ]);
            }).then(function() {
                return items;
            });
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hVhN7":[function(require,module,exports,__globalThis) {
/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * 'n' milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @param {function} fn The function to be executed.
 * @param {Number} [wait=0] Time of delay in milliseconds. It is required if `immediate` is used.
 * @param {Boolean} [immediate=false] If true or any truthy value, triggers the function on the leading edge.
 * @throws {TypeError} If `fn` is not function.
 * @returns {function} A new debounced function.
 * @example
 *
 * const debouncedHandler = debounce(() => {
 *   // Do your thing here...
 * }, 250);
 *
 * window.addEventListener('resize', debouncedHandler, false);
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debounce", ()=>debounce);
function debounce(fn, wait = 0, immediate = false) {
    let timerId = null;
    if (typeof fn !== 'function') throw new TypeError('Expected a function for first argument');
    return (...args)=>{
        clearTimeout(timerId);
        if (immediate && !timerId) fn(...args);
        timerId = setTimeout(()=>{
            timerId = null;
            if (!immediate) fn(...args);
        }, wait);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dMd8G":[function(require,module,exports,__globalThis) {
/**
 * Log to console only in development mode.
 *
 * @param {...any} args - Arguments to log
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "log", ()=>log);
function log(...args) {
    console.log(...args);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2DHze":[function(require,module,exports,__globalThis) {
/**
 * Check if the dialog element is supported.
 *
 * @returns {boolean} - Returns true if the dialog element is supported.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isDialogElementSupported", ()=>isDialogElementSupported);
function isDialogElementSupported() {
    return typeof HTMLDialogElement === 'function';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gKxXl":[function(require,module,exports,__globalThis) {
/**
 * Removes the scanned result from the element where it is shown.
 *
 * @param {HTMLElement} element - The element to remove the result from.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hideResult", ()=>hideResult);
/**
 * Creates and shows the scanned result inside the given element.
 *
 * @param {HTMLElement} element - The element to show the result in.
 * @param {string} value - The value to create the result with.
 */ parcelHelpers.export(exports, "showResult", ()=>showResult);
function hideResult(element) {
    if (!element) return;
    element.querySelector('bs-result')?.remove();
}
async function showResult(element, value) {
    if (!element || !value) return;
    const oldResultEl = element.querySelector('bs-result');
    if (oldResultEl) oldResultEl.setAttribute('value', value);
    else {
        const newResultEl = document.createElement('bs-result');
        newResultEl.setAttribute('value', value);
        newResultEl.setAttribute('role', 'alert');
        newResultEl.setAttribute('aria-live', 'assertive');
        newResultEl.setAttribute('aria-atomic', 'true');
        element.appendChild(newResultEl);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6LHLu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Triggers the scan effects like beep and vibrate.
 *
 * @param {Object} options
 * @param {boolean} [options.success=true] - Whether to trigger the success or error effects.
 */ parcelHelpers.export(exports, "triggerScanEffects", ()=>triggerScanEffects);
var _storageJs = require("../services/storage.js");
var _beepJs = require("../utils/beep.js");
var _vibrateJs = require("../utils/vibrate.js");
async function triggerScanEffects(options = {}) {
    const { success = true } = options;
    const [, settings] = await (0, _storageJs.getSettings)();
    if (!settings) return;
    const beepConfig = success ? {
        duration: 200,
        frequency: 860,
        volume: 0.03,
        type: 'square'
    } : {
        duration: 300,
        frequency: 200,
        volume: 0.05,
        type: 'sawtooth'
    };
    settings.beep && (0, _beepJs.beep)(beepConfig);
    settings.vibrate && (0, _vibrateJs.vibrate)(success ? 100 : 200);
}

},{"../services/storage.js":"sgsxU","../utils/beep.js":"8X5Cf","../utils/vibrate.js":"2XB9J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8X5Cf":[function(require,module,exports,__globalThis) {
/**
 * Beep sound using the `AudioContext` interface.
 *
 * @param {Object} options
 * @param {Number} options.duration - Duration in milliseconds
 * @param {Number} options.frequency - Frequency in Hz
 * @param {Number} options.volume - Volume
 * @param {String} options.type - Type of oscillator
 * @param {Function} options.onEnded - Callback function when the sound ends
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "beep", ()=>beep);
const beep = (()=>{
    const audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext)();
    if (!audioCtx) return;
    return (options)=>{
        const { duration, frequency, volume, type, onEnded } = options;
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        if (volume) gainNode.gain.value = volume;
        if (frequency) oscillator.frequency.value = frequency;
        if (type) oscillator.type = type;
        if (typeof onEnded === 'function') oscillator.onended = onEnded;
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + (duration || 500) / 1000);
    };
})();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2XB9J":[function(require,module,exports,__globalThis) {
/**
 * Vibrate the device.
 * If the device does not support vibration, this function will fail silently.
 *
 * @param {Number} [duration=0] - Duration in milliseconds
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "vibrate", ()=>vibrate);
async function vibrate(duration = 0) {
    if (typeof window.navigator.vibrate !== 'function') return;
    try {
        window.navigator.vibrate(duration);
    } catch  {
    // Fail silently...
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ekHmu":[function(require,module,exports,__globalThis) {
/**
 * Resizes the scan frame to match the video element's dimensions.
 *
 * @param {HTMLVideoElement} videoEl - Video element
 * @param {HTMLElement} scanFrameEl - Scan frame element
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resizeScanFrame", ()=>resizeScanFrame);
function resizeScanFrame(videoEl, scanFrameEl) {
    if (!videoEl || !scanFrameEl) return;
    const rect = videoEl.getBoundingClientRect();
    scanFrameEl.style.cssText = `width: ${rect.width}px; height: ${rect.height}px`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2psgK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BarcodeReader", ()=>BarcodeReader);
var _logJs = require("../utils/log.js");
// https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API#supported_barcode_formats
const WHITELISTED_FORMATS = [
    'aztec',
    'code_128',
    'code_39',
    'code_93',
    'codabar',
    'data_matrix',
    'ean_13',
    'ean_8',
    'itf',
    'pdf417',
    'qr_code',
    'upc_a',
    'upc_e'
];
/**
 * BarcodeReader class to detect barcodes from images or videos.
 *
 * @see https://developer.mozilla.org/docs/Web/API/BarcodeDetector
 */ class BarcodeReader {
    static async polyfill() {
        if (!('BarcodeDetector' in window)) try {
            await require("bfcca166d6641c34");
            (0, _logJs.log)('Using BarcodeDetector polyfill.');
        } catch (error) {
            throw new Error('BarcodeDetector API is not supported by your browser.', {
                cause: error
            });
        }
        else (0, _logJs.log)('Using the native BarcodeDetector API.');
    }
    /**
   * Get the supported barcode formats.
   *
   * @see https://developer.mozilla.org/docs/Web/API/BarcodeDetector/getSupportedFormats
   * @returns {Promise<Array<string>>} - Supported barcode formats
   */ static async getSupportedFormats() {
        const nativeSupportedFormats = await window.BarcodeDetector.getSupportedFormats() || [];
        return WHITELISTED_FORMATS.filter((format)=>nativeSupportedFormats.includes(format));
    }
    /**
   * Create a new BarcodeReader instance.
   *
   * @param {Array<string>} supportedFormats - Supported barcode formats
   * @returns {Promise<BarcodeReader>} - New BarcodeReader instance
   */ static async create(supportedFormats) {
        const isValidFormats = Array.isArray(supportedFormats) && supportedFormats.length > 0;
        const formats = isValidFormats ? supportedFormats : await BarcodeReader.getSupportedFormats();
        return new BarcodeReader(formats);
    }
    /**
   * Sets up BarcodeReader by polyfilling the BarcodeDetector API if needed.
   *
   * @returns {Promise<{ barcodeReaderError: Error }>} - BarcodeReader setup result
   */ static async setup() {
        try {
            await BarcodeReader.polyfill();
            return {
                barcodeReaderError: null
            };
        } catch (error) {
            return {
                barcodeReaderError: error
            };
        }
    }
    /**
   * Create a new BarcodeReader instance.
   *
   * @param {Array<string>} formats - Supported barcode formats
   */ constructor(formats){
        this.barcodeReader = new window.BarcodeDetector({
            formats
        });
    }
    /**
   * Detect barcodes from the provided source.
   *
   * @see https://developer.mozilla.org/docs/Web/API/BarcodeDetector/detect
   * @param {HTMLImageElement|HTMLVideoElement|ImageBitmap} source - Image or video element or ImageBitmap
   * @returns {Promise<BarcodeDetection>} - Barcode detection result
   */ async detect(source) {
        if (!this.barcodeReader) throw new Error('BarcodeReader is not initialized.');
        const results = await this.barcodeReader.detect(source);
        if (Array.isArray(results) && results.length > 0) {
            const firstResult = results[0];
            (0, _logJs.log)({
                rawValue: firstResult.rawValue,
                format: firstResult.format
            });
            return firstResult;
        } else throw new Error('Could not detect barcode from provided source.');
    }
}

},{"../utils/log.js":"dMd8G","bfcca166d6641c34":"drQmF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"drQmF":[function(require,module,exports,__globalThis) {
module.exports = require("c465430d00c1ff60")(require("7b70828f471596b7").getBundleURL('g05j8') + "es.de9d79c9.js").catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('jZ4Zq'));

},{"c465430d00c1ff60":"61B45","7b70828f471596b7":"lgJ39","jZ4Zq":"jZ4Zq"}],"61B45":[function(require,module,exports,__globalThis) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName('script');
        if ([].concat(existingScripts).some(function(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement('link');
        preloadLink.href = bundle;
        preloadLink.rel = 'preload';
        preloadLink.as = 'script';
        document.head.appendChild(preloadLink);
        var script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName('head')[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}],"j49pS":[function(require,module,exports,__globalThis) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case 'preload':
            return cachedPreloads;
        case 'prefetch':
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"aQSuU":[function(require,module,exports,__globalThis) {
/**
 * Toggles the torch button status.
 * The torch button has two icons, one for on and one for off.
 * This function toggles the visibility of the icons based on the torch state and updates the button title.
 *
 * @param {HTMLButtonElement} buttonEl - The torch button element.
 * @param {boolean} isTorchOn - The torch state.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toggleTorchButtonStatus", ()=>toggleTorchButtonStatus);
function toggleTorchButtonStatus(options = {}) {
    const defaults = {
        el: document.getElementById('torchButton'),
        isTorchOn: false
    };
    const { el, isTorchOn } = {
        ...defaults,
        ...options
    };
    const iconPaths = el.querySelectorAll('svg path');
    if (iconPaths.length !== 2) return;
    iconPaths[0].style.display = isTorchOn ? 'none' : 'block';
    iconPaths[1].style.display = isTorchOn ? 'block' : 'none';
    el.setAttribute('aria-label', `Turn ${isTorchOn ? 'off' : 'on'} flash`);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"du64y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VideoCapture", ()=>VideoCapture);
var _clampJs = require("../utils/clamp.js");
const COMPONENT_NAME = 'video-capture';
const styles = /* css */ `
  :host { display: block; box-sizing: border-box; }
  :host *, :host *::before, :host *::after { box-sizing: inherit;}
  :host([hidden]), [hidden], ::slotted([hidden]) { display: none; }
  video { display: block; }
  #output:empty { display: none; }
`;
const template = document.createElement('template');
template.innerHTML = /* html */ `
  <style>${styles}</style>
  <video part="video" playsinline></video>
  <div part="actions-container"><slot name="actions"></slot></div>
  <slot></slot>
`;
class VideoCapture extends HTMLElement {
    #supportedConstraints = {};
    #stream = null;
    #videoElement = null;
    constructor(){
        super();
        this.#supportedConstraints = this.getSupportedConstraints();
        if (!this.shadowRoot) {
            const shadowRoot = this.attachShadow({
                mode: 'open'
            });
            shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }
    static get observedAttributes() {
        return [
            'no-image',
            'pan',
            'tilt',
            'zoom',
            'torch'
        ];
    }
    /**
   * Lifecycle method that is called when attributes are changed, added, removed, or replaced.
   *
   * @param {string} name - The name of the attribute.
   * @param {string} oldValue - The old value of the attribute.
   * @param {string} newValue - The new value of the attribute.
   */ attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        const trackCapabilities = this.getTrackCapabilities();
        if (name === 'zoom' && oldValue !== newValue && 'zoom' in this.#supportedConstraints) {
            const zoomInAllowedRange = 'zoom' in trackCapabilities && trackCapabilities.zoom?.min && trackCapabilities.zoom?.max ? this.zoom >= trackCapabilities.zoom.min && this.zoom <= trackCapabilities.zoom.max : false;
            if (typeof this.zoom === 'number' && zoomInAllowedRange) this.#applyConstraint('zoom', this.zoom);
        }
        if (name === 'torch' && oldValue !== newValue && 'torch' in this.#supportedConstraints) this.#applyConstraint('torch', this.torch);
    }
    /**
   * Lifecycle method that is called when the element is added to the DOM.
   */ async connectedCallback() {
        this.#upgradeProperty('autoPlay');
        this.#upgradeProperty('facingMode');
        this.#upgradeProperty('zoom');
        this.#upgradeProperty('torch');
        this.#videoElement = this.shadowRoot?.querySelector('video') || null;
        this.#videoElement?.addEventListener('loadedmetadata', this.#onVideoLoadedMetaData);
        if (!VideoCapture.isSupported()) return this.dispatchEvent(new CustomEvent(`${COMPONENT_NAME}:error`, {
            bubbles: true,
            composed: true,
            detail: {
                error: {
                    name: 'NotSupportedError',
                    message: 'Not supported'
                }
            }
        }));
        if (this.autoPlay) this.startVideoStream();
    }
    /**
   * Lifecycle method that is called when the element is removed from the DOM.
   */ disconnectedCallback() {
        this.stopVideoStream();
        this.#videoElement?.removeEventListener('loadedmetadata', this.#onVideoLoadedMetaData);
    }
    get autoPlay() {
        return this.hasAttribute('auto-play');
    }
    set autoPlay(value) {
        this.toggleAttribute('auto-play', !!value);
    }
    get facingMode() {
        const value = this.getAttribute('facing-mode');
        if (value !== 'user') return 'environment';
        return value;
    }
    set facingMode(value) {
        this.setAttribute('facing-mode', value);
    }
    get zoom() {
        return Number(this.getAttribute('zoom')) || 1;
    }
    set zoom(value) {
        this.setAttribute('zoom', value != null ? value.toString() : value);
    }
    get torch() {
        return this.hasAttribute('torch');
    }
    set torch(value) {
        this.toggleAttribute('torch', !!value);
    }
    get loading() {
        return this.hasAttribute('loading');
    }
    /**
   * Handles the loadedmetadata event of the video element.
   *
   * @param {Event} evt - The event object.
   */ #onVideoLoadedMetaData = (evt)=>{
        const video = evt.target;
        video.play().then(()=>{
            this.dispatchEvent(new CustomEvent(`${COMPONENT_NAME}:video-play`, {
                bubbles: true,
                composed: true,
                detail: {
                    video
                }
            }));
        }).catch((error)=>{
            this.dispatchEvent(new CustomEvent(`${COMPONENT_NAME}:error`, {
                bubbles: true,
                composed: true,
                detail: {
                    error
                }
            }));
        }).finally(()=>{
            this.removeAttribute('loading');
        });
    };
    /**
   * Applies a constraint to the video track.
   *
   * @param {string} constraint - The name of the constraint.
   * @param {any} value - The value of the constraint.
   */ #applyConstraint(constraint, value) {
        if (!this.#stream) return;
        const [track] = this.#stream.getVideoTracks();
        const trackCapabilities = this.getTrackCapabilities();
        const trackSettings = this.getTrackSettings();
        const constraintValue = constraint === 'pan' || constraint === 'tilt' || constraint === 'zoom' ? (0, _clampJs.clamp)(Number(value), trackCapabilities[constraint]?.min || 1, trackCapabilities[constraint]?.max || 1) : value;
        if (constraint in trackSettings) track.applyConstraints({
            advanced: [
                {
                    [constraint]: constraintValue
                }
            ]
        }).catch(()=>{
        // Fail silently...
        });
    }
    /**
   * This is to safe guard against cases where, for instance, a framework may have added the element to the page and
   * set a value on one of its properties, but lazy loaded its definition. Without this guard, the upgraded element would
   * miss that property and the instance property would prevent the class property setter from ever being called.
   *
   * https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
   *
   * @param {string} prop - The property to upgrade.
   */ #upgradeProperty(prop) {
        if (Object.prototype.hasOwnProperty.call(this, prop)) {
            const value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }
    /**
   * Starts the video stream.
   *
   * @param {string} [videoInputId] - The video input device ID.
   * @returns Promise<void>
   */ async startVideoStream(videoInputId) {
        if (!VideoCapture.isSupported() || this.#stream) return;
        this.setAttribute('loading', '');
        const constraints = {
            video: {
                facingMode: {
                    ideal: this.facingMode
                },
                pan: true,
                tilt: true,
                zoom: true,
                torch: this.torch
            },
            audio: false
        };
        if (typeof videoInputId === 'string' && videoInputId.trim().length > 0) constraints.video.deviceId = {
            exact: videoInputId
        };
        if (typeof this.cameraResolution === 'string' && this.cameraResolution.trim().length > 0) {
            const [width = 0, height = 0] = this.cameraResolution.split('x').map((x)=>Number(x));
            if (width > 0 && height > 0) {
                constraints.video.width = width;
                constraints.video.height = height;
            }
        }
        try {
            this.#stream = await navigator.mediaDevices.getUserMedia(constraints);
            if (this.#videoElement) this.#videoElement.srcObject = this.#stream;
            this.#applyConstraint('pan', this.pan);
            this.#applyConstraint('tilt', this.tilt);
            this.#applyConstraint('zoom', this.zoom);
        } catch (error) {
            this.dispatchEvent(new CustomEvent(`${COMPONENT_NAME}:error`, {
                bubbles: true,
                composed: true,
                detail: {
                    error
                }
            }));
        } finally{
            this.removeAttribute('loading');
        }
    }
    /**
   * Restarts the video stream.
   *
   * @param {string} [videoInputId] - The video input device ID.
   */ restartVideoStream(videoInputId) {
        if (this.#stream && this.#videoElement) this.stopVideoStream();
        this.startVideoStream(videoInputId);
    }
    /**
   * Stops the video stream.
   */ stopVideoStream() {
        if (!this.#videoElement || !this.#stream) return;
        const [track] = this.#stream.getVideoTracks();
        track?.stop();
        this.#videoElement.srcObject = null;
        this.#stream = null;
    }
    /**
   * Returns an object based on the `MediaTrackSupportedConstraints` dictionary,
   * whose member fields each specify one ofthe constrainable properties the user agent understands.
   *
   * @see https://developer.mozilla.org/docs/Web/API/MediaDevices/getSupportedConstraints
   * @returns {MediaTrackSupportedConstraints | {}}
   */ getSupportedConstraints() {
        if (!VideoCapture.isSupported()) return {};
        return navigator.mediaDevices.getSupportedConstraints() || {};
    }
    /**
   * Returns a `MediaTrackCapabilities` object which specifies the values or range of values
   * which each constrainable property, based upon the platform and user agent.
   *
   * @see https://developer.mozilla.org/docs/Web/API/MediaStreamTrack/getCapabilities
   * @returns {MediaTrackCapabilities | {}}
   */ getTrackCapabilities() {
        if (!this.#stream) return {};
        const [track] = this.#stream.getVideoTracks();
        if (track && typeof track.getCapabilities === 'function') return track.getCapabilities() || {};
        return {};
    }
    /**
   * Returns a `MediaTrackSettings` object containing the current values of each of
   * the constrainable properties for the current MediaStreamTrack.
   *
   * @see https://developer.mozilla.org/docs/Web/API/MediaStreamTrack/getSettings
   * @returns {MediaTrackSettings | {}}
   */ getTrackSettings() {
        if (!this.#stream) return {};
        const [track] = this.#stream.getVideoTracks();
        if (track && typeof track.getSettings === 'function') return track.getSettings() || {};
        return {};
    }
    /**
   * Returns the available video input devices.
   *
   * @returns {Promise<MediaDeviceInfo[]>}
   */ static async getVideoInputDevices() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return [];
        const devices = await navigator.mediaDevices.enumerateDevices() || [];
        return devices.filter((device)=>device.kind === 'videoinput' && !!device.deviceId);
    }
    /**
   * Checks if the `MediaDevices.getUserMedia()` method is supported.
   *
   * @returns {boolean}
   */ static isSupported() {
        return Boolean(navigator.mediaDevices?.getUserMedia);
    }
    /**
   * Defines a custom element with the given name.
   * The name must contain a dash (-).
   *
   * @param {string} [elementName='video-capture'] - The name of the custom element.
   */ static defineCustomElement(elementName = COMPONENT_NAME) {
        if (typeof window !== 'undefined' && !window.customElements.get(elementName)) window.customElements.define(elementName, VideoCapture);
    }
}

},{"../utils/clamp.js":"gRkOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gRkOT":[function(require,module,exports,__globalThis) {
/**
 * Clamps number within the inclusive `min` and `max` bounds,
 * making sure it does not go beyond them on either side.
 * If `min` is greater than `max` the parameters are swapped to support inverted ranges.
 *
 * @param {number} value - The number to clamp.
 * @param {number} lower - The lower bound.
 * @param {number} upper - The upper bound.
 * @throws {TypeError} - If one or more of the arguments passed is not a number.
 * @returns {number} - The clamped number.
 * @example
 *
 * clamp(10, -5, 5);
 * // => 5
 *
 * clamp(-10, -5, 5);
 * // => -5
 *
 * clamp(-15, 0, 100);
 * // => 0
 *
 * clamp(120, 0, 100);
 * // => 100
 *
 * clamp(-5, NaN, 5); // If any of lower or upper bound are `NaN`, they will be converted to `0`.
 * // => 0
 *
 * clamp(120, 100, 0); // The order of lower and upper bounds is reversed (100 > 0)
 * // => 100
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp);
function clamp(value, lower, upper) {
    if (Number.isNaN(lower)) lower = 0;
    if (Number.isNaN(upper)) upper = 0;
    return Math.min(Math.max(value, Math.min(lower, upper)), Math.max(lower, upper));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1BWwM":[function(require,module,exports,__globalThis) {
var _clipboardCopyJs = require("@georapbox/clipboard-copy-element/dist/clipboard-copy.js");
/**
 * Extends the `ClipboardCopy` element to override the default `copy` and `success` slots,
 * in order to avoid repetition of the same markup throughout the application.
 * It also adds aditional properties and attributes, specific to the application.
 *
 * @class CustomClipboardCopy
 * @extends ClipboardCopy
 */ class CustomClipboardCopy extends (0, _clipboardCopyJs.ClipboardCopy) {
    constructor(){
        super();
        const copySlot = this.shadowRoot.querySelector('slot[name="copy"]');
        const successSlot = this.shadowRoot.querySelector('slot[name="success"]');
        const errorSlot = this.shadowRoot.querySelector('slot[name="error"]');
        copySlot.innerHTML = /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>
      <span class="text">Write value to NFC tag</span>
    `;
        successSlot.innerHTML = /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>
      <span class="text">Copied!</span>
    `;
        errorSlot.innerHTML = /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path fill-rule="evenodd" d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708"/>
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
      </svg>
      <span class="text">Error</span>
    `;
    }
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            'only-icon'
        ];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        if (name === 'only-icon' && oldValue !== newValue) {
            const copySlot = this.shadowRoot.querySelector('slot[name="copy"]');
            const successSlot = this.shadowRoot.querySelector('slot[name="success"]');
            const errorSlot = this.shadowRoot.querySelector('slot[name="error"]');
            const copyText = copySlot.querySelector('.text');
            const successText = successSlot.querySelector('.text');
            const errorText = errorSlot.querySelector('.text');
            copyText?.toggleAttribute('hidden', this.onlyIcon);
            successText?.toggleAttribute('hidden', this.onlyIcon);
            errorText?.toggleAttribute('hidden', this.onlyIcon);
        }
    }
    get onlyIcon() {
        return this.hasAttribute('only-icon');
    }
    set onlyIcon(value) {
        if (value) this.setAttribute('only-icon', '');
        else this.removeAttribute('only-icon');
    }
    connectedCallback() {
        super.connectedCallback();
        this.#upgradeProperty('onlyIcon');
        if (!this.hasAttribute('feedback-duration')) this.setAttribute('feedback-duration', '1500');
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    /**
   * This is to safe guard against cases where, for instance, a framework may have added the element to the page and
   * set a value on one of its properties, but lazy loaded its definition. Without this guard, the upgraded element would
   * miss that property and the instance property would prevent the class property setter from ever being called.
   *
   * https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
   *
   * @param {string} prop - The property to upgrade.
   */ #upgradeProperty(prop) {
        if (Object.prototype.hasOwnProperty.call(this, prop)) {
            const value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }
    static defineCustomElement(elementName = 'custom-clipboard-copy') {
        if (typeof window !== 'undefined' && !window.customElements.get(elementName)) window.customElements.define(elementName, CustomClipboardCopy);
    }
}
CustomClipboardCopy.defineCustomElement();

},{"@georapbox/clipboard-copy-element/dist/clipboard-copy.js":"gMycM"}],"gMycM":[function(require,module,exports,__globalThis) {
/*!
 * @georapbox/clipboard-copy-element
 * A custom element that implements the Clipboard API to copy text content from elements or input values to the clipboard.
 *
 * @version 3.0.2
 * @homepage https://github.com/georapbox/clipboard-copy-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ClipboardCopy", ()=>r);
var i = "clipboard-copy";
var o = "success", n = "error", h = document.createElement("template"), a = `
  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }
`;
h.innerHTML = `
  <style>${a}</style>
  <button type="button" part="button">
    <slot name="copy">Copy</slot>
    <slot name="success" hidden>Copied!</slot>
    <slot name="error" hidden>Error</slot>
  </button>
`;
var r = class d extends HTMLElement {
    #e = void 0;
    #t = null;
    #s = null;
    #i = null;
    #o = null;
    constructor(){
        super(), this.shadowRoot || this.attachShadow({
            mode: "open"
        }).appendChild(h.content.cloneNode(!0)), this.shadowRoot && (this.#t = this.shadowRoot.querySelector("button"), this.#s = this.shadowRoot.querySelector('slot[name="copy"]'), this.#i = this.shadowRoot.querySelector('slot[name="success"]'), this.#o = this.shadowRoot.querySelector('slot[name="error"]'));
    }
    static get observedAttributes() {
        return [
            "disabled"
        ];
    }
    attributeChangedCallback(t, s, e) {
        t === "disabled" && s !== e && this.#t && (this.#t.disabled = this.disabled, this.#t.setAttribute("aria-disabled", this.disabled.toString()), this.#t.part.contains("button") && this.#t.part.toggle("button--disabled", this.disabled));
    }
    connectedCallback() {
        this.#n("value"), this.#n("from"), this.#n("disabled"), this.#n("feedbackDuration"), this.#t?.addEventListener("click", this.#r);
    }
    disconnectedCallback() {
        this.#t?.removeEventListener("click", this.#r), this.#a();
    }
    get value() {
        return this.getAttribute("value") || "";
    }
    set value(t) {
        this.setAttribute("value", t != null ? t.toString() : t);
    }
    get from() {
        return this.getAttribute("from") || "";
    }
    set from(t) {
        this.setAttribute("from", t != null ? t.toString() : t);
    }
    get disabled() {
        return this.hasAttribute("disabled");
    }
    set disabled(t) {
        this.toggleAttribute("disabled", !!t);
    }
    get feedbackDuration() {
        return Number(this.getAttribute("feedback-duration")) || 1e3;
    }
    set feedbackDuration(t) {
        this.setAttribute("feedback-duration", t != null ? t.toString() : t);
    }
    async #d() {
        if (!(!this.value && !this.from)) try {
            let t = "";
            if (this.value) t = this.value;
            else if (this.from) {
                let s = "getRootNode" in Element.prototype ? this.#t?.getRootNode({
                    composed: !0
                }) : this.#t?.ownerDocument;
                if (!s || !(s instanceof Document || s instanceof ShadowRoot)) return;
                let e = s.querySelector(this.from);
                if (!e) return;
                e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement ? t = e.value : e instanceof HTMLAnchorElement && e.hasAttribute("href") ? t = e.href : t = e.textContent || "";
            }
            await navigator.clipboard.writeText(t), this.#h(o), this.dispatchEvent(new CustomEvent(`${i}-success`, {
                bubbles: !0,
                composed: !0,
                detail: {
                    value: t
                }
            }));
        } catch (t) {
            this.#h(n), this.dispatchEvent(new CustomEvent(`${i}-error`, {
                bubbles: !0,
                composed: !0,
                detail: {
                    error: t
                }
            }));
        }
    }
    #r = (t)=>{
        t.preventDefault(), !(this.disabled || this.#e) && this.#d();
    };
    #h(t) {
        this.#s && (this.#s.hidden = !0), this.#i && (this.#i.hidden = t !== o), this.#o && (this.#o.hidden = t !== n), this.#t?.part.remove("button--success"), this.#t?.part.remove("button--error"), this.#t?.part.add(`button--${t}`), this.#e && clearTimeout(this.#e), this.#e = setTimeout(()=>{
            this.#s && (this.#s.hidden = !1), this.#i && (this.#i.hidden = !0), this.#o && (this.#o.hidden = !0), this.#t?.part.remove(`button--${t}`), this.#e = void 0;
        }, this.feedbackDuration);
    }
    #a() {
        this.#e && clearTimeout(this.#e), this.#e = void 0, this.#s && (this.#s.hidden = !1), this.#i && (this.#i.hidden = !0), this.#o && (this.#o.hidden = !0), this.#t?.part.remove("button--success"), this.#t?.part.remove("button--error");
    }
    #n(t) {
        let s = this;
        if (Object.prototype.hasOwnProperty.call(s, t)) {
            let e = s[t];
            delete s[t], s[t] = e;
        }
    }
    static defineCustomElement(t = i) {
        typeof window < "u" && !window.customElements.get(t) && window.customElements.define(t, d);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bNF1U":[function(require,module,exports,__globalThis) {
var _isWebShareSupportedJs = require("@georapbox/web-share-element/dist/is-web-share-supported.js");
var _storageJs = require("../services/storage.js");
var _constantsJs = require("../constants.js");
const styles = /* css */ `
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }

  .result {
    position: relative;
    width: 100%;
    border: 1px solid var(--focus);
    border-radius: 6px;
    margin: 1.5rem 0 0 0;
    padding: 1rem;
    background-color: var(--background-alt);
    text-align: center;
  }

  .result__item {
    word-wrap: break-word;
    word-break: break-word;
  }

  a.result__item {
    color: var(--links);
  }

  .result__item--no-barcode {
    color: var(--error-color);
  }

  .result__actions {
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  .result web-share button,
  .result custom-clipboard-copy::part(button) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    margin: 0.75rem 0 0 0;
    padding: 0.25rem;
    background-color: transparent;
    border: 0;
    border-radius: var(--border-radius);
    color: inherit;
    line-height: 1;
    font-family: inherit;
    font-size: 0.9rem;
    cursor: pointer;
  }
`;
const template = document.createElement('template');
template.innerHTML = /* html */ `
  <style>${styles}</style>

  <div class="result">
    <div class="result__actions">
      <custom-clipboard-copy></custom-clipboard-copy>

      <web-share>
        <button slot="button" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
          </svg>
          Share
        </button>
      </web-share>
    </div>
  </div>
`;
class BSResult extends HTMLElement {
    constructor(){
        super();
        if (!this.shadowRoot) {
            const shadowRoot = this.attachShadow({
                mode: 'open'
            });
            shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }
    get value() {
        return this.getAttribute('value');
    }
    set value(value) {
        this.setAttribute('value', value);
    }
    static get observedAttributes() {
        return [
            'value'
        ];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'value' && oldValue !== newValue) this.#handleValueChange(this.value);
    }
    connectedCallback() {
        this.#upgradeProperty('value');
        if (!(0, _isWebShareSupportedJs.isWebShareSupported)()) {
            const webShareEl = this.shadowRoot.querySelector('web-share');
            if (webShareEl) webShareEl.hidden = true;
        }
    }
    async #handleValueChange(value) {
        const baseEl = this.shadowRoot.querySelector('.result');
        const resultActionsEl = baseEl?.querySelector('.result__actions');
        const oldResultItem = baseEl?.querySelector('.result__item');
        let resultItem;
        if (oldResultItem) oldResultItem.remove();
        try {
            const [, settings] = await (0, _storageJs.getSettings)();
            new URL(value);
            resultItem = document.createElement('a');
            resultItem.href = value;
            window.requestAnimationFrame(()=>resultItem.focus());
            if (!settings?.openWebPageSameTab) {
                resultItem.setAttribute('target', '_blank');
                resultItem.setAttribute('rel', 'noreferrer noopener');
            }
            if (settings?.openWebPage) resultItem.click();
        } catch  {
            resultItem = document.createElement('span');
        }
        resultItem.className = 'result__item';
        resultItem.classList.toggle('result__item--no-barcode', value === (0, _constantsJs.NO_BARCODE_DETECTED));
        resultItem.textContent = value;
        baseEl?.insertBefore(resultItem, resultActionsEl);
        const isValidValue = value !== (0, _constantsJs.NO_BARCODE_DETECTED);
        const clipboarCopyEl = baseEl?.querySelector('custom-clipboard-copy');
        const webShareEl = baseEl?.querySelector('web-share');
        if (clipboarCopyEl && isValidValue) {
            clipboarCopyEl.setAttribute('value', value);
            const ndef = new NDEFReader();
            ndef.write(value).then(()=>{
                console.log("Message written.");
            }).catch((error)=>{
                console.log(`Write failed :-( try again: ${error}.`);
            });
            clipboarCopyEl.hidden = false;
        } else {
            clipboarCopyEl.hidden = true;
            clipboarCopyEl.removeAttribute('value');
        }
        if (webShareEl && (0, _isWebShareSupportedJs.isWebShareSupported)() && isValidValue) {
            webShareEl.setAttribute('share-text', value);
            webShareEl.hidden = false;
        } else {
            webShareEl.hidden = true;
            webShareEl.removeAttribute('share-text');
        }
    }
    /**
   * This is to safe guard against cases where, for instance, a framework may have added the element to the page and
   * set a value on one of its properties, but lazy loaded its definition. Without this guard, the upgraded element would
   * miss that property and the instance property would prevent the class property setter from ever being called.
   *
   * https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
   *
   * @param {string} prop - The property to upgrade.
   */ #upgradeProperty(prop) {
        const instance = this;
        if (Object.prototype.hasOwnProperty.call(instance, prop)) {
            const value = instance[prop];
            delete instance[prop];
            instance[prop] = value;
        }
    }
    static defineCustomElement(elementName = 'bs-result') {
        if (typeof window !== 'undefined' && !window.customElements.get(elementName)) window.customElements.define(elementName, BSResult);
    }
}
BSResult.defineCustomElement();

},{"@georapbox/web-share-element/dist/is-web-share-supported.js":"dDLvg","../services/storage.js":"sgsxU","../constants.js":"itKcQ"}],"dDLvg":[function(require,module,exports,__globalThis) {
/*!
 * @georapbox/web-share-element
 * A custom element that implements the Web Share API to share user-defined data.
 *
 * @version 3.1.1
 * @homepage https://github.com/georapbox/web-share-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isWebShareSupported", ()=>r);
function r(a) {
    return a !== null && typeof a == "object" ? "share" in navigator && "canShare" in navigator && navigator.canShare(a) : "share" in navigator;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9CYWG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BSSettings", ()=>BSSettings);
var _storageJs = require("../services/storage.js");
class BSSettings extends HTMLElement {
    #formatsWrapperEl = null;
    #formEl = null;
    #supportedFormats = [];
    #settings;
    constructor(){
        super();
    }
    get supportedFormats() {
        return this.#supportedFormats;
    }
    set supportedFormats(value) {
        this.#supportedFormats = value;
        this.#renderFormats();
    }
    async connectedCallback() {
        this.#upgradeProperty('supportedFormats');
        this.#formatsWrapperEl = this.querySelector('#formatsList');
        this.#formEl = this.querySelector('form');
        const [, settings] = await (0, _storageJs.getSettings)();
        this.#settings = settings ?? {};
        this.#formEl?.querySelectorAll(`[name="general-settings"]`).forEach((input)=>{
            input.checked = this.#settings[input.value];
        });
    }
    #renderFormats() {
        if (!this.#formatsWrapperEl) return;
        const formatsFromStorage = this.#settings?.formats;
        this.#formatsWrapperEl.replaceChildren();
        this.supportedFormats.forEach((format)=>{
            const li = document.createElement('li');
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.name = 'formats-settings';
            input.value = format;
            input.checked = formatsFromStorage != null ? formatsFromStorage.includes(format) : true;
            label.appendChild(input);
            label.appendChild(document.createTextNode(format));
            li.appendChild(label);
            this.#formatsWrapperEl.appendChild(li);
        });
    }
    /**
   * This is to safe guard against cases where, for instance, a framework may have added the element to the page and
   * set a value on one of its properties, but lazy loaded its definition. Without this guard, the upgraded element would
   * miss that property and the instance property would prevent the class property setter from ever being called.
   *
   * https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
   *
   * @param {string} prop - The property to upgrade.
   */ #upgradeProperty(prop) {
        const instance = this;
        if (Object.prototype.hasOwnProperty.call(instance, prop)) {
            const value = instance[prop];
            delete instance[prop];
            instance[prop] = value;
        }
    }
    static defineCustomElement(elementName = 'bs-settings') {
        if (typeof window !== 'undefined' && !window.customElements.get(elementName)) window.customElements.define(elementName, BSSettings);
    }
}
BSSettings.defineCustomElement();

},{"../services/storage.js":"sgsxU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5npAu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BSHistory", ()=>BSHistory);
var _uuidJs = require("../utils/uuid.js");
var _storageJs = require("../services/storage.js");
const styles = /* css */ `
  :host {
    --empty-history-button-color: #ffffff;

    display: block;
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --empty-history-button-color: #000000;
    }
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }

  ul {
    max-width: 36.25rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul li {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 0.75rem;
    border-bottom: 1px solid var(--border);
    color: var(--text-main);
  }

  ul li:last-of-type {
    border-bottom: none;
  }

  ul li a {
    color: var(--links);
  }

  ul li a,
  ul li span {
    word-break: break-all;
  }

  @supports (-webkit-line-clamp: 1) and (display: -webkit-box) and (-webkit-box-orient: vertical) {
    ul li a,
    ul li span {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    }
  }

  .actions {
    display: flex;
    gap: 0.25rem;
  }

  .actions button,
  .actions custom-clipboard-copy::part(button) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.5rem;
    margin: 0;
    border: 0;
    border-radius: var(--border-radius);
    background-color: transparent !important;
    line-height: 1;
    font-size: 1rem;
    color: var(--text-main);
    cursor: pointer;
  }

  .actions custom-clipboard-copy::part(button--success) {
    color: var(--success-color);
  }

  .actions custom-clipboard-copy::part(button--error) {
    color: var(--error-color);
  }

  .actions .delete-action {
    color: var(--error-color);
    margin-right: -0.5rem;
  }

  footer {
    position: sticky;
    bottom: 0;
    padding: 0.75rem;
    background-color: var(--dialog-background);
  }

  footer > button {
    width: 100%;
    padding: 0.625rem;
    border: 0;
    border-radius: var(--border-radius);
    background-color: var(--error-color);
    color: var(--empty-history-button-color);
    font-size: 1rem;
    cursor: pointer;
  }

  ul:empty + footer > button {
    display: none;
  }

  ul:not(:empty) + footer > div {
    display: none;
  }
`;
const template = document.createElement('template');
template.innerHTML = /* html */ `
  <style>${styles}</style>
  <ul id="historyList"></ul>
  <footer>
    <div>There are no saved items in history.</div>
    <button type="button" id="emptyHistoryBtn">Empty history</button>
  </footer>
`;
class BSHistory extends HTMLElement {
    #historyListEl = null;
    #emptyHistoryBtn = null;
    constructor(){
        super();
        if (!this.shadowRoot) {
            const shadowRoot = this.attachShadow({
                mode: 'open'
            });
            shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }
    async connectedCallback() {
        this.#historyListEl = this.shadowRoot?.getElementById('historyList');
        this.#emptyHistoryBtn = this.shadowRoot?.getElementById('emptyHistoryBtn');
        this.#renderHistoryList((await (0, _storageJs.getHistory)())[1] || []);
        this.#historyListEl?.addEventListener('click', this.#handleHistoryListClick);
        this.#emptyHistoryBtn?.addEventListener('click', this.#handleEmptyHistoryClick);
    }
    disconnectedCallback() {
        this.#historyListEl?.removeEventListener('click', this.#handleHistoryListClick);
        this.#emptyHistoryBtn?.removeEventListener('click', this.#handleEmptyHistoryClick);
    }
    /**
   * Adds an item to the history.
   * If the item is already in history, it will not be added.
   *
   * @param {string} item - Item to add to history
   */ async add(item) {
        const [, settings] = await (0, _storageJs.getSettings)();
        if (!item || !settings?.addToHistory) return;
        const [getHistoryError, history = []] = await (0, _storageJs.getHistory)();
        if (!getHistoryError && Array.isArray(history) && !history.find((h)=>h === item)) {
            const data = [
                ...history,
                item
            ];
            const [setHistoryError] = await (0, _storageJs.setHistory)(data);
            if (!setHistoryError) this.#historyListEl.appendChild(this.#createHistoryItemElement(item));
        }
    }
    /**
   * Removes an item from the history.
   *
   * @param {string} item - Item to remove from history
   */ async remove(item) {
        if (!item) return;
        const [getHistoryError, history = []] = await (0, _storageJs.getHistory)();
        if (!getHistoryError && Array.isArray(history)) {
            const data = history.filter((el)=>el !== item);
            const [setHistoryError] = await (0, _storageJs.setHistory)(data);
            if (!setHistoryError) {
                const historyItem = this.#historyListEl.querySelector(`li[data-value="${item}"]`);
                if (historyItem) historyItem.remove();
            }
        }
    }
    /**
   * Removes all items from the history.
   */ async empty() {
        const [setHistoryError] = await (0, _storageJs.setHistory)([]);
        if (!setHistoryError) this.#historyListEl.replaceChildren();
    }
    /**
   * Renders the history list. If there are no items in history, it will show a message.
   *
   * @param {Array<string>} data - History data as an array of strings
   */ #renderHistoryList(data) {
        if (!this.#historyListEl) return;
        this.#historyListEl.replaceChildren();
        const fragment = document.createDocumentFragment();
        data.forEach((item)=>{
            fragment.appendChild(this.#createHistoryItemElement(item));
        });
        this.#historyListEl.appendChild(fragment);
    }
    /**
   * Creates a history item element.
   * If the item is a URL, it will be an anchor element, otherwise a span element.
   *
   * @param {string} item - The history item to create an element for
   * @returns {HTMLLIElement} The history item element
   */ #createHistoryItemElement(item) {
        const itemId = (0, _uuidJs.uuid)();
        const li = document.createElement('li');
        li.setAttribute('data-value', item);
        let historyItem;
        try {
            new URL(item);
            historyItem = document.createElement('a');
            historyItem.href = item;
            historyItem.setAttribute('target', '_blank');
            historyItem.setAttribute('rel', 'noreferrer noopener');
        } catch  {
            historyItem = document.createElement('span');
        }
        historyItem.textContent = item;
        historyItem.setAttribute('id', `historyItem-${itemId}`);
        const actionsEl = document.createElement('div');
        actionsEl.className = 'actions';
        const copyBtn = document.createElement('custom-clipboard-copy');
        copyBtn.setAttribute('id', `copyHistoryItem-${itemId}`);
        copyBtn.setAttribute('aria-label', 'Copy to clipboard');
        copyBtn.setAttribute('aria-labelledby', `copyHistoryItem-${itemId} historyItem-${itemId}`);
        copyBtn.setAttribute('only-icon', '');
        copyBtn.setAttribute('value', item);
        actionsEl.appendChild(copyBtn);
        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'delete-action';
        removeBtn.setAttribute('data-action', 'delete');
        removeBtn.setAttribute('id', `removeHistoryItem-${itemId}`);
        removeBtn.setAttribute('aria-label', 'Remove from history');
        removeBtn.setAttribute('aria-labelledby', `removeHistoryItem-${itemId} historyItem-${itemId}`);
        removeBtn.innerHTML = /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
      </svg>
    `;
        actionsEl.appendChild(removeBtn);
        li.appendChild(historyItem);
        li.appendChild(actionsEl);
        return li;
    }
    /**
   * Handles the click event on the history list.
   *
   * @param {Event} evt - The event object
   */ #handleHistoryListClick = (evt)=>{
        const target = evt.target;
        if (target.closest('[data-action="delete"]')) {
            const value = target.closest('li').dataset.value;
            if (window.confirm(`Delete history item ${value}?`)) this.remove(value);
        }
    };
    /**
   * Handles the click event on the empty history button.
   */ #handleEmptyHistoryClick = ()=>{
        if (window.confirm('Empty history? This action cannot be undone.')) this.empty();
    };
    static defineCustomElement(elementName = 'bs-history') {
        if (typeof window !== 'undefined' && !window.customElements.get(elementName)) window.customElements.define(elementName, BSHistory);
    }
}
BSHistory.defineCustomElement();

},{"../utils/uuid.js":"bV4AS","../services/storage.js":"sgsxU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bV4AS":[function(require,module,exports,__globalThis) {
/**
 * Generates a v4 UUID using a cryptographically secure random number generator if available.
 * Otherwise, it falls back to a pseudo-random number generator.
 *
 * @returns {string} - The unique id.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "uuid", ()=>uuid);
function uuid() {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') return window.crypto.randomUUID();
    // Create a pseudo-UUID by concatenating 5 generated random strings of 6 characters each.
    return Array.from({
        length: 5
    }, ()=>Math.random().toString(36).substring(2, 8)).join('-');
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8G2QE","ebWYT"], "ebWYT", "parcelRequire94c2")

//# sourceMappingURL=index.739bf03c.js.map
