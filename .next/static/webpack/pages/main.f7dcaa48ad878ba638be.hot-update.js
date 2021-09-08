"use strict";
self["webpackHotUpdate_N_E"]("pages/main",{

/***/ "./src/components/Transfer/Transfer.tsx":
/*!**********************************************!*\
  !*** ./src/components/Transfer/Transfer.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Transfer; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Web3_Erc20Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Web3/Erc20Context */ "./src/Web3/Erc20Context.tsx");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ "./node_modules/@web3-react/core/dist/core.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\saadj\\saadjhk\\abg-task\\src\\components\\Transfer\\Transfer.tsx",
    _s = $RefreshSig$();












const validationSchema = yup__WEBPACK_IMPORTED_MODULE_4__.object({
  amount: yup__WEBPACK_IMPORTED_MODULE_4__.number().required("Amount is required"),
  recipient: yup__WEBPACK_IMPORTED_MODULE_4__.string().matches(/^0x[a-fA-F0-9]{40}$/, "Invalid ETH Address").required("Recipient is required")
});
const useStyles = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__.makeStyles)(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100% - 64px)"
  },
  inputBox: {
    maxWidth: "500px"
  },
  input: {
    display: "block",
    marginBottom: "16px"
  },
  myBtn: {
    display: "block",
    marginBottom: "16px"
  },
  btnBox: {
    display: "flex",
    flexDirection: "column"
  }
}));
function Transfer() {
  _s();

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const {
    0: token,
    1: setToken
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!router.query.token) {
      router.replace('/main?token=ETH');
    } else {
      setToken(token);
    }
  });
  const classes = useStyles();
  const {
    active
  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)();
  const {
    tokens,
    selectedToken,
    setSelectedToken
  } = (0,_Web3_Erc20Context__WEBPACK_IMPORTED_MODULE_1__.useTokensContext)();
  const {
    0: isWaitingOnTransaction,
    1: setIsWaitingOnTransaction
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: ethScanLink,
    1: setEthScanLink
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const transForm = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({
    initialValues: {
      amount: "",
      recipient: ""
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      if (selectedToken && selectedToken.transfer) {
        setIsWaitingOnTransaction(true);
        let defaultDecimals = 18;
        if (selectedToken.decimals) defaultDecimals = selectedToken.decimals;
        selectedToken.transfer(values.recipient, ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.parseEther((+values.amount).toFixed(defaultDecimals))).then(res => {
          setEthScanLink(`https://ropsten.etherscan.io/tx/${res.hash}`);
          res.wait().then(value => {
            transForm.resetForm();
            setEthScanLink(null);
            setIsWaitingOnTransaction(false);

            if (selectedToken.updateNativeBalance) {
              selectedToken.updateNativeBalance();
            }
          });
        }).catch(err => {
          setIsWaitingOnTransaction(false);
          console.log(`${err.message}`);
        });
      }
    },
    validate: values => {
      let error = {};

      if (selectedToken && +values.amount > selectedToken.balance) {
        return {
          amount: "Insufficient balance."
        };
      }

      return error;
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (active && tokens) {
      let all = Object.keys(tokens);
      let tkn = all.find(addr => {
        if (tokens[addr].name === token) {
          return true;
        }
      });

      if (tkn) {
        setSelectedToken(tokens[tkn]);
      } else {
        setSelectedToken(tokens[all[0]]);
      }
    }
  }, [active, tokens, token]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
      onSubmit: transForm.handleSubmit,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: classes.inputBox,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__.default, {
          helperText: transForm.touched.amount && transForm.errors.amount,
          label: `Enter ${selectedToken ? selectedToken.symbol : ""} amount`,
          value: transForm.values.amount,
          onChange: transForm.handleChange,
          error: transForm.touched.amount && Boolean(transForm.errors.amount),
          placeholder: "Enter Amount",
          className: classes.input,
          variant: "filled",
          name: "amount"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("small", {
          children: ["Balance:", " ", selectedToken ? selectedToken.balance.toFixed(4) : 0]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__.default, {
          helperText: transForm.touched.recipient && transForm.errors.recipient,
          label: `Enter Recipient Address`,
          name: "recipient",
          value: transForm.values.recipient,
          onChange: transForm.handleChange,
          error: transForm.touched.recipient && Boolean(transForm.errors.recipient),
          className: classes.input,
          variant: "filled"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: classes.btnBox,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Button, {
            type: "submit",
            className: classes.myBtn,
            variant: "contained",
            color: "primary",
            disabled: isWaitingOnTransaction,
            children: "Send"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 25
          }, this), ethScanLink ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Button, {
            variant: "contained",
            color: "primary",
            target: "_blank",
            className: classes.myBtn,
            href: ethScanLink,
            children: "View on Etherscan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 29
          }, this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 182,
    columnNumber: 9
  }, this);
}

_s(Transfer, "wKQfkSGX+q6xk2UdqF1Tr0gToiw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, useStyles, _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React, _Web3_Erc20Context__WEBPACK_IMPORTED_MODULE_1__.useTokensContext, formik__WEBPACK_IMPORTED_MODULE_3__.useFormik];
});

_c = Transfer;

var _c;

$RefreshReg$(_c, "Transfer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbi5mN2RjYWE0OGFkODc4YmE2MzhiZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNVyxnQkFBZ0IsR0FBR0YsdUNBQUEsQ0FBVztBQUNoQ0ksRUFBQUEsTUFBTSxFQUFFSix1Q0FBQSxHQUVITSxRQUZHLENBRU0sb0JBRk4sQ0FEd0I7QUFJaENDLEVBQUFBLFNBQVMsRUFBRVAsdUNBQUEsR0FFTlMsT0FGTSxDQUVFLHFCQUZGLEVBRXlCLHFCQUZ6QixFQUdOSCxRQUhNLENBSUgsdUJBSkc7QUFKcUIsQ0FBWCxDQUF6QjtBQVlBLE1BQU1JLFNBQVMsR0FBR2xCLCtEQUFVLENBQ3ZCbUIsS0FBRCxLQUFZO0FBQ1JDLEVBQUFBLElBQUksRUFBRTtBQUNGQyxJQUFBQSxPQUFPLEVBQUUsTUFEUDtBQUVGQyxJQUFBQSxRQUFRLEVBQUUsQ0FGUjtBQUdGQyxJQUFBQSxjQUFjLEVBQUUsUUFIZDtBQUlGQyxJQUFBQSxVQUFVLEVBQUUsUUFKVjtBQUtGQyxJQUFBQSxNQUFNLEVBQUU7QUFMTixHQURFO0FBUVJDLEVBQUFBLFFBQVEsRUFBRTtBQUNOQyxJQUFBQSxRQUFRLEVBQUU7QUFESixHQVJGO0FBV1JDLEVBQUFBLEtBQUssRUFBRTtBQUNIUCxJQUFBQSxPQUFPLEVBQUUsT0FETjtBQUVIUSxJQUFBQSxZQUFZLEVBQUU7QUFGWCxHQVhDO0FBZVJDLEVBQUFBLEtBQUssRUFBRTtBQUNIVCxJQUFBQSxPQUFPLEVBQUUsT0FETjtBQUVIUSxJQUFBQSxZQUFZLEVBQUU7QUFGWCxHQWZDO0FBbUJSRSxFQUFBQSxNQUFNLEVBQUU7QUFDSlYsSUFBQUEsT0FBTyxFQUFFLE1BREw7QUFFSlcsSUFBQUEsYUFBYSxFQUFFO0FBRlg7QUFuQkEsQ0FBWixDQUR3QixDQUE1QjtB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UUFEVDtBQUVJLHFCQUFTLEVBQ0xRLE9BQU8sQ0FBQ1QsS0FIaEI7QUFLSSxtQkFBTyxFQUFDLFdBTFo7QUFNSSxpQkFBSyxFQUFDLFNBTlY7QUFPSSxvQkFBUSxFQUFFYyxzQkFQZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSixFQWdCS0UsV0FBVyxnQkFDUiw4REFBQyxzREFBRDtBQUNJLG1CQUFPLEVBQUMsV0FEWjtBQUVJLGlCQUFLLEVBQUMsU0FGVjtBQUdJLGtCQUFNLEVBQUMsUUFIWDtBQUlJLHFCQUFTLEVBQ0xQLE9BQU8sQ0FBQ1QsS0FMaEI7QUFPSSxnQkFBSSxFQUNBZ0IsV0FSUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEUSxHQWVSLElBL0JSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6Rko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFJSDs7R0EvUHVCYjtVQUNMeEIsb0RBV0NTLFdBQ0dkLDREQUtmRCxrRUFXY0k7OztLQTdCRTBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RyYW5zZmVyL1RyYW5zZmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQnV0dG9uLFxyXG4gICAgSW5wdXQsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCJcclxuaW1wb3J0IHtcclxuICAgIHVzZUVmZmVjdCxcclxuICAgIHVzZVJlZHVjZXIsXHJcbiAgICB1c2VTdGF0ZSxcclxufSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VUb2tlbnNDb250ZXh0IH0gZnJvbSBcIi4uLy4uL1dlYjMvRXJjMjBDb250ZXh0XCJcclxuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIlxyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCJcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCJcclxuXHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSBcInl1cFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IHl1cC5vYmplY3Qoe1xyXG4gICAgYW1vdW50OiB5dXBcclxuICAgICAgICAubnVtYmVyKClcclxuICAgICAgICAucmVxdWlyZWQoXCJBbW91bnQgaXMgcmVxdWlyZWRcIiksXHJcbiAgICByZWNpcGllbnQ6IHl1cFxyXG4gICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgIC5tYXRjaGVzKC9eMHhbYS1mQS1GMC05XXs0MH0kLywgXCJJbnZhbGlkIEVUSCBBZGRyZXNzXCIpXHJcbiAgICAgICAgLnJlcXVpcmVkKFxyXG4gICAgICAgICAgICBcIlJlY2lwaWVudCBpcyByZXF1aXJlZFwiXHJcbiAgICAgICAgKSxcclxufSlcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoXHJcbiAgICAodGhlbWUpID0+ICh7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiY2FsYygxMDAlIC0gNjRweClcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlucHV0Qm94OiB7XHJcbiAgICAgICAgICAgIG1heFdpZHRoOiBcIjUwMHB4XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBteUJ0bjoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBidG5Cb3g6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zZmVyKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghcm91dGVyLnF1ZXJ5LnRva2VuKSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvbWFpbj90b2tlbj1FVEgnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRva2VuKHRva2VuKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgICBjb25zdCB7IGFjdGl2ZSB9ID0gdXNlV2ViM1JlYWN0KClcclxuICAgIGNvbnN0IHtcclxuICAgICAgICB0b2tlbnMsXHJcbiAgICAgICAgc2VsZWN0ZWRUb2tlbixcclxuICAgICAgICBzZXRTZWxlY3RlZFRva2VuLFxyXG4gICAgfSA9IHVzZVRva2Vuc0NvbnRleHQoKVxyXG5cclxuICAgIGNvbnN0IFtcclxuICAgICAgICBpc1dhaXRpbmdPblRyYW5zYWN0aW9uLFxyXG4gICAgICAgIHNldElzV2FpdGluZ09uVHJhbnNhY3Rpb24sXHJcbiAgICBdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbXHJcbiAgICAgICAgZXRoU2NhbkxpbmssXHJcbiAgICAgICAgc2V0RXRoU2NhbkxpbmssXHJcbiAgICBdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcclxuXHJcbiAgICBjb25zdCB0cmFuc0Zvcm0gPSB1c2VGb3JtaWsoe1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgICAgICAgYW1vdW50OiBcIlwiLFxyXG4gICAgICAgICAgICByZWNpcGllbnQ6IFwiXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hOlxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hLFxyXG4gICAgICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVG9rZW4gJiZcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVG9rZW4udHJhbnNmZXJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1dhaXRpbmdPblRyYW5zYWN0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0RGVjaW1hbHMgPSAxODtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFRva2VuLmRlY2ltYWxzKSBkZWZhdWx0RGVjaW1hbHMgPSBzZWxlY3RlZFRva2VuLmRlY2ltYWxzXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyYW5zZmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucmVjaXBpZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldGhlcnMudXRpbHMucGFyc2VFdGhlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgrdmFsdWVzLmFtb3VudCkudG9GaXhlZChkZWZhdWx0RGVjaW1hbHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFdGhTY2FuTGluayhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBodHRwczovL3JvcHN0ZW4uZXRoZXJzY2FuLmlvL3R4LyR7cmVzLmhhc2h9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy53YWl0KCkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybS5yZXNldEZvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFdGhTY2FuTGluayhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1dhaXRpbmdPblRyYW5zYWN0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVG9rZW4udXBkYXRlTmF0aXZlQmFsYW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRva2VuLnVwZGF0ZU5hdGl2ZUJhbGFuY2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNXYWl0aW5nT25UcmFuc2FjdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtlcnIubWVzc2FnZX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGF0ZTogKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZXJyb3IgPSB7fTtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkVG9rZW4gJiYgK3ZhbHVlcy5hbW91bnQgPiBzZWxlY3RlZFRva2VuLmJhbGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGFtb3VudDogXCJJbnN1ZmZpY2llbnQgYmFsYW5jZS5cIn07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoYWN0aXZlICYmIHRva2Vucykge1xyXG4gICAgICAgICAgICBsZXQgYWxsID1cclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRva2VucylcclxuXHJcbiAgICAgICAgICAgIGxldCB0a24gPSBhbGwuZmluZChcclxuICAgICAgICAgICAgICAgIChhZGRyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnNbYWRkcl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYW1lID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlblxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgaWYgKHRrbikge1xyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRUb2tlbihcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbnNbdGtuXVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRUb2tlbihcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbnNbYWxsWzBdXVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2FjdGl2ZSwgdG9rZW5zLCB0b2tlbl0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm0uaGFuZGxlU3VibWl0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLmlucHV0Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbW91bnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2BFbnRlciAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUb2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZWN0ZWRUb2tlbi5zeW1ib2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBhbW91bnRgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybS5oYW5kbGVDaGFuZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbW91bnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRW50ZXIgQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQmFsYW5jZTp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGVjdGVkVG9rZW4uYmFsYW5jZS50b0ZpeGVkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVjaXBpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlY2lwaWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtgRW50ZXIgUmVjaXBpZW50IEFkZHJlc3NgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVjaXBpZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWNpcGllbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm0uaGFuZGxlQ2hhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVjaXBpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWNpcGllbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuYnRuQm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLm15QnRuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNXYWl0aW5nT25UcmFuc2FjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2V0aFNjYW5MaW5rID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLm15QnRuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldGhTY2FuTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXRoZXJzY2FuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJtYWtlU3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VUb2tlbnNDb250ZXh0IiwidXNlV2ViM1JlYWN0IiwiZXRoZXJzIiwiVGV4dEZpZWxkIiwidXNlRm9ybWlrIiwieXVwIiwidXNlUm91dGVyIiwidmFsaWRhdGlvblNjaGVtYSIsIm9iamVjdCIsImFtb3VudCIsIm51bWJlciIsInJlcXVpcmVkIiwicmVjaXBpZW50Iiwic3RyaW5nIiwibWF0Y2hlcyIsInVzZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4R3JvdyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImlucHV0Qm94IiwibWF4V2lkdGgiLCJpbnB1dCIsIm1hcmdpbkJvdHRvbSIsIm15QnRuIiwiYnRuQm94IiwiZmxleERpcmVjdGlvbiIsIlRyYW5zZmVyIiwicm91dGVyIiwidG9rZW4iLCJzZXRUb2tlbiIsInF1ZXJ5IiwicmVwbGFjZSIsImNsYXNzZXMiLCJhY3RpdmUiLCJ0b2tlbnMiLCJzZWxlY3RlZFRva2VuIiwic2V0U2VsZWN0ZWRUb2tlbiIsImlzV2FpdGluZ09uVHJhbnNhY3Rpb24iLCJzZXRJc1dhaXRpbmdPblRyYW5zYWN0aW9uIiwiZXRoU2NhbkxpbmsiLCJzZXRFdGhTY2FuTGluayIsInRyYW5zRm9ybSIsImluaXRpYWxWYWx1ZXMiLCJvblN1Ym1pdCIsInZhbHVlcyIsInRyYW5zZmVyIiwiZGVmYXVsdERlY2ltYWxzIiwiZGVjaW1hbHMiLCJ1dGlscyIsInBhcnNlRXRoZXIiLCJ0b0ZpeGVkIiwidGhlbiIsInJlcyIsImhhc2giLCJ3YWl0IiwidmFsdWUiLCJyZXNldEZvcm0iLCJ1cGRhdGVOYXRpdmVCYWxhbmNlIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInZhbGlkYXRlIiwiZXJyb3IiLCJiYWxhbmNlIiwiYWxsIiwiT2JqZWN0Iiwia2V5cyIsInRrbiIsImZpbmQiLCJhZGRyIiwibmFtZSIsImhhbmRsZVN1Ym1pdCIsInRvdWNoZWQiLCJlcnJvcnMiLCJzeW1ib2wiLCJoYW5kbGVDaGFuZ2UiLCJCb29sZWFuIl0sInNvdXJjZVJvb3QiOiIifQ==