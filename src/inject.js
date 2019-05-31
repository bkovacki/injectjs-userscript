'use strict';

function prefDefault() {
  return {
    injectLib: false,
    injectLibUrls: '',
    injectScript: false,
    injectScriptCode: ''
  };
}

function prefBody() {
  return [
    {
      key: 'injectLib',
      type: 'checkbox',
      label: 'Inject JS Libraries',
      children: [
        {
          key: 'injectLibUrls',
          type: 'textarea',
          label: 'Library URLs'
        }
      ]
    },
    {
      key: 'injectScript',
      type: 'checkbox',
      label: 'Inject Script',
      children: [
        {
          key: 'injectScriptCode',
          type: 'textarea',
          label: 'Script Code'
        }
      ]
    }
  ]
}

function injectScript(code) {
  let script = document.createElement('script');
  script.appendChild(document.createTextNode(code));
  (document.body || document.head || document.documentElement).appendChild(script);
}

function injectScriptUrls(urls) {
  urls.forEach((url) => {
    let script = document.createElement('script');
    script.src = url;
    (document.body || document.head || document.documentElement).appendChild(script);
  });
}

async function startInjectJS(getPref) {
  const pref = await getPref();
  if (pref.getAll().injectLib) {
    injectScriptUrls(pref.getAll().injectLibUrls.split('\n'));
  }
  if (pref.getAll().injectScript) {
    injectScript(pref.getAll().injectScriptCode);
  }
}

startInjectJS(async () => {
  const pref = GM_webextPref({
    default: prefDefault(),
    body: prefBody(),
    getNewScope: () => location.hostname
  });
  await pref.ready();
  await pref.setCurrentScope(location.hostname);
  return pref;
});
