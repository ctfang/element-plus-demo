/*! Element Plus v2.3.1 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ElementPlusLocaleEl = factory());
})(this, (function () { 'use strict';

  var el = {
    name: "el",
    el: {
      colorpicker: {
        confirm: "\u0395\u03BD\u03C4\u03AC\u03BE\u03B5\u03B9",
        clear: "\u039A\u03B1\u03B8\u03B1\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2"
      },
      datepicker: {
        now: "\u03A4\u03CE\u03C1\u03B1",
        today: "\u03A3\u03AE\u03BC\u03B5\u03C1\u03B1",
        cancel: "\u0391\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7",
        clear: "\u039A\u03B1\u03B8\u03B1\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2",
        confirm: "\u0395\u03BD\u03C4\u03AC\u03BE\u03B5\u03B9",
        selectDate: "\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03B7\u03BC\u03AD\u03C1\u03B1",
        selectTime: "\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03CE\u03C1\u03B1",
        startDate: "\u0397\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u0388\u03BD\u03B1\u03C1\u03BE\u03B7\u03C2",
        startTime: "\u03A9\u03C1\u03B1 \u0388\u03BD\u03B1\u03C1\u03BE\u03B7\u03C2",
        endDate: "\u0397\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u039B\u03AE\u03BE\u03B7\u03C2",
        endTime: "\u03A9\u03C1\u03B1 \u039B\u03AE\u03BE\u03B7\u03C2",
        prevYear: "\u03A0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03BF \u0388\u03C4\u03BF\u03C2",
        nextYear: "\u0395\u03C0\u03CC\u03BC\u03B5\u03BD\u03BF \u0388\u03C4\u03BF\u03C2",
        prevMonth: "\u03A0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03BF\u03C2 \u039C\u03AE\u03BD\u03B1\u03C2",
        nextMonth: "\u0395\u03C0\u03CC\u03BC\u03B5\u03BD\u03BF\u03C2 \u039C\u03AE\u03BD\u03B1\u03C2",
        year: "\u0388\u03C4\u03BF\u03C2",
        month1: "\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2",
        month2: "\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2",
        month3: "\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2",
        month4: "\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2",
        month5: "\u039C\u03AC\u03B9\u03BF\u03C2",
        month6: "\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2",
        month7: "\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2",
        month8: "\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2",
        month9: "\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2",
        month10: "\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2",
        month11: "\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2",
        month12: "\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2",
        weeks: {
          sun: "\u039A\u03C5\u03C1",
          mon: "\u0394\u03B5\u03C5",
          tue: "\u03A4\u03C1\u03B9",
          wed: "\u03A4\u03B5\u03C4",
          thu: "\u03A0\u03B5\u03BC",
          fri: "\u03A0\u03B1\u03C1",
          sat: "\u03A3\u03B1\u03B2"
        },
        months: {
          jan: "\u0399\u03B1\u03BD",
          feb: "\u03A6\u03B5\u03B2",
          mar: "\u039C\u03B1\u03C1",
          apr: "\u0391\u03C0\u03C1",
          may: "\u039C\u03B1\u03CA",
          jun: "\u0399\u03BF\u03C5\u03BD",
          jul: "\u0399\u03BF\u03C5\u03BB",
          aug: "\u0391\u03C5\u03B3",
          sep: "\u03A3\u03B5\u03C0",
          oct: "\u039F\u03BA\u03C4",
          nov: "\u039D\u03BF\u03B5",
          dec: "\u0394\u03B5\u03BA"
        }
      },
      select: {
        loading: "\u03A6\u03CC\u03C1\u03C4\u03C9\u03C3\u03B7",
        noMatch: "\u0394\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B1\u03BD \u03B1\u03C0\u03BF\u03C4\u03B5\u03BB\u03AD\u03C3\u03BC\u03B1\u03C4\u03B1",
        noData: "\u03A7\u03C9\u03C1\u03AF\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1",
        placeholder: "\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE"
      },
      cascader: {
        noMatch: "\u0394\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B1\u03BD \u03B1\u03C0\u03BF\u03C4\u03B5\u03BB\u03AD\u03C3\u03BC\u03B1\u03C4\u03B1",
        loading: "\u03A6\u03CC\u03C1\u03C4\u03C9\u03C3\u03B7",
        placeholder: "\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE",
        noData: "\u03A7\u03C9\u03C1\u03AF\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1"
      },
      pagination: {
        goto: "\u039C\u03B5\u03C4\u03AC\u03B2\u03B1\u03C3\u03B7 \u03C3\u03B5",
        pagesize: "/\u03C3\u03B5\u03BB\u03AF\u03B4\u03B1",
        total: "\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF {total}",
        pageClassifier: "",
        page: "Page",
        prev: "Go to previous page",
        next: "Go to next page",
        currentPage: "page {pager}",
        prevPages: "Previous {pager} pages",
        nextPages: "Next {pager} pages"
      },
      messagebox: {
        title: "\u039C\u03AE\u03BD\u03C5\u03BC\u03B1",
        confirm: "\u0395\u03BD\u03C4\u03AC\u03BE\u03B5\u03B9",
        cancel: "\u0391\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7",
        error: "\u0386\u03BA\u03C5\u03C1\u03B7 \u03B5\u03B9\u03C3\u03B1\u03B3\u03C9\u03B3\u03AE"
      },
      upload: {
        deleteTip: "\u03A0\u03AC\u03C4\u03B7\u03C3\u03B5 \u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B3\u03B9\u03B1 \u03B1\u03C6\u03B1\u03AF\u03C1\u03B5\u03C3\u03B7",
        delete: "\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE",
        preview: "\u03A0\u03C1\u03BF\u03B5\u03C0\u03B9\u03C3\u03BA\u03CC\u03C0\u03B7\u03C3\u03B7",
        continue: "\u03A3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1"
      },
      table: {
        emptyText: "\u03A7\u03C9\u03C1\u03AF\u03C2 \u0394\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1",
        confirmFilter: "\u0395\u03C0\u03B9\u03B2\u03B5\u03B2\u03B1\u03AF\u03C9\u03C3\u03B7",
        resetFilter: "\u0395\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC",
        clearFilter: "\u038C\u03BB\u03B1",
        sumText: "\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF"
      },
      tree: {
        emptyText: "\u03A7\u03C9\u03C1\u03AF\u03C2 \u0394\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1"
      },
      transfer: {
        noMatch: "\u0394\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B1\u03BD \u03B1\u03C0\u03BF\u03C4\u03B5\u03BB\u03AD\u03C3\u03BC\u03B1\u03C4\u03B1",
        noData: "\u03A7\u03C9\u03C1\u03AF\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1",
        titles: ["\u039B\u03AF\u03C3\u03C4\u03B1 1", "\u039B\u03AF\u03C3\u03C4\u03B1 2"],
        filterPlaceholder: "\u0391\u03BD\u03B1\u03B6\u03AE\u03C4\u03B7\u03C3\u03B7",
        noCheckedFormat: "{total} \u0391\u03BD\u03C4\u03B9\u03BA\u03B5\u03AF\u03BC\u03B5\u03BD\u03B1",
        hasCheckedFormat: "{checked}/{total} \u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B1"
      },
      image: {
        error: "FAILED"
      },
      pageHeader: {
        title: "Back"
      },
      popconfirm: {
        confirmButtonText: "Yes",
        cancelButtonText: "No"
      }
    }
  };

  return el;

}));
