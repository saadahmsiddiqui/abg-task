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
      setToken('ETH');
    } else {
      setToken(router.query.token);
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
        console.log(token);

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
          lineNumber: 194,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("small", {
          children: ["Balance:", " ", selectedToken ? selectedToken.balance.toFixed(4) : 0]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 235,
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
          lineNumber: 243,
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
            lineNumber: 283,
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
            lineNumber: 295,
            columnNumber: 29
          }, this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 183,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbi44MGUxMmIyZWQxNzMzNTFiYmI5Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNVyxnQkFBZ0IsR0FBR0YsdUNBQUEsQ0FBVztBQUNoQ0ksRUFBQUEsTUFBTSxFQUFFSix1Q0FBQSxHQUVITSxRQUZHLENBRU0sb0JBRk4sQ0FEd0I7QUFJaENDLEVBQUFBLFNBQVMsRUFBRVAsdUNBQUEsR0FFTlMsT0FGTSxDQUVFLHFCQUZGLEVBRXlCLHFCQUZ6QixFQUdOSCxRQUhNLENBSUgsdUJBSkc7QUFKcUIsQ0FBWCxDQUF6QjtBQVlBLE1BQU1JLFNBQVMsR0FBR2xCLCtEQUFVLENBQ3ZCbUIsS0FBRCxLQUFZO0FBQ1JDLEVBQUFBLElBQUksRUFBRTtBQUNGQyxJQUFBQSxPQUFPLEVBQUUsTUFEUDtBQUVGQyxJQUFBQSxRQUFRLEVBQUUsQ0FGUjtBQUdGQyxJQUFBQSxjQUFjLEVBQUUsUUFIZDtBQUlGQyxJQUFBQSxVQUFVLEVBQUUsUUFKVjtBQUtGQyxJQUFBQSxNQUFNLEVBQUU7QUFMTixHQURFO0FBUVJDLEVBQUFBLFFBQVEsRUFBRTtBQUNOQyxJQUFBQSxRQUFRLEVBQUU7QUFESixHQVJGO0FBV1JDLEVBQUFBLEtBQUssRUFBRTtBQUNIUCxJQUFBQSxPQUFPLEVBQUUsT0FETjtBQUVIUSxJQUFBQSxZQUFZLEVBQUU7QUFGWCxHQVhDO0FBZVJDLEVBQUFBLEtBQUssRUFBRTtBQUNIVCxJQUFBQSxPQUFPLEVBQUUsT0FETjtBQUVIUSxJQUFBQSxZQUFZLEVBQUU7QUFGWCxHQWZDO0FBbUJSRSxFQUFBQSxNQUFNLEVBQUU7QUFDSlYsSUFBQUEsT0FBTyxFQUFFLE1BREw7QUFFSlcsSUFBQUEsYUFBYSxFQUFFO0FBRlg7QUFuQkEsQ0FBWixDQUR3QixDQUE1QjtB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QUFPLENBQUNQLE1BRmhCO0FBQUEsa0NBS0ksOERBQUMsc0RBQUQ7QUFDSSxnQkFBSSxFQUFDLFFBRFQ7QUFFSSxxQkFBUyxFQUNMTyxPQUFPLENBQUNSLEtBSGhCO0FBS0ksbUJBQU8sRUFBQyxXQUxaO0FBTUksaUJBQUssRUFBQyxTQU5WO0FBT0ksb0JBQVEsRUFBRWEsc0JBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEosRUFnQktFLFdBQVcsZ0JBQ1IsOERBQUMsc0RBQUQ7QUFDSSxtQkFBTyxFQUFDLFdBRFo7QUFFSSxpQkFBSyxFQUFDLFNBRlY7QUFHSSxrQkFBTSxFQUFDLFFBSFg7QUFJSSxxQkFBUyxFQUNMUCxPQUFPLENBQUNSLEtBTGhCO0FBT0ksZ0JBQUksRUFDQWUsV0FSUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEUSxHQWVSLElBL0JSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6Rko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFJSDs7R0FoUXVCWjtVQUNMeEIsb0RBV0NTLFdBQ0dkLDREQUtmRCxrRUFXY0k7OztLQTdCRTBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RyYW5zZmVyL1RyYW5zZmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQnV0dG9uLFxyXG4gICAgSW5wdXQsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCJcclxuaW1wb3J0IHtcclxuICAgIHVzZUVmZmVjdCxcclxuICAgIHVzZVJlZHVjZXIsXHJcbiAgICB1c2VTdGF0ZSxcclxufSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VUb2tlbnNDb250ZXh0IH0gZnJvbSBcIi4uLy4uL1dlYjMvRXJjMjBDb250ZXh0XCJcclxuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIlxyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCJcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCJcclxuXHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSBcInl1cFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IHl1cC5vYmplY3Qoe1xyXG4gICAgYW1vdW50OiB5dXBcclxuICAgICAgICAubnVtYmVyKClcclxuICAgICAgICAucmVxdWlyZWQoXCJBbW91bnQgaXMgcmVxdWlyZWRcIiksXHJcbiAgICByZWNpcGllbnQ6IHl1cFxyXG4gICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgIC5tYXRjaGVzKC9eMHhbYS1mQS1GMC05XXs0MH0kLywgXCJJbnZhbGlkIEVUSCBBZGRyZXNzXCIpXHJcbiAgICAgICAgLnJlcXVpcmVkKFxyXG4gICAgICAgICAgICBcIlJlY2lwaWVudCBpcyByZXF1aXJlZFwiXHJcbiAgICAgICAgKSxcclxufSlcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoXHJcbiAgICAodGhlbWUpID0+ICh7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiY2FsYygxMDAlIC0gNjRweClcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlucHV0Qm94OiB7XHJcbiAgICAgICAgICAgIG1heFdpZHRoOiBcIjUwMHB4XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBteUJ0bjoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBidG5Cb3g6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zZmVyKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghcm91dGVyLnF1ZXJ5LnRva2VuKSB7XHJcbiAgICAgICAgICAgIHNldFRva2VuKCdFVEgnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRva2VuKHJvdXRlci5xdWVyeS50b2tlbilcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gICAgY29uc3QgeyBhY3RpdmUgfSA9IHVzZVdlYjNSZWFjdCgpXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgdG9rZW5zLFxyXG4gICAgICAgIHNlbGVjdGVkVG9rZW4sXHJcbiAgICAgICAgc2V0U2VsZWN0ZWRUb2tlbixcclxuICAgIH0gPSB1c2VUb2tlbnNDb250ZXh0KClcclxuXHJcbiAgICBjb25zdCBbXHJcbiAgICAgICAgaXNXYWl0aW5nT25UcmFuc2FjdGlvbixcclxuICAgICAgICBzZXRJc1dhaXRpbmdPblRyYW5zYWN0aW9uLFxyXG4gICAgXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW1xyXG4gICAgICAgIGV0aFNjYW5MaW5rLFxyXG4gICAgICAgIHNldEV0aFNjYW5MaW5rLFxyXG4gICAgXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXHJcblxyXG4gICAgY29uc3QgdHJhbnNGb3JtID0gdXNlRm9ybWlrKHtcclxuICAgICAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgICAgICAgIGFtb3VudDogXCJcIixcclxuICAgICAgICAgICAgcmVjaXBpZW50OiBcIlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYTpcclxuICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYSxcclxuICAgICAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRva2VuICYmXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRva2VuLnRyYW5zZmVyXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNXYWl0aW5nT25UcmFuc2FjdGlvbihcclxuICAgICAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdERlY2ltYWxzID0gMTg7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRUb2tlbi5kZWNpbWFscykgZGVmYXVsdERlY2ltYWxzID0gc2VsZWN0ZWRUb2tlbi5kZWNpbWFsc1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUb2tlblxyXG4gICAgICAgICAgICAgICAgICAgIC50cmFuc2ZlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnJlY2lwaWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXRoZXJzLnV0aWxzLnBhcnNlRXRoZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoK3ZhbHVlcy5hbW91bnQpLnRvRml4ZWQoZGVmYXVsdERlY2ltYWxzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXRoU2NhbkxpbmsoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaHR0cHM6Ly9yb3BzdGVuLmV0aGVyc2Nhbi5pby90eC8ke3Jlcy5oYXNofWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMud2FpdCgpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm0ucmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXRoU2NhbkxpbmsoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNXYWl0aW5nT25UcmFuc2FjdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRva2VuLnVwZGF0ZU5hdGl2ZUJhbGFuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUb2tlbi51cGRhdGVOYXRpdmVCYWxhbmNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzV2FpdGluZ09uVHJhbnNhY3Rpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZXJyLm1lc3NhZ2V9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGU6ICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgbGV0IGVycm9yID0ge307XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFRva2VuICYmICt2YWx1ZXMuYW1vdW50ID4gc2VsZWN0ZWRUb2tlbi5iYWxhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBhbW91bnQ6IFwiSW5zdWZmaWNpZW50IGJhbGFuY2UuXCJ9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGFjdGl2ZSAmJiB0b2tlbnMpIHtcclxuICAgICAgICAgICAgbGV0IGFsbCA9XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0b2tlbnMpXHJcblxyXG4gICAgICAgICAgICBsZXQgdGtuID0gYWxsLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAoYWRkcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zW2FkZHJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmFtZSA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgIGlmICh0a24pIHtcclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVG9rZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zW3Rrbl1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVG9rZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zW2FsbFswXV1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFthY3RpdmUsIHRva2VucywgdG9rZW5dKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtLmhhbmRsZVN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5pbnB1dEJveFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW1vdW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtgRW50ZXIgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVG9rZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGVjdGVkVG9rZW4uc3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gYW1vdW50YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbW91bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm0uaGFuZGxlQ2hhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW1vdW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbW91bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVudGVyIEFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJhbGFuY2U6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRUb2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxlY3RlZFRva2VuLmJhbGFuY2UudG9GaXhlZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlY2lwaWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWNpcGllbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17YEVudGVyIFJlY2lwaWVudCBBZGRyZXNzYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJlY2lwaWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVjaXBpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtLmhhbmRsZUNoYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlY2lwaWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVjaXBpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLmJ0bkJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5teUJ0blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzV2FpdGluZ09uVHJhbnNhY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtldGhTY2FuTGluayA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5teUJ0blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXRoU2NhbkxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV0aGVyc2NhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwibWFrZVN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlVG9rZW5zQ29udGV4dCIsInVzZVdlYjNSZWFjdCIsImV0aGVycyIsIlRleHRGaWVsZCIsInVzZUZvcm1payIsInl1cCIsInVzZVJvdXRlciIsInZhbGlkYXRpb25TY2hlbWEiLCJvYmplY3QiLCJhbW91bnQiLCJudW1iZXIiLCJyZXF1aXJlZCIsInJlY2lwaWVudCIsInN0cmluZyIsIm1hdGNoZXMiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiZmxleEdyb3ciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJpbnB1dEJveCIsIm1heFdpZHRoIiwiaW5wdXQiLCJtYXJnaW5Cb3R0b20iLCJteUJ0biIsImJ0bkJveCIsImZsZXhEaXJlY3Rpb24iLCJUcmFuc2ZlciIsInJvdXRlciIsInRva2VuIiwic2V0VG9rZW4iLCJxdWVyeSIsImNsYXNzZXMiLCJhY3RpdmUiLCJ0b2tlbnMiLCJzZWxlY3RlZFRva2VuIiwic2V0U2VsZWN0ZWRUb2tlbiIsImlzV2FpdGluZ09uVHJhbnNhY3Rpb24iLCJzZXRJc1dhaXRpbmdPblRyYW5zYWN0aW9uIiwiZXRoU2NhbkxpbmsiLCJzZXRFdGhTY2FuTGluayIsInRyYW5zRm9ybSIsImluaXRpYWxWYWx1ZXMiLCJvblN1Ym1pdCIsInZhbHVlcyIsInRyYW5zZmVyIiwiZGVmYXVsdERlY2ltYWxzIiwiZGVjaW1hbHMiLCJ1dGlscyIsInBhcnNlRXRoZXIiLCJ0b0ZpeGVkIiwidGhlbiIsInJlcyIsImhhc2giLCJ3YWl0IiwidmFsdWUiLCJyZXNldEZvcm0iLCJ1cGRhdGVOYXRpdmVCYWxhbmNlIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInZhbGlkYXRlIiwiZXJyb3IiLCJiYWxhbmNlIiwiYWxsIiwiT2JqZWN0Iiwia2V5cyIsInRrbiIsImZpbmQiLCJhZGRyIiwibmFtZSIsImhhbmRsZVN1Ym1pdCIsInRvdWNoZWQiLCJlcnJvcnMiLCJzeW1ib2wiLCJoYW5kbGVDaGFuZ2UiLCJCb29sZWFuIl0sInNvdXJjZVJvb3QiOiIifQ==