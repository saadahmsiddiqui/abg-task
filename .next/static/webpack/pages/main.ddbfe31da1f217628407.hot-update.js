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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!router.query.token) {
      router.replace('/main?token=ETH');
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
  }, [active, tokens]);
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
          lineNumber: 190,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("small", {
          children: ["Balance:", " ", selectedToken ? selectedToken.balance.toFixed(4) : 0]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 231,
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
          lineNumber: 239,
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
            lineNumber: 279,
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
            lineNumber: 291,
            columnNumber: 29
          }, this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 179,
    columnNumber: 9
  }, this);
}

_s(Transfer, "pgAnRoAqVWHHoNddt1ez3RSHAJw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbi5kZGJmZTMxZGExZjIxNzYyODQwNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNVyxnQkFBZ0IsR0FBR0YsdUNBQUEsQ0FBVztBQUNoQ0ksRUFBQUEsTUFBTSxFQUFFSix1Q0FBQSxHQUVITSxRQUZHLENBRU0sb0JBRk4sQ0FEd0I7QUFJaENDLEVBQUFBLFNBQVMsRUFBRVAsdUNBQUEsR0FFTlMsT0FGTSxDQUVFLHFCQUZGLEVBRXlCLHFCQUZ6QixFQUdOSCxRQUhNLENBSUgsdUJBSkc7QUFKcUIsQ0FBWCxDQUF6QjtBQVlBLE1BQU1JLFNBQVMsR0FBR2xCLCtEQUFVLENBQ3ZCbUIsS0FBRCxLQUFZO0FBQ1JDLEVBQUFBLElBQUksRUFBRTtBQUNGQyxJQUFBQSxPQUFPLEVBQUUsTUFEUDtBQUVGQyxJQUFBQSxRQUFRLEVBQUUsQ0FGUjtBQUdGQyxJQUFBQSxjQUFjLEVBQUUsUUFIZDtBQUlGQyxJQUFBQSxVQUFVLEVBQUUsUUFKVjtBQUtGQyxJQUFBQSxNQUFNLEVBQUU7QUFMTixHQURFO0FBUVJDLEVBQUFBLFFBQVEsRUFBRTtBQUNOQyxJQUFBQSxRQUFRLEVBQUU7QUFESixHQVJGO0FBV1JDLEVBQUFBLEtBQUssRUFBRTtBQUNIUCxJQUFBQSxPQUFPLEVBQUUsT0FETjtBQUVIUSxJQUFBQSxZQUFZLEVBQUU7QUFGWCxHQVhDO0FBZVJDLEVBQUFBLEtBQUssRUFBRTtBQUNIVCxJQUFBQSxPQUFPLEVBQUUsT0FETjtBQUVIUSxJQUFBQSxZQUFZLEVBQUU7QUFGWCxHQWZDO0FBbUJSRSxFQUFBQSxNQUFNLEVBQUU7QUFDSlYsSUFBQUEsT0FBTyxFQUFFLE1BREw7QUFFSlcsSUFBQUEsYUFBYSxFQUFFO0FBRlg7QUFuQkEsQ0FBWixDQUR3QixDQUE1QjtB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a0JBTEosRUFnQktFLFdBQVcsZ0JBQ1IsOERBQUMsc0RBQUQ7QUFDSSxtQkFBTyxFQUFDLFdBRFo7QUFFSSxpQkFBSyxFQUFDLFNBRlY7QUFHSSxrQkFBTSxFQUFDLFFBSFg7QUFJSSxxQkFBUyxFQUNMUCxPQUFPLENBQUNSLEtBTGhCO0FBT0ksZ0JBQUksRUFDQWUsV0FSUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEUSxHQWVSLElBL0JSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6Rko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFJSDs7R0E1UHVCWjtVQUNMeEIsb0RBUUNTLFdBQ0dkLDREQUtmRCxrRUFXY0k7OztLQTFCRTBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RyYW5zZmVyL1RyYW5zZmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQnV0dG9uLFxyXG4gICAgSW5wdXQsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCJcclxuaW1wb3J0IHtcclxuICAgIHVzZUVmZmVjdCxcclxuICAgIHVzZVJlZHVjZXIsXHJcbiAgICB1c2VTdGF0ZSxcclxufSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VUb2tlbnNDb250ZXh0IH0gZnJvbSBcIi4uLy4uL1dlYjMvRXJjMjBDb250ZXh0XCJcclxuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIlxyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCJcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCJcclxuXHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSBcInl1cFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IHl1cC5vYmplY3Qoe1xyXG4gICAgYW1vdW50OiB5dXBcclxuICAgICAgICAubnVtYmVyKClcclxuICAgICAgICAucmVxdWlyZWQoXCJBbW91bnQgaXMgcmVxdWlyZWRcIiksXHJcbiAgICByZWNpcGllbnQ6IHl1cFxyXG4gICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgIC5tYXRjaGVzKC9eMHhbYS1mQS1GMC05XXs0MH0kLywgXCJJbnZhbGlkIEVUSCBBZGRyZXNzXCIpXHJcbiAgICAgICAgLnJlcXVpcmVkKFxyXG4gICAgICAgICAgICBcIlJlY2lwaWVudCBpcyByZXF1aXJlZFwiXHJcbiAgICAgICAgKSxcclxufSlcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoXHJcbiAgICAodGhlbWUpID0+ICh7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiY2FsYygxMDAlIC0gNjRweClcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlucHV0Qm94OiB7XHJcbiAgICAgICAgICAgIG1heFdpZHRoOiBcIjUwMHB4XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBteUJ0bjoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBidG5Cb3g6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zZmVyKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFyb3V0ZXIucXVlcnkudG9rZW4pIHtcclxuICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoJy9tYWluP3Rva2VuPUVUSCcpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICAgIGNvbnN0IHsgYWN0aXZlIH0gPSB1c2VXZWIzUmVhY3QoKVxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHRva2VucyxcclxuICAgICAgICBzZWxlY3RlZFRva2VuLFxyXG4gICAgICAgIHNldFNlbGVjdGVkVG9rZW4sXHJcbiAgICB9ID0gdXNlVG9rZW5zQ29udGV4dCgpXHJcblxyXG4gICAgY29uc3QgW1xyXG4gICAgICAgIGlzV2FpdGluZ09uVHJhbnNhY3Rpb24sXHJcbiAgICAgICAgc2V0SXNXYWl0aW5nT25UcmFuc2FjdGlvbixcclxuICAgIF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtcclxuICAgICAgICBldGhTY2FuTGluayxcclxuICAgICAgICBzZXRFdGhTY2FuTGluayxcclxuICAgIF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxyXG5cclxuICAgIGNvbnN0IHRyYW5zRm9ybSA9IHVzZUZvcm1payh7XHJcbiAgICAgICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICAgICAgICBhbW91bnQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHJlY2lwaWVudDogXCJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE6XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWEsXHJcbiAgICAgICAgb25TdWJtaXQ6ICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUb2tlbiAmJlxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUb2tlbi50cmFuc2ZlclxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHNldElzV2FpdGluZ09uVHJhbnNhY3Rpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHREZWNpbWFscyA9IDE4O1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkVG9rZW4uZGVjaW1hbHMpIGRlZmF1bHREZWNpbWFscyA9IHNlbGVjdGVkVG9rZW4uZGVjaW1hbHNcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVG9rZW5cclxuICAgICAgICAgICAgICAgICAgICAudHJhbnNmZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5yZWNpcGllbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV0aGVycy51dGlscy5wYXJzZUV0aGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCt2YWx1ZXMuYW1vdW50KS50b0ZpeGVkKGRlZmF1bHREZWNpbWFscylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEV0aFNjYW5MaW5rKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGh0dHBzOi8vcm9wc3Rlbi5ldGhlcnNjYW4uaW8vdHgvJHtyZXMuaGFzaH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLndhaXQoKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtLnJlc2V0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEV0aFNjYW5MaW5rKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzV2FpdGluZ09uVHJhbnNhY3Rpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUb2tlbi51cGRhdGVOYXRpdmVCYWxhbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVG9rZW4udXBkYXRlTmF0aXZlQmFsYW5jZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1dhaXRpbmdPblRyYW5zYWN0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2Vyci5tZXNzYWdlfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkYXRlOiAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlcnJvciA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRUb2tlbiAmJiArdmFsdWVzLmFtb3VudCA+IHNlbGVjdGVkVG9rZW4uYmFsYW5jZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgYW1vdW50OiBcIkluc3VmZmljaWVudCBiYWxhbmNlLlwifTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChhY3RpdmUgJiYgdG9rZW5zKSB7XHJcbiAgICAgICAgICAgIGxldCBhbGwgPVxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXModG9rZW5zKVxyXG5cclxuICAgICAgICAgICAgbGV0IHRrbiA9IGFsbC5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGFkZHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vuc1thZGRyXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5hbWUgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICBpZiAodGtuKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRva2VuKFxyXG4gICAgICAgICAgICAgICAgICAgIHRva2Vuc1t0a25dXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRva2VuKFxyXG4gICAgICAgICAgICAgICAgICAgIHRva2Vuc1thbGxbMF1dXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbYWN0aXZlLCB0b2tlbnNdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtLmhhbmRsZVN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5pbnB1dEJveFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW1vdW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtgRW50ZXIgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVG9rZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGVjdGVkVG9rZW4uc3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gYW1vdW50YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbW91bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm0uaGFuZGxlQ2hhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW1vdW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbW91bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVudGVyIEFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJhbGFuY2U6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRUb2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxlY3RlZFRva2VuLmJhbGFuY2UudG9GaXhlZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlY2lwaWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWNpcGllbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17YEVudGVyIFJlY2lwaWVudCBBZGRyZXNzYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJlY2lwaWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVjaXBpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtLmhhbmRsZUNoYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlY2lwaWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVjaXBpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLmJ0bkJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5teUJ0blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzV2FpdGluZ09uVHJhbnNhY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtldGhTY2FuTGluayA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5teUJ0blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXRoU2NhbkxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV0aGVyc2NhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwibWFrZVN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlVG9rZW5zQ29udGV4dCIsInVzZVdlYjNSZWFjdCIsImV0aGVycyIsIlRleHRGaWVsZCIsInVzZUZvcm1payIsInl1cCIsInVzZVJvdXRlciIsInZhbGlkYXRpb25TY2hlbWEiLCJvYmplY3QiLCJhbW91bnQiLCJudW1iZXIiLCJyZXF1aXJlZCIsInJlY2lwaWVudCIsInN0cmluZyIsIm1hdGNoZXMiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiZmxleEdyb3ciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJpbnB1dEJveCIsIm1heFdpZHRoIiwiaW5wdXQiLCJtYXJnaW5Cb3R0b20iLCJteUJ0biIsImJ0bkJveCIsImZsZXhEaXJlY3Rpb24iLCJUcmFuc2ZlciIsInJvdXRlciIsInF1ZXJ5IiwidG9rZW4iLCJyZXBsYWNlIiwiY2xhc3NlcyIsImFjdGl2ZSIsInRva2VucyIsInNlbGVjdGVkVG9rZW4iLCJzZXRTZWxlY3RlZFRva2VuIiwiaXNXYWl0aW5nT25UcmFuc2FjdGlvbiIsInNldElzV2FpdGluZ09uVHJhbnNhY3Rpb24iLCJldGhTY2FuTGluayIsInNldEV0aFNjYW5MaW5rIiwidHJhbnNGb3JtIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwidmFsdWVzIiwidHJhbnNmZXIiLCJkZWZhdWx0RGVjaW1hbHMiLCJkZWNpbWFscyIsInV0aWxzIiwicGFyc2VFdGhlciIsInRvRml4ZWQiLCJ0aGVuIiwicmVzIiwiaGFzaCIsIndhaXQiLCJ2YWx1ZSIsInJlc2V0Rm9ybSIsInVwZGF0ZU5hdGl2ZUJhbGFuY2UiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwidmFsaWRhdGUiLCJlcnJvciIsImJhbGFuY2UiLCJhbGwiLCJPYmplY3QiLCJrZXlzIiwidGtuIiwiZmluZCIsImFkZHIiLCJuYW1lIiwiaGFuZGxlU3VibWl0IiwidG91Y2hlZCIsImVycm9ycyIsInN5bWJvbCIsImhhbmRsZUNoYW5nZSIsIkJvb2xlYW4iXSwic291cmNlUm9vdCI6IiJ9