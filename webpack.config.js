const path = require('path');
const WebpackUserscript = require('webpack-userscript');

module.exports = env => {
  return {
    entry: './src/inject.js',
    plugins: [
      new WebpackUserscript({
        headers: {
          'name': 'InjectJS',
          'version': env['NODE_ENV'] === 'development' ? '[version].build[buildNo]' : '[version]',
          'author': '[author]',
          'description': 'InjectJS allows user to inject custom JavaScript libraries and add JavaScript code to any web page.',
          'include': 'http*://*',
          'require': 'https://greasyfork.org/scripts/371339-gm-webextpref/code/GM_webextPref.js?version=623327',
          'grant': [
            'GM_getValue',
            'GM_setValue',
            'GM_deleteValue',
            'GM_registerMenuCommand',
            'GM_addValueChangeListener',
            'unsafeWindow'],
          'run-at': 'document-start',
          'noframes': true,
          'icon64': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlw' +
            'SFlzAAABWAAAAVgB328q4QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAxNSURBVHic7Vt7UFTXHf7OvbsLuu' +
            'wuILu8xAcKKFoJuBAbgpW66m40QWsyydTpVJ086mQ6tjhjJxk7bZw66aTT6jDTToJJa8aMbWcqlWAR4kRRQYkEzSjIwyiKUURAhIWF' +
            'Xe69p39sdt3lnmXv8tB2zDfDoJd7zvmd7/xe53fOJQAonmBwj1uAxw2V5x8JCQl02bJlT4Q21NbWkjt37hDAh4Bly5bRw4cPi49PrE' +
            'eHjRs38iUlJQT4zgS+I0AV/BU57HY76uvryY0bN4jBYMCKFSukqKioyZbtkUARAd3d3aipqeFOnz5NqquryaVLl4goPnQXiYmJXFtb' +
            'mzBlUk4hmAT09PTg+PHjXHV1NTlz5gxpbm4mlAYOEHl5ef+30cOPgK6uLhQWFvIlJSXcyMjImA01Gg3y8vLoli1bpJdeekmaLIFO/6' +
            'GBdw37B6PoORE06yfz2GNQoLu1n3Q19xFHrxOSSKGepkJsuoGa0iMprxnbzfkRsHXrVr6yspLZQqvVIisri8bFxdHBwUGIooiysrJJ' +
            'D5tN/7nFDfe5/J4lZccwCbj8r5vcl/tbuf47DsLqK9ygwdIt88WlW+ZLhGO+4k9Afn4+vXDhAu3q6iLx8fE0MzOTpqenY3h4GI2Nje' +
            'Ts2bPE6XQSACCEoKOjQ4yPjx/vXJlgCUpHTV0SJFS+fZFvPfbNmMs73OdCzb4rfM91O1mzJ4u5WH4EFBYWSoWFhd7h7t+/j8TERLWv' +
            'w/MKRSkqKyu5zZs3T5r6AwBhTIlK/i7mXFFz0Mn7ovnTW9y8H8TR+asTZLKO2Ul0dDSWLl0a0MFVVlay9WoCIIShAT4S3L3US+o//p' +
            'op9/QZYQg3aJj9XvzkOrNNUBZXr14dcIVPnDjBCcLkRj9C5LtTXw24cPAaN1ojNBEqvPjXXOG1KuvI66etIzmvp8lkvnvpPhlxyGUN' +
            'SoDVamVqgFqtRmpqKj158iRxOBzBulEMtg9wiyAJEm5Wd8pkXvyjOVJidgz1tM95I1Uc7f0lkWKgc1jWeVACzGYzNRqNFABMJhPNz8' +
            '+XrFYrnTVrFq2uriarV69WGY1GdVFR0eSk1QwT8OjEgxuDxDUgX8W4JVF+i8RrOOgTpssWztkvD+1BM0GO4/DWW29JZWVl5OzZs9xn' +
            'n30mk9DhcGD79u18eno6tVgsE0qKxnKCfR1sTQs3qGVj8mp5R6Igt+agBNTV1ZGdO3fyQ0NDsr9xnHsQSXJ3vG/fPt5isUzIKbCdoH' +
            't+gkNkOl0qyjlnxn1J/l5QAnbv3s15Jk8IASEEHMf5CUopBaUUVVVVZHh4GOHh4cG6DQi2Brh/s1YVAIYeuAhGlfaYlsRw50Httqmp' +
            'yZv4qFQq8DwvWyXP/wcHB3Hq1KkJhcaxnGB4pIZpXgNdw8r6YexnghIwc+bMgI29nXAPu6moqJiQMxwrD4ieF8EU4nZ9j7zRZGmAxW' +
            'LxNgtEgq/QFRUVE9QA+TOvBhg0iJotJ+H2l92c4PTPVpkawPAVQQmw2WzeVh5nNxrG8Hjkxq/BT9MK8YpuB2ltujpuEsYyAQCYb4mX' +
            'zcI1IKDx3+1+c2FpksQ4AQjqBLOysmh8fDw6Ojr8NGCOLg15cc9hnn4RHIIdrQ8u46ueczh8/UOYqn5PUhemjC8cjpEHAMA8S4JU99' +
            'FV2cJdPHCNW7xxtuRxlGv3ZouCy18rtDHhMpmCEkAIgcVikQ4ePMh5vD0hBE5xCF/11OBw2344hAEAgKeGUFFRQbZt2xasa/Z4QTZD' +
            'sYsjaeyiSNrZ+MCPqb7bg6T+wDUu57UUCQC0JvlkWVDksHzNwKMFHY52XL5/Hg5hAGpOg3n6dNhmv4I3F7+D1G+Wc06nU0nXMgTbDA' +
            'FAzhvyXB8A6opb+P7b7NpAICgiwGq1SjzPA2D7gW0Lf4v8hAKMSE4cvfkJ/nTxV6iurh6XH1CyHU5eESclZM6QrbAwLOL4ry/yoRz2' +
            'KSIgKioK2dnZFGBHgqLGt/Fh87uo6ihDh+MW0iKX4NQ/6njlYjxEMCfofgnI37VE5FRy8b+p6yZf/b1NcShWXBa3Wq1SbW0tD8DrBw' +
            'AgnJ+GZH06knXpmK9fhOgwE9r6m3HpwmWlXftBiQkAQEyqnma/miJ98X6LbLI1exv5ObkmGjlbG1QXFDMVKBxuSvkFnjatRJ+rB/+8' +
            '/hfsOr8ZxVf2oPTCIdLe3h6yGSgxAQ+yX08VY1INAU0hUDtfKCbAbDZTk8nkFshnST5qfhd/a3kPZ+6Wo8PRjmlqLRZH52D93C2o2H' +
            '865KwwQArLJJJXc1izJ5NpCncu9pALH18LOr5iATmO82aFnnDoC1N4InZm7MXOjD8hy/gs7g3dxsnLFUq7f4ggecBoxCwwUPPW+cyo' +
            'cO7PTXzPVfuYWhjS0ZjNZqOHDh1yy+TjBwCgf+Q+Pmj6HfpcPRAEAZRSXD6h40ZGRkS1Wq14jFBMwIOcn6WJ1z7vID3X/CcrOiWc3H' +
            'OJf/FAbsAtekgqarVapdE1AA+GxSH0uXoAPHRkdrsdNTU1IfkBpU7QF7yag+WdTJFlPrfru8n1E3cDzjMkAmJiYrxVYqW7w2PHjoU0' +
            'xng0AADiMqLo916eyzSF6j82chKjGgSM43jct0iqZHd47Nix0DRASR4QALnbF4oRRnkK3Ns+QK5W3hlfWXw0bDabl8pAu0PgoRY0ND' +
            'R4r6MoATsKuH/X7L3Cv59brvb9OVfU5E24NFoVnn5zAVOopk9vTQ4BOTk5dMaMGd8KFnhlPFpAKUVLS4vi/sfSANElwdk/4vczMuS/' +
            '41u0YZakj5dXhNtru8jAvXGUxUeD53msWrUqYDiklEKSJD/tiI6OVj4A42DE84QZIUeNTziChS8kMQ9Xbtd1T5wAQJ4VUkohiiIEQY' +
            'AgCBBF0SvY8uXLaUZGhvLtCWOSnOrbhwztYFnhnLxYphnca+qbHALWr18vecxAkiQIguAlwgOe57Fp0yappKQktDK5JKeA8O5HSh1k' +
            'TJqest7tvTkgezauO0J6vR779+8XN23a5HdeYDKZYDabqVarpe3t7aSzs5N4iFIKZt2Od68TywRYWaIqnIdmugrOAf+TIJddkPUwLg' +
            'IAYMOGDVJraystKysjdrudnDp1CufPn+fKy8sJvlVktVoNu90OnU6nuF9JlGuvJzdgrarEIAwANBEq6hwY8WvAygXGTQAAzJw5k27b' +
            'to3a7Xbs2rVL7XutRq1WIzc3l969e5fodDrFPsBx3yV7xvEcBXx8gS8U5CJemcLlJYoJEeCBTqfDM888Q9va2rBq1SpKCMGCBQvojh' +
            '07Qro8QSUKe6e8pDU92n3mz2l42WxHh0Hv82G5umvjpoVeFFWK0tJSwWAwgFKKpKQkVXl5OSksLJRYKxEIX3/ewbFOcA2z3GcBOpP8' +
            'yM3OqAEO9bow1CvXJGOavHYwaQQYDAYAbtVbu3YtLS4u5urr64nZbPYOWvpmrSpqbgQ1phloZJKWhunV4DUcnP0Cbpy7R+o+bGGW0R' +
            'KXuut/0clyU+ps7CXdLf0kJk3v/VtLOfv6TFJOzNQR4IuCggKpuLiYKy0t5cxms1dHu1r7yI2znSHtDXgNhxSL+26PaZGB6mKnUXvn' +
            'kLcPSaQoea1GlbU5RYxOjqD3Gh5wXx6QnxvEpBqoL0keTMld4ZUrV1K9Xo8jR474TXas1DkQzFtSxenRYQDcUSBzs7z4MdTrQs3eRr' +
            '7s51+ovvighROdctfz/QB7hCkhICwsDGvWrJEaGhpIa2vruI/J5q9MkHJeTfET/Kkfz5VmPW0MickFzydJyT+Me3QEAEBBQQEFgLKy' +
            'Mp+LBMrahunVePaXi8Xn3jPL6n2EI1hXlCMk58crijALXkiSVu1+KuCFzinxAQCwbt06SaPR8KWlpZwnHK78TabQd2uQ2O84iL1zCC' +
            '67O1GRJAr1dBU1puhhWhhJZz9rklRhgY8V1NNVeL4oR2w73SldOdLOtZ+7x/neHdJEqJC4NEbKeHmuNDvPNCbtU0aAwWBAXl4eraqq' +
            'Il1dXTAajUheHksxiR9pzV0eS+cujxUBiK5BAUO9TjItKoxqtMqnNaUfTBQUFEiiKOLo0aNT/mGGRquCYaY2pMkDU0zA+vXrqclkQm' +
            'lp6aTfKJ0sTCkBSUlJ9MCBA8KSJUvGFQIfBabMB3hgs9mozWb7n/0a7Yn/aOo7Ah63AI8b3huWT+qns7Irpk8anngT+C+Zm0S8tmwz' +
            'cwAAAABJRU5ErkJggg=='
        }
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist')
    },
    output: {
      filename: 'inject.user.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
};
