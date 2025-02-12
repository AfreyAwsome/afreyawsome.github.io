/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2b8c675df72a4edacb890c4701441d39"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.2356bf96.js",
    "revision": "30e828c146c3447f6cbf728cdd82e925"
  },
  {
    "url": "assets/js/10.c76b71d0.js",
    "revision": "2d186e0b80e993bf73e697cd6f792bb4"
  },
  {
    "url": "assets/js/11.e8633219.js",
    "revision": "c6b1a8edcabf36b3249cd03c29f993dd"
  },
  {
    "url": "assets/js/12.2547969b.js",
    "revision": "9eadd58d925ae4924dce61e1811b9ae0"
  },
  {
    "url": "assets/js/13.d3e15149.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.4d9f7188.js",
    "revision": "84c18ada04d7f96157697988af640b74"
  },
  {
    "url": "assets/js/15.493e64d8.js",
    "revision": "a9267e8b45fc33171454fc7a2266bae5"
  },
  {
    "url": "assets/js/16.083f9e2b.js",
    "revision": "d033044aaec6b34224e8ed3d4b86549a"
  },
  {
    "url": "assets/js/17.eadbafe9.js",
    "revision": "4f5927e7ad60a5ee25788ca5ed00f220"
  },
  {
    "url": "assets/js/18.1ed22641.js",
    "revision": "0ce5adb05e88c5cc6415e2b04c81844f"
  },
  {
    "url": "assets/js/4.869f9644.js",
    "revision": "6a9061b507f12ee2770b1f19b8e3d4da"
  },
  {
    "url": "assets/js/5.90418627.js",
    "revision": "1689296e32236e06547752a56f9265f6"
  },
  {
    "url": "assets/js/6.4fbfe6b6.js",
    "revision": "4719502381b5c3d6ac6a2e6d590b4322"
  },
  {
    "url": "assets/js/7.ecce5d03.js",
    "revision": "c38484adcb3f89dd39a62f70a7b1ea62"
  },
  {
    "url": "assets/js/8.763ad6a8.js",
    "revision": "09cca6c7b2202fa0a4d063836f72e2dd"
  },
  {
    "url": "assets/js/9.2c732680.js",
    "revision": "05c8a35278c075892025e2714a299d64"
  },
  {
    "url": "assets/js/app.ce204e68.js",
    "revision": "4f8d367d29e721c883a4b78522d8a90f"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.6ecfa24c.js",
    "revision": "0914943e5101085e2068a7393195effe"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "082eb466d6a0fcc5e853d8a3ca62d525"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c23e084fcbe5dd0f681114e376741bb9"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "2ad5f6e85f60c667e9577918c7c50ca4"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8485fa4b01e0675707f8e9f19cb4fa95"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "be10f855c56cc39a0f28deccbc340bfb"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "49d3bc0b949d43d5978edacc3b95a835"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "be7c07535c2e34aca144c51bd522bdc2"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "973c75b7206e3ee59456ce3db4ae0ffa"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "7b4c424ae0d687909fdef6cc7cc24a98"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "b2f03b8d1de0ea17f9b5f419a2f831fc"
  },
  {
    "url": "tags/js/index.html",
    "revision": "4e6d7fd3ddfbc299832fe898d6ed5969"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "a901040ba627e056c2efa9318706addd"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "e50e72f9aff5c9e079a26ff7f487383c"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e3a9c72dc4d0231f6b3c911d1f1de638"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "e0d292839319645c3eb63c6329400550"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "b41126af83107824b099f2fbe6913022"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "f8a4012a1fc2e327cee30f78eba1c80d"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "46398412112cd255dc663f2723eb1813"
  },
  {
    "url": "timeline/index.html",
    "revision": "274faf9d524ff681503dfdc46e1165d9"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "57e7c11e7da093364415fe208587ca35"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "3a17f8eff458557ea0a271ef2ae4de07"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "7a9ea74354ca4c584d508bd01b4b9bcb"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f0c07bf6eba94af561e56f3e7c015272"
  },
  {
    "url": "生活分享/life.html",
    "revision": "dd52cc584dd99df6924e19843e643462"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
