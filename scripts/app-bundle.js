define('resources',['resources/index'],function(m){return m;});;
define('app',["require", "exports", "aurelia-pal"], function (require, exports, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = "ここせま！！";
            config.options.pushState = true;
            config.map([
                { route: ["", "index.html"], name: "index", moduleId: "index", nav: true },
                { route: ["story/*path"], name: "story", moduleId: "story/story", activationStrategy: 'invoke-lifecycle', title: "Welcome2" },
                { route: ["profile/alt"], redirect: "profile/alt/members" },
                { route: ["profile/ctrl"], redirect: "profile/ctrl/members" },
                { route: ["profile/*path"], name: "profile", moduleId: "profile/profile", activationStrategy: 'invoke-lifecycle', title: "Welcome3" }
            ]);
            config.mapUnknownRoutes(aurelia_pal_1.PLATFORM.moduleName('not-found'));
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});
;
define('app.css!text',[],function(){return "* {\n  margin: 0%;\n  padding: 0%; }\n\nbody {\n  background-color: #ffffff; }\n";});;
define('app.html!text',[],function(){return "<template>\n  <div class=\"header-main-footer\">\n    <require from=\"./app.css\"></require>\n    <compose view=\"./header/header.html\"></compose>\n    <ul repeat.for=\"nav of router.navigation\">\n        <li class=\"${nav.isActive ? 'active' : ''}\"><a href.bind=\"nav.href\">${nav.title}</a></li>\n    </ul>\n    <router-view></router-view>\n    <!--<compose view=\"./article/article.html\"></compose>-->\n    <compose view=\"./footer/footer.html\"></compose>\n  </div>\n</template>";});;
define('article.css!text',[],function(){return "article {\n  min-height: 75vh;\n  width: 90%;\n  max-width: 1000px;\n  background-color: #eaf4fc;\n  margin: 10vh auto 5vh auto;\n  padding: 1vh 1vw 1vh 1vw; }\n";});;
define('article/article.css!text',[],function(){return "article {\n  min-height: 75vh;\n  width: 90%;\n  max-width: 1000px;\n  background-color: #eaf4fc;\n  margin: 10vh auto 5vh auto;\n  padding: 1vh 1vw 1vh 1vw; }\n";});;
define('article/article.html!text',[],function(){return "<template>\n  <require from=\"./article.css\"></require>\n  <article>\n    <div class=\"article\">\n      <h1>${message}</h1><br>\n    </div>\n  </article>\n</template>";});;
define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});
;
define('footer/footer.css!text',[],function(){return "footer {\n  background-color: #eaf4fc;\n  width: 100vw;\n  height: 10vh; }\n";});;
define('footer/footer.html!text',[],function(){return "<template>\n  <require from=\"./footer.css\"></require>\n  <footer>\n    <div class=\"footer\">\n      特にライセンス明記のあるものを除き、このサイトのコンテンツは<br>\n      <a href=\"https://creativecommons.org/licenses/by-sa/4.0/deed.ja\">クリエイティブ・コモンズ・ライセンス 表示 - 継承 4.0 国際 (CC BY-SA\n        4.0)</a>\n      <br>のもとで提供されます。\n    </div>\n  </footer>\n</template>";});;
define('header/header.css!text',[],function(){return "header {\n  background-color: #ffffff;\n  color: #1e50a2;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  height: 5vh;\n  box-shadow: 0px 0px 2px 0px;\n  margin-top: 0vh !important; }\n";});;
define('header/header.html!text',[],function(){return "<template>\n  <header>\n    <div class=\"header\">\n      <require from=\"./header.css\"></require>\n      <h1>こ！</h1>\n    </div>\n  </header>\n</template>";});;
define('index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Index = (function () {
        function Index() {
        }
        return Index;
    }());
    exports.Index = Index;
});
;
define('index.css!text',[],function(){return "article {\n  min-height: 75vh;\n  width: 90%;\n  max-width: 1000px;\n  background-color: #eaf4fc;\n  margin: 10vh auto 5vh auto;\n  padding: 1vh 1vw 1vh 1vw; }\n";});;
define('index.html!text',[],function(){return "<template>\r\n    <require from=\"./index.css\"></require>\r\n    <article>\r\n        トップページ\r\n    </article>\r\n</template>";});;
define('main',["require", "exports", "./environment", "core-js/stable"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        aurelia.use.developmentLogging(environment_1.default.debug ? 'debug' : 'warn');
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});
;
define('profile/alt/akeboshi-rin.html!text',[],function(){return "<template>\r\n    明星環のプロフィール\r\n</template>";});;
define('profile/alt/index.html!text',[],function(){return "<template>\r\n    <a href=\"profile/alt/kashiwagi-meguri\">柏木恵理</a><br>\r\n    <a href=\"profile/alt/akeboshi-rin\">明星環</a><br>\r\n    <a href=\"profile/alt/luna-shannon\">Luna Shannon</a><br>\r\n    <a href=\"profile/alt/mizugashi-yuzu\">水菓子柚子</a><br>\r\n    <a href=\"profile/alt/takamine-setsuna\">高嶺刹那</a><br>\r\n</template>";});;
define('profile/alt/kashiwagi-meguri.html!text',[],function(){return "<template>\r\n    柏木恵理のプロフィール\r\n</template>";});;
define('profile/alt/luna-shannon.1.html!text',[],function(){return "<template>\r\n    Luna Shannonのプロフィール\r\n</template>";});;
define('profile/alt/luna-shannon.html!text',[],function(){return "<template>\r\n    Luna Shannonのプロフィール\r\n</template>";});;
define('profile/alt/members.html!text',[],function(){return "<template>\r\n    <a href=\"profile/alt/kashiwagi-meguri\">柏木恵理</a><br>\r\n    <a href=\"profile/alt/akeboshi-rin\">明星環</a><br>\r\n    <a href=\"profile/alt/luna-shannon\">Luna Shannon</a><br>\r\n    <a href=\"profile/alt/mizugashi-yuzu\">水菓子柚子</a><br>\r\n    <a href=\"profile/alt/takamine-setsuna\">高嶺刹那</a><br>\r\n    <a href=\"profile/alt/yonehara-hatsuho\">米原初穂</a><br>\r\n</template>";});;
define('profile/alt/mizugashi-yuzu.html!text',[],function(){return "<template>\r\n    水菓子柚子のプロフィール\r\n</template>";});;
define('profile/alt/profiles.html!text',[],function(){return "<template>\r\n    <a href=\"profile/alt/kashiwagi-meguri\">柏木恵理</a><br>\r\n    <a href=\"profile/alt/akeboshi-rin\">明星環</a><br>\r\n    <a href=\"profile/alt/luna-shannon\">Luna Shannon</a><br>\r\n    <a href=\"profile/alt/mizugashi-yuzu\">水菓子柚子</a><br>\r\n    <a href=\"profile/alt/takamine-setsuna\">高嶺刹那</a><br>\r\n</template>";});;
define('profile/alt/takamine-setsuna.html!text',[],function(){return "<template>\r\n    高嶺刹那のプロフィール\r\n</template>";});;
define('profile/alt/yonehara-hatsuho.html!text',[],function(){return "<template>\r\n    米原初穂のプロフィール\r\n</template>";});;
define('profile/ctrl/aio-hajime.html!text',[],function(){return "<template>\r\n    相合一のプロフィール\r\n</template>";});;
define('profile/ctrl/aio-rei.html!text',[],function(){return "<template>\r\n    相合零のプロフィール\r\n</template>";});;
define('profile/ctrl/akagi-miki.html!text',[],function(){return "<template>\r\n    赤城美樹のプロフィール\r\n</template>";});;
define('profile/ctrl/akagi-yui.html!text',[],function(){return "<template>\r\n    赤城結衣のプロフィール\r\n</template>";});;
define('profile/ctrl/akagi-yuki.html!text',[],function(){return "<template>\r\n    赤城由紀のプロフィール\r\n</template>";});;
define('profile/ctrl/amano-mato.html!text',[],function(){return "<template>\r\n    天野真十のプロフィール\r\n</template>";});;
define('profile/ctrl/arai-kosuzu.html!text',[],function(){return "<template>\r\n    荒井向涼のプロフィール\r\n</template>";});;
define('profile/ctrl/luna-shannon.1.html!text',[],function(){return "<template>\r\n    Luna Shannonのプロフィール\r\n</template>";});;
define('profile/ctrl/luna-shannon.2.html!text',[],function(){return "<template>\r\n    Luna Shannonのプロフィール\r\n</template>";});;
define('profile/ctrl/luna-shannon.3.html!text',[],function(){return "<template>\r\n    Luna Shannonのプロフィール\r\n</template>";});;
define('profile/ctrl/luna-shannon.4.html!text',[],function(){return "<template>\r\n    Luna Shannonのプロフィール\r\n</template>";});;
define('profile/ctrl/luna-shannon.html!text',[],function(){return "<template>\r\n    Luna Shannonのプロフィール\r\n</template>";});;
define('profile/ctrl/members.html!text',[],function(){return "<template>\r\n    <a href=\"profile/ctrl/suda-akira\">須田確</a><br>\r\n    <a href=\"profile/ctrl/aio-rei\">相合零</a><br>\r\n    <a href=\"profile/ctrl/aio-hajime\">相合一</a><br>\r\n    <a href=\"profile/ctrl/akagi-yuki\">赤城由紀</a><br>\r\n    <a href=\"profile/ctrl/akagi-yui\">赤城結衣</a><br>\r\n    <a href=\"profile/ctrl/akagi-miki\">赤城美樹</a><br>\r\n    <a href=\"profile/ctrl/amano-mato\">天野真十</a><br>\r\n    <a href=\"profile/ctrl/arai-kosuzu\">荒井向涼</a><br>\r\n    <a href=\"profile/ctrl/miyano-shigure\">宮野時雨</a><br>\r\n    <a href=\"profile/ctrl/okazaki-kurumi\">岡崎胡桃</a><br>\r\n    <a href=\"profile/ctrl/nijo-mana\">二条愛</a><br>\r\n    \r\n</template>";});;
define('profile/ctrl/miyano-shigure.html!text',[],function(){return "<template>\r\n    宮野時雨のプロフィール\r\n</template>";});;
define('profile/ctrl/nijo-mana.html!text',[],function(){return "<template>\r\n    二条愛のプロフィール\r\n</template>";});;
define('profile/ctrl/okazaki-kurumi.1.html!text',[],function(){return "<template>\r\n    岡崎胡桃のプロフィール\r\n</template>";});;
define('profile/ctrl/okazaki-kurumi.2.html!text',[],function(){return "<template>\r\n    岡崎胡桃のプロフィール\r\n</template>";});;
define('profile/ctrl/okazaki-kurumi.html!text',[],function(){return "<template>\r\n    岡崎胡桃のプロフィール\r\n</template>";});;
define('profile/ctrl/profiles.html!text',[],function(){return "";});;
define('profile/ctrl/suda-akira.html!text',[],function(){return "<template>\r\n    須田確のプロフィール\r\n</template>";});;
define('profile/profile',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Profile = (function () {
        function Profile() {
        }
        Profile.prototype.activate = function (path) {
            this.path = "profile/" + path.path + ".html";
        };
        return Profile;
    }());
    exports.Profile = Profile;
});
;
define('profile/profile.css!text',[],function(){return "article {\n  min-height: 75vh;\n  width: 90%;\n  max-width: 1000px;\n  background-color: #eaf4fc;\n  margin: 10vh auto 5vh auto;\n  padding: 1vh 1vw 1vh 1vw; }\n";});;
define('profile/profile.html!text',[],function(){return "<template>\r\n    <require from=\"./profile.css\"></require>\r\n    <article>\r\n            <compose view.bind=\"path\"></compose>\r\n    </article>\r\n</template>";});;
define('profile/story',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Story = (function () {
        function Story() {
        }
        Story.prototype.activate = function (path) {
            this.path = "story/" + path.path + ".html";
        };
        return Story;
    }());
    exports.Story = Story;
});
;
define('profile/story.css!text',[],function(){return "article {\n  min-height: 75vh;\n  width: 90%;\n  max-width: 1000px;\n  background-color: #eaf4fc;\n  margin: 10vh auto 5vh auto;\n  padding: 1vh 1vw 1vh 1vw; }\n";});;
define('profile/story.html!text',[],function(){return "<template>\r\n    <require from=\"./layout.css\"></require>\r\n    <article>\r\n            <compose view.bind=\"path\"></compose>\r\n    </article>\r\n</template>";});;
define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});
;
define('story/hello-math.html!text',[],function(){return "<template>\r\n    テスト0\r\n</template>";});;
define('story/hello-world.html!text',[],function(){return "<template>\r\n    テスト1\r\n</template>";});;
define('story/story',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Story = (function () {
        function Story() {
        }
        Story.prototype.activate = function (path) {
            this.path = "story/" + path.path + ".html";
        };
        return Story;
    }());
    exports.Story = Story;
});
;
define('story/story.css!text',[],function(){return "article {\n  min-height: 75vh;\n  width: 90%;\n  max-width: 1000px;\n  background-color: #eaf4fc;\n  margin: 10vh auto 5vh auto;\n  padding: 1vh 1vw 1vh 1vw; }\n";});;
define('story/story.html!text',[],function(){return "<template>\r\n    <require from=\"./story.css\"></require>\r\n    <article>\r\n            <compose view.bind=\"path\"></compose>\r\n    </article>\r\n</template>";});;
define('story/we-are-alt.html!text',[],function(){return "<template>\r\n    数学部です\r\n</template>";});;
define('story/we-are-ctrl.html!text',[],function(){return "<template>\r\n    コンピュータ技術研究会です\r\n</template>";});
//# sourceMappingURL=app-bundle.js.map