self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./src/components/Player/styles.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./src/components/Player/styles.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".styles_playerContainer__2kTpC {\n  padding: 3rem 4rem;\n  width: 26.5rem;\n  height: 100vh;\n  background: var(--purple-500);\n  color: var(--white);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n.styles_playerContainer__2kTpC header {\n  display: flex;\n  align-items: center;\n  grid-gap: 1rem;\n  gap: 1rem;\n}\n.styles_playerContainer__2kTpC strong {\n  font-family: Lexend, sans-serif;\n  font-weight: 600;\n}\n.styles_playerContainer__2kTpC footer {\n  align-self: stretch;\n}\n.styles_playerContainer__2kTpC footer.styles_empty__XvMyC {\n  opacity: 0.5;\n}\n\n.styles_emptyPlayer__WHPi6 {\n  width: 100%;\n  height: 20rem;\n  border: 1.5px dashed var(--purple-300);\n  border-radius: 1.5rem;\n  background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0% rgba(0, 0, 0, 0) 100%);\n  padding: 4rem;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.styles_progress__ULW9V {\n  display: flex;\n  align-items: center;\n  grid-gap: 0.5rem;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n}\n.styles_progress__ULW9V span {\n  display: block;\n  width: 4rem;\n  text-align: center;\n}\n.styles_progress__ULW9V .styles_slider__3_Mkb {\n  flex: 1 1;\n}\n.styles_progress__ULW9V .styles_slider__3_Mkb .styles_emptySlider__3p9Ad {\n  width: 100%;\n  height: 4px;\n  background: var(--purple-300);\n  border-radius: 2px;\n}", "",{"version":3,"sources":["webpack://styles.module.scss"],"names":[],"mappings":"AAAA;EACG,kBAAA;EACA,cAAA;EACA,aAAA;EAEA,6BAAA;EACA,mBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,8BAAA;AADH;AAGG;EACI,aAAA;EACA,mBAAA;EACA,cAAA;EAAA,SAAA;AADP;AAIG;EACI,+BAAA;EACA,gBAAA;AAFP;AAKG;EACI,mBAAA;AAHP;AAIO;EACI,YAAA;AAFX;;AAOA;EACI,WAAA;EACA,aAAA;EACA,sCAAA;EACA,qBAAA;EACA,wFAAA;EAEA,aAAA;EACA,kBAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;AANJ;;AAUA;EACI,aAAA;EACA,mBAAA;EACA,gBAAA;EAAA,WAAA;EACA,mBAAA;AAPJ;AASI;EACI,cAAA;EACA,WAAA;EACA,kBAAA;AAPR;AAUI;EACI,SAAA;AARR;AAUQ;EACI,WAAA;EACA,WAAA;EACA,6BAAA;EACA,kBAAA;AARZ","sourcesContent":[".playerContainer{\r\n   padding: 3rem 4rem;\r\n   width: 26.5rem;\r\n   height: 100vh;\r\n\r\n   background: var(--purple-500);\r\n   color: var(--white);\r\n\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: center;\r\n   justify-content: space-between;\r\n\r\n   header{\r\n       display: flex;\r\n       align-items: center;\r\n       gap: 1rem; \r\n   }\r\n   \r\n   strong{\r\n       font-family: Lexend, sans-serif;\r\n       font-weight: 600;\r\n   }\r\n\r\n   footer{\r\n       align-self: stretch;\r\n       &.empty{\r\n           opacity: 0.5;\r\n       }\r\n   }\r\n}\r\n\r\n.emptyPlayer{\r\n    width: 100%;\r\n    height: 20rem;\r\n    border: 1.5px dashed var(--purple-300);\r\n    border-radius: 1.5rem;\r\n    background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0% rgba(0, 0, 0, 0) 100%);\r\n\r\n    padding: 4rem;\r\n    text-align: center;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n}\r\n\r\n.progress{\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    font-size: 0.875rem;\r\n\r\n    span{\r\n        display: block;\r\n        width: 4rem;\r\n        text-align: center;\r\n    }\r\n\r\n    .slider{\r\n        flex: 1;\r\n\r\n        .emptySlider{\r\n            width: 100%;\r\n            height: 4px;\r\n            background: var(--purple-300);\r\n            border-radius: 2px;\r\n        }\r\n    }\r\n\r\n    \r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"playerContainer": "styles_playerContainer__2kTpC",
	"empty": "styles_empty__XvMyC",
	"emptyPlayer": "styles_emptyPlayer__WHPi6",
	"progress": "styles_progress__ULW9V",
	"slider": "styles_slider__3_Mkb",
	"emptySlider": "styles_emptySlider__3p9Ad"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL3N0eWxlcy5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSwwRUFBMEUsdUJBQXVCLG1CQUFtQixrQkFBa0Isa0NBQWtDLHdCQUF3QixrQkFBa0IsMkJBQTJCLHdCQUF3QixtQ0FBbUMsR0FBRyx5Q0FBeUMsa0JBQWtCLHdCQUF3QixtQkFBbUIsY0FBYyxHQUFHLHlDQUF5QyxvQ0FBb0MscUJBQXFCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLDZEQUE2RCxpQkFBaUIsR0FBRyxnQ0FBZ0MsZ0JBQWdCLGtCQUFrQiwyQ0FBMkMsMEJBQTBCLDZGQUE2RixrQkFBa0IsdUJBQXVCLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcsNkJBQTZCLGtCQUFrQix3QkFBd0IscUJBQXFCLGdCQUFnQix3QkFBd0IsR0FBRyxnQ0FBZ0MsbUJBQW1CLGdCQUFnQix1QkFBdUIsR0FBRyxpREFBaUQsY0FBYyxHQUFHLDRFQUE0RSxnQkFBZ0IsZ0JBQWdCLGtDQUFrQyx1QkFBdUIsR0FBRyxPQUFPLG1GQUFtRixXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLDBDQUEwQywwQkFBMEIsc0JBQXNCLHFCQUFxQix5Q0FBeUMsMkJBQTJCLHlCQUF5Qiw4QkFBOEIsMkJBQTJCLHNDQUFzQyxrQkFBa0IseUJBQXlCLCtCQUErQixxQkFBcUIsU0FBUyxxQkFBcUIsMkNBQTJDLDRCQUE0QixRQUFRLGtCQUFrQiwrQkFBK0IsbUJBQW1CLDRCQUE0QixZQUFZLFFBQVEsS0FBSyxxQkFBcUIsb0JBQW9CLHNCQUFzQiwrQ0FBK0MsOEJBQThCLGlHQUFpRywwQkFBMEIsMkJBQTJCLDBCQUEwQiw0QkFBNEIsZ0NBQWdDLFNBQVMsa0JBQWtCLHNCQUFzQiw0QkFBNEIsb0JBQW9CLDRCQUE0QixpQkFBaUIsMkJBQTJCLHdCQUF3QiwrQkFBK0IsU0FBUyxvQkFBb0Isb0JBQW9CLDZCQUE2Qiw0QkFBNEIsNEJBQTRCLDhDQUE4QyxtQ0FBbUMsYUFBYSxTQUFTLGlCQUFpQiwyQkFBMkI7QUFDNy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDJlZjBlODYzNmY2N2U0YTFkOTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zdHlsZXNfcGxheWVyQ29udGFpbmVyX18ya1RwQyB7XFxuICBwYWRkaW5nOiAzcmVtIDRyZW07XFxuICB3aWR0aDogMjYuNXJlbTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtNTAwKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zdHlsZXNfcGxheWVyQ29udGFpbmVyX18ya1RwQyBoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWdhcDogMXJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuLnN0eWxlc19wbGF5ZXJDb250YWluZXJfXzJrVHBDIHN0cm9uZyB7XFxuICBmb250LWZhbWlseTogTGV4ZW5kLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLnN0eWxlc19wbGF5ZXJDb250YWluZXJfXzJrVHBDIGZvb3RlciB7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbn1cXG4uc3R5bGVzX3BsYXllckNvbnRhaW5lcl9fMmtUcEMgZm9vdGVyLnN0eWxlc19lbXB0eV9fWHZNeUMge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uc3R5bGVzX2VtcHR5UGxheWVyX19XSFBpNiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjByZW07XFxuICBib3JkZXI6IDEuNXB4IGRhc2hlZCB2YXIoLS1wdXJwbGUtMzAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDMuOGRlZywgcmdiYSgxNDUsIDEwMCwgMjUwLCAwLjgpIDAlIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnN0eWxlc19wcm9ncmVzc19fVUxXOVYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWdhcDogMC41cmVtO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbn1cXG4uc3R5bGVzX3Byb2dyZXNzX19VTFc5ViBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDRyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zdHlsZXNfcHJvZ3Jlc3NfX1VMVzlWIC5zdHlsZXNfc2xpZGVyX18zX01rYiB7XFxuICBmbGV4OiAxIDE7XFxufVxcbi5zdHlsZXNfcHJvZ3Jlc3NfX1VMVzlWIC5zdHlsZXNfc2xpZGVyX18zX01rYiAuc3R5bGVzX2VtcHR5U2xpZGVyX18zcDlBZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLTMwMCk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRyxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBRUEsNkJBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFESDtBQUdHO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUFEUDtBQUlHO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtBQUZQO0FBS0c7RUFDSSxtQkFBQTtBQUhQO0FBSU87RUFDSSxZQUFBO0FBRlg7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSx3RkFBQTtFQUVBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTko7O0FBVUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUFBLFdBQUE7RUFDQSxtQkFBQTtBQVBKO0FBU0k7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBUFI7QUFVSTtFQUNJLFNBQUE7QUFSUjtBQVVRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBUlpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBsYXllckNvbnRhaW5lcntcXHJcXG4gICBwYWRkaW5nOiAzcmVtIDRyZW07XFxyXFxuICAgd2lkdGg6IDI2LjVyZW07XFxyXFxuICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHJcXG4gICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtNTAwKTtcXHJcXG4gICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcblxcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICBoZWFkZXJ7XFxyXFxuICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgIGdhcDogMXJlbTsgXFxyXFxuICAgfVxcclxcbiAgIFxcclxcbiAgIHN0cm9uZ3tcXHJcXG4gICAgICAgZm9udC1mYW1pbHk6IExleGVuZCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgZm9vdGVye1xcclxcbiAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcclxcbiAgICAgICAmLmVtcHR5e1xcclxcbiAgICAgICAgICAgb3BhY2l0eTogMC41O1xcclxcbiAgICAgICB9XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZW1wdHlQbGF5ZXJ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDIwcmVtO1xcclxcbiAgICBib3JkZXI6IDEuNXB4IGRhc2hlZCB2YXIoLS1wdXJwbGUtMzAwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQzLjhkZWcsIHJnYmEoMTQ1LCAxMDAsIDI1MCwgMC44KSAwJSByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiA0cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvZ3Jlc3N7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcblxcclxcbiAgICBzcGFue1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICB3aWR0aDogNHJlbTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2xpZGVye1xcclxcbiAgICAgICAgZmxleDogMTtcXHJcXG5cXHJcXG4gICAgICAgIC5lbXB0eVNsaWRlcntcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtMzAwKTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInBsYXllckNvbnRhaW5lclwiOiBcInN0eWxlc19wbGF5ZXJDb250YWluZXJfXzJrVHBDXCIsXG5cdFwiZW1wdHlcIjogXCJzdHlsZXNfZW1wdHlfX1h2TXlDXCIsXG5cdFwiZW1wdHlQbGF5ZXJcIjogXCJzdHlsZXNfZW1wdHlQbGF5ZXJfX1dIUGk2XCIsXG5cdFwicHJvZ3Jlc3NcIjogXCJzdHlsZXNfcHJvZ3Jlc3NfX1VMVzlWXCIsXG5cdFwic2xpZGVyXCI6IFwic3R5bGVzX3NsaWRlcl9fM19Na2JcIixcblx0XCJlbXB0eVNsaWRlclwiOiBcInN0eWxlc19lbXB0eVNsaWRlcl9fM3A5QWRcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9