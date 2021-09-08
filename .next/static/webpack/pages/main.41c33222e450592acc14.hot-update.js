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
      console.log('REDIRECT');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbi40MWMzMzIyMmU0NTA1OTJhY2MxNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNVyxnQkFBZ0IsR0FBR0YsdUNBQUEsQ0FBVztBQUNoQ0ksRUFBQUEsTUFBTSxFQUFFSix1Q0FBQSxHQUVITSxRQUZHLENBRU0sb0JBRk4sQ0FEd0I7QUFJaENDLEVBQUFBLFNBQVMsRUFBRVAsdUNBQUEsR0FFTlMsT0FGTSxDQUVFLHFCQUZGLEVBRXlCLHFCQUZ6QixFQUdOSCxRQUhNLENBSUgsdUJBSkc7QUFKcUIsQ0FBWCxDQUF6QjtBQVlBLE1BQU1JLFNBQVMsR0FBR2xCLCtEQUFVLENBQ3ZCbUIsS0FBRCxLQUFZO0FBQ1JDLEVBQUFBLElBQUksRUFBRTtBQUNGQyxJQUFBQSxPQUFPLEVBQUUsTUFEUDtBQUVGQyxJQUFBQSxRQUFRLEVBQUUsQ0FGUjtBQUdGQyxJQUFBQSxjQUFjLEVBQUUsUUFIZDtBQUlGQyxJQUFBQSxVQUFVLEVBQUUsUUFKVjtBQUtGQyxJQUFBQSxNQUFNLEVBQUU7QUFMTixHQURFO0FBUVJDLEVBQUFBLFFBQVEsRUFBRTtBQUNOQyxJQUFBQSxRQUFRLEVBQUU7QUFESixHQVJGO0FBV1JDLEVBQUFBLEtBQUssRUFBRTtBQUNIUCxJQUFBQSxPQUFPLEVBQUUsT0FETjtBQUVIUSxJQUFBQSxZQUFZLEVBQUU7QUFGWCxHQVhDO0FBZVJDLEVBQUFBLEtBQUssRUFBRTtBQUNIVCxJQUFBQSxPQUFPLEVBQUUsT0FETjtBQUVIUSxJQUFBQSxZQUFZLEVBQUU7QUFGWCxHQWZDO0FBbUJSRSxFQUFBQSxNQUFNLEVBQUU7QUFDSlYsSUFBQUEsT0FBTyxFQUFFLE1BREw7QUFFSlcsSUFBQUEsYUFBYSxFQUFFO0FBRlg7QUFuQkEsQ0FBWixDQUR3QixDQUE1QjtB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QkFMSixFQWdCS0UsV0FBVyxnQkFDUiw4REFBQyxzREFBRDtBQUNJLG1CQUFPLEVBQUMsV0FEWjtBQUVJLGlCQUFLLEVBQUMsU0FGVjtBQUdJLGtCQUFNLEVBQUMsUUFIWDtBQUlJLHFCQUFTLEVBQ0xQLE9BQU8sQ0FBQ1QsS0FMaEI7QUFPSSxnQkFBSSxFQUNBZ0IsV0FSUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEUSxHQWVSLElBL0JSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6Rko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFJSDs7R0E1UHVCYjtVQUNMeEIsb0RBUUNTLFdBQ0dkLDREQUtmRCxrRUFXY0k7OztLQTFCRTBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RyYW5zZmVyL1RyYW5zZmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQnV0dG9uLFxyXG4gICAgSW5wdXQsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCJcclxuaW1wb3J0IHtcclxuICAgIHVzZUVmZmVjdCxcclxuICAgIHVzZVJlZHVjZXIsXHJcbiAgICB1c2VTdGF0ZSxcclxufSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VUb2tlbnNDb250ZXh0IH0gZnJvbSBcIi4uLy4uL1dlYjMvRXJjMjBDb250ZXh0XCJcclxuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIlxyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCJcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCJcclxuXHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSBcInl1cFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IHl1cC5vYmplY3Qoe1xyXG4gICAgYW1vdW50OiB5dXBcclxuICAgICAgICAubnVtYmVyKClcclxuICAgICAgICAucmVxdWlyZWQoXCJBbW91bnQgaXMgcmVxdWlyZWRcIiksXHJcbiAgICByZWNpcGllbnQ6IHl1cFxyXG4gICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgIC5tYXRjaGVzKC9eMHhbYS1mQS1GMC05XXs0MH0kLywgXCJJbnZhbGlkIEVUSCBBZGRyZXNzXCIpXHJcbiAgICAgICAgLnJlcXVpcmVkKFxyXG4gICAgICAgICAgICBcIlJlY2lwaWVudCBpcyByZXF1aXJlZFwiXHJcbiAgICAgICAgKSxcclxufSlcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoXHJcbiAgICAodGhlbWUpID0+ICh7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiY2FsYygxMDAlIC0gNjRweClcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlucHV0Qm94OiB7XHJcbiAgICAgICAgICAgIG1heFdpZHRoOiBcIjUwMHB4XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBteUJ0bjoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBidG5Cb3g6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zZmVyKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFyb3V0ZXIucXVlcnkudG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JFRElSRUNUJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gICAgY29uc3QgeyBhY3RpdmUgfSA9IHVzZVdlYjNSZWFjdCgpXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgdG9rZW5zLFxyXG4gICAgICAgIHNlbGVjdGVkVG9rZW4sXHJcbiAgICAgICAgc2V0U2VsZWN0ZWRUb2tlbixcclxuICAgIH0gPSB1c2VUb2tlbnNDb250ZXh0KClcclxuXHJcbiAgICBjb25zdCBbXHJcbiAgICAgICAgaXNXYWl0aW5nT25UcmFuc2FjdGlvbixcclxuICAgICAgICBzZXRJc1dhaXRpbmdPblRyYW5zYWN0aW9uLFxyXG4gICAgXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW1xyXG4gICAgICAgIGV0aFNjYW5MaW5rLFxyXG4gICAgICAgIHNldEV0aFNjYW5MaW5rLFxyXG4gICAgXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXHJcblxyXG4gICAgY29uc3QgdHJhbnNGb3JtID0gdXNlRm9ybWlrKHtcclxuICAgICAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgICAgICAgIGFtb3VudDogXCJcIixcclxuICAgICAgICAgICAgcmVjaXBpZW50OiBcIlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYTpcclxuICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYSxcclxuICAgICAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRva2VuICYmXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRva2VuLnRyYW5zZmVyXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNXYWl0aW5nT25UcmFuc2FjdGlvbihcclxuICAgICAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdERlY2ltYWxzID0gMTg7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRUb2tlbi5kZWNpbWFscykgZGVmYXVsdERlY2ltYWxzID0gc2VsZWN0ZWRUb2tlbi5kZWNpbWFsc1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUb2tlblxyXG4gICAgICAgICAgICAgICAgICAgIC50cmFuc2ZlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnJlY2lwaWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXRoZXJzLnV0aWxzLnBhcnNlRXRoZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoK3ZhbHVlcy5hbW91bnQpLnRvRml4ZWQoZGVmYXVsdERlY2ltYWxzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXRoU2NhbkxpbmsoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaHR0cHM6Ly9yb3BzdGVuLmV0aGVyc2Nhbi5pby90eC8ke3Jlcy5oYXNofWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMud2FpdCgpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm0ucmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXRoU2NhbkxpbmsoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNXYWl0aW5nT25UcmFuc2FjdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRva2VuLnVwZGF0ZU5hdGl2ZUJhbGFuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUb2tlbi51cGRhdGVOYXRpdmVCYWxhbmNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzV2FpdGluZ09uVHJhbnNhY3Rpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZXJyLm1lc3NhZ2V9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGU6ICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgbGV0IGVycm9yID0ge307XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFRva2VuICYmICt2YWx1ZXMuYW1vdW50ID4gc2VsZWN0ZWRUb2tlbi5iYWxhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBhbW91bnQ6IFwiSW5zdWZmaWNpZW50IGJhbGFuY2UuXCJ9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGFjdGl2ZSAmJiB0b2tlbnMpIHtcclxuICAgICAgICAgICAgbGV0IGFsbCA9XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0b2tlbnMpXHJcblxyXG4gICAgICAgICAgICBsZXQgdGtuID0gYWxsLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAoYWRkcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zW2FkZHJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmFtZSA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgIGlmICh0a24pIHtcclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVG9rZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zW3Rrbl1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVG9rZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zW2FsbFswXV1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFthY3RpdmUsIHRva2Vuc10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm0uaGFuZGxlU3VibWl0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLmlucHV0Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbW91bnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2BFbnRlciAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUb2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZWN0ZWRUb2tlbi5zeW1ib2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBhbW91bnRgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybS5oYW5kbGVDaGFuZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbW91bnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRW50ZXIgQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQmFsYW5jZTp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGVjdGVkVG9rZW4uYmFsYW5jZS50b0ZpeGVkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVjaXBpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlY2lwaWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtgRW50ZXIgUmVjaXBpZW50IEFkZHJlc3NgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVjaXBpZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWNpcGllbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm0uaGFuZGxlQ2hhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVjaXBpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWNpcGllbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuYnRuQm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLm15QnRuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNXYWl0aW5nT25UcmFuc2FjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2V0aFNjYW5MaW5rID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLm15QnRuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldGhTY2FuTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXRoZXJzY2FuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJtYWtlU3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VUb2tlbnNDb250ZXh0IiwidXNlV2ViM1JlYWN0IiwiZXRoZXJzIiwiVGV4dEZpZWxkIiwidXNlRm9ybWlrIiwieXVwIiwidXNlUm91dGVyIiwidmFsaWRhdGlvblNjaGVtYSIsIm9iamVjdCIsImFtb3VudCIsIm51bWJlciIsInJlcXVpcmVkIiwicmVjaXBpZW50Iiwic3RyaW5nIiwibWF0Y2hlcyIsInVzZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4R3JvdyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImlucHV0Qm94IiwibWF4V2lkdGgiLCJpbnB1dCIsIm1hcmdpbkJvdHRvbSIsIm15QnRuIiwiYnRuQm94IiwiZmxleERpcmVjdGlvbiIsIlRyYW5zZmVyIiwicm91dGVyIiwicXVlcnkiLCJ0b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwiYWN0aXZlIiwidG9rZW5zIiwic2VsZWN0ZWRUb2tlbiIsInNldFNlbGVjdGVkVG9rZW4iLCJpc1dhaXRpbmdPblRyYW5zYWN0aW9uIiwic2V0SXNXYWl0aW5nT25UcmFuc2FjdGlvbiIsImV0aFNjYW5MaW5rIiwic2V0RXRoU2NhbkxpbmsiLCJ0cmFuc0Zvcm0iLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJ0cmFuc2ZlciIsImRlZmF1bHREZWNpbWFscyIsImRlY2ltYWxzIiwidXRpbHMiLCJwYXJzZUV0aGVyIiwidG9GaXhlZCIsInRoZW4iLCJyZXMiLCJoYXNoIiwid2FpdCIsInZhbHVlIiwicmVzZXRGb3JtIiwidXBkYXRlTmF0aXZlQmFsYW5jZSIsImNhdGNoIiwiZXJyIiwibWVzc2FnZSIsInZhbGlkYXRlIiwiZXJyb3IiLCJiYWxhbmNlIiwiYWxsIiwiT2JqZWN0Iiwia2V5cyIsInRrbiIsImZpbmQiLCJhZGRyIiwibmFtZSIsImhhbmRsZVN1Ym1pdCIsInRvdWNoZWQiLCJlcnJvcnMiLCJzeW1ib2wiLCJoYW5kbGVDaGFuZ2UiLCJCb29sZWFuIl0sInNvdXJjZVJvb3QiOiIifQ==