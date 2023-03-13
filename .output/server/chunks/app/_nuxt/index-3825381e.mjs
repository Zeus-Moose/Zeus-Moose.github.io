import { _ as __nuxt_component_0 } from './nuxt-link-f57cd0d9.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { withAsyncContext, unref, withCtx, createTextVNode, useSSRContext, mergeProps, createVNode, toDisplayString } from 'vue';
import { u as useAsyncData, q as queryContent } from './query-0f2fb5d8.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';
import 'cookie-es';
import './utils-926a1a3c.mjs';

const _sfc_main$1 = {
  props: ["portfolio"],
  computed: {
    cardSize() {
      var _a;
      return (_a = this.portfolio.card_size) != null ? _a : "";
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<article${ssrRenderAttrs(mergeProps({
    class: ["block block_link mini_block", $options.cardSize]
  }, _attrs))}><div class="section_image"><video muted="true" autoplay="true" loop="true"${ssrRenderAttr("poster", `/assets/images/covers/${$props.portfolio.thumbnail}`)}><source${ssrRenderAttr("src", `/assets/videos/${$props.portfolio.video}`)}>&quot; </video><h2>${ssrInterpolate($props.portfolio.title)}</h2><div class="intro"><p>${ssrInterpolate($props.portfolio.description)}</p></div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "section_image_link",
    to: $props.portfolio._path
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="sr-only"${_scopeId}>${ssrInterpolate($props.portfolio.title)}</span>`);
      } else {
        return [
          createVNode("span", { class: "sr-only" }, toDisplayString($props.portfolio.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</article>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PortfolioCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PortfolioCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __default__ = {
  components: {
    PortfolioCard
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => queryContent("/portfolio/").find(), "$PslAyef5YX")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section id="intro" class="wrapper page"><h2 class="page-title"> Creative Technology Consultant </h2><p>Hi, I&#39;m Ben. I have fourteen year&#39;s experience making websites and web-apps. I bring web technologies into the real world, making user engagement interactive through touch, movement, and sound.</p><p>Below is a selection of work from my portfolio, have a look and see what I can do!</p></section><div id="portfolio" class="portfolio-grid"><!--[-->`);
      ssrRenderList(unref(data), (portfolio) => {
        _push(ssrRenderComponent(PortfolioCard, { portfolio }, null, _parent));
      });
      _push(`<!--]--></div><section id="outro" class="wrapper page"><h2> Like what you see?</h2><p> If you&#39;d like to know more about any of these projects please don&#39;t hesitate to get in `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` contact `);
          } else {
            return [
              createTextVNode(" contact ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`, or have a look at my full list of `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` services `);
          } else {
            return [
              createTextVNode(" services ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`. </p></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-3825381e.mjs.map
