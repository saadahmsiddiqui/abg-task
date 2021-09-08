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
    console.log(router.query.token);

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
          lineNumber: 195,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("small", {
          children: ["Balance:", " ", selectedToken ? selectedToken.balance.toFixed(4) : 0]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 236,
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
          lineNumber: 244,
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
            lineNumber: 284,
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
            lineNumber: 296,
            columnNumber: 29
          }, this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 184,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbi42MzhiYWIxMGE4ZTI4N2EwNmE5MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNVyxnQkFBZ0IsR0FBR0YsdUNBQUEsQ0FBVztBQUNoQ0ksRUFBQUEsTUFBTSxFQUFFSix1Q0FBQSxHQUVITSxRQUZHLENBRU0sb0JBRk4sQ0FEd0I7QUFJaENDLEVBQUFBLFNBQVMsRUFBRVAsdUNBQUEsR0FFTlMsT0FGTSxDQUVFLHFCQUZGLEVBRXlCLHFCQUZ6QixFQUdOSCxRQUhNLENBSUgsdUJBSkc7QUFKcUIsQ0FBWCxDQUF6QjtBQVlBLE1BQU1JLFNBQVMsR0FBR2xCLCtEQUFVLENBQ3ZCbUIsS0FBRCxLQUFZO0FBQ1JDLEVBQUFBLElBQUksRUFBRTtBQUNGQyxJQUFBQSxPQUFPLEVBQUUsTUFEUDtBQUVGQyxJQUFBQSxRQUFRLEVBQUUsQ0FGUjtBQUdGQyxJQUFBQSxjQUFjLEVBQUUsUUFIZDtBQUlGQyxJQUFBQSxVQUFVLEVBQUUsUUFKVjtBQUtGQyxJQUFBQSxNQUFNLEVBQUU7QUFMTixHQURFO0FBUVJDLEVBQUFBLFFBQVEsRUFBRTtBQUNOQyxJQUFBQSxRQUFRLEVBQUU7QUFESixHQVJGO0FBV1JDLEVBQUFBLEtBQUssRUFBRTtBQUNIUCxJQUFBQSxPQUFPLEVBQUUsT0FETjtBQUVIUSxJQUFBQSxZQUFZLEVBQUU7QUFGWCxHQVhDO0FBZVJDLEVBQUFBLEtBQUssRUFBRTtBQUNIVCxJQUFBQSxPQUFPLEVBQUUsT0FETjtBQUVIUSxJQUFBQSxZQUFZLEVBQUU7QUFGWCxHQWZDO0FBbUJSRSxFQUFBQSxNQUFNLEVBQUU7QUFDSlYsSUFBQUEsT0FBTyxFQUFFLE1BREw7QUFFSlcsSUFBQUEsYUFBYSxFQUFFO0FBRlg7QUFuQkEsQ0FBWixDQUR3QixDQUE1QjtB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QUE7QUFBQTtBQUFBO0FBQUEsZ0JBdERKLGVBeUZJO0FBQ0ksbUJBQVMsRUFDTGEsT0FBTyxDQUFDVixNQUZoQjtBQUFBLGtDQUtJLDhEQUFDLHNEQUFEO0FBQ0ksZ0JBQUksRUFBQyxRQURUO0FBRUkscUJBQVMsRUFDTFUsT0FBTyxDQUFDWCxLQUhoQjtBQUtJLG1CQUFPLEVBQUMsV0FMWjtBQU1JLGlCQUFLLEVBQUMsU0FOVjtBQU9JLG9CQUFRLEVBQUVnQixzQkFQZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSixFQWdCS0UsV0FBVyxnQkFDUiw4REFBQyxzREFBRDtBQUNJLG1CQUFPLEVBQUMsV0FEWjtBQUVJLGlCQUFLLEVBQUMsU0FGVjtBQUdJLGtCQUFNLEVBQUMsUUFIWDtBQUlJLHFCQUFTLEVBQ0xQLE9BQU8sQ0FBQ1gsS0FMaEI7QUFPSSxnQkFBSSxFQUNBa0IsV0FSUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEUSxHQWVSLElBL0JSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6Rko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFJSDs7R0FqUXVCZjtVQUNMeEIsb0RBWUNTLFdBQ0dkLDREQUtmRCxrRUFXY0k7OztLQTlCRTBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RyYW5zZmVyL1RyYW5zZmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQnV0dG9uLFxyXG4gICAgSW5wdXQsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCJcclxuaW1wb3J0IHtcclxuICAgIHVzZUVmZmVjdCxcclxuICAgIHVzZVJlZHVjZXIsXHJcbiAgICB1c2VTdGF0ZSxcclxufSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VUb2tlbnNDb250ZXh0IH0gZnJvbSBcIi4uLy4uL1dlYjMvRXJjMjBDb250ZXh0XCJcclxuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIlxyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCJcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCJcclxuXHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSBcInl1cFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IHl1cC5vYmplY3Qoe1xyXG4gICAgYW1vdW50OiB5dXBcclxuICAgICAgICAubnVtYmVyKClcclxuICAgICAgICAucmVxdWlyZWQoXCJBbW91bnQgaXMgcmVxdWlyZWRcIiksXHJcbiAgICByZWNpcGllbnQ6IHl1cFxyXG4gICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgIC5tYXRjaGVzKC9eMHhbYS1mQS1GMC05XXs0MH0kLywgXCJJbnZhbGlkIEVUSCBBZGRyZXNzXCIpXHJcbiAgICAgICAgLnJlcXVpcmVkKFxyXG4gICAgICAgICAgICBcIlJlY2lwaWVudCBpcyByZXF1aXJlZFwiXHJcbiAgICAgICAgKSxcclxufSlcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoXHJcbiAgICAodGhlbWUpID0+ICh7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiY2FsYygxMDAlIC0gNjRweClcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlucHV0Qm94OiB7XHJcbiAgICAgICAgICAgIG1heFdpZHRoOiBcIjUwMHB4XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBteUJ0bjoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBidG5Cb3g6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zZmVyKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeS50b2tlbilcclxuICAgICAgICBpZiAoIXJvdXRlci5xdWVyeS50b2tlbikge1xyXG4gICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL21haW4/dG9rZW49RVRIJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUb2tlbih0b2tlbilcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gICAgY29uc3QgeyBhY3RpdmUgfSA9IHVzZVdlYjNSZWFjdCgpXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgdG9rZW5zLFxyXG4gICAgICAgIHNlbGVjdGVkVG9rZW4sXHJcbiAgICAgICAgc2V0U2VsZWN0ZWRUb2tlbixcclxuICAgIH0gPSB1c2VUb2tlbnNDb250ZXh0KClcclxuXHJcbiAgICBjb25zdCBbXHJcbiAgICAgICAgaXNXYWl0aW5nT25UcmFuc2FjdGlvbixcclxuICAgICAgICBzZXRJc1dhaXRpbmdPblRyYW5zYWN0aW9uLFxyXG4gICAgXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW1xyXG4gICAgICAgIGV0aFNjYW5MaW5rLFxyXG4gICAgICAgIHNldEV0aFNjYW5MaW5rLFxyXG4gICAgXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXHJcblxyXG4gICAgY29uc3QgdHJhbnNGb3JtID0gdXNlRm9ybWlrKHtcclxuICAgICAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgICAgICAgIGFtb3VudDogXCJcIixcclxuICAgICAgICAgICAgcmVjaXBpZW50OiBcIlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYTpcclxuICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYSxcclxuICAgICAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRva2VuICYmXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRva2VuLnRyYW5zZmVyXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNXYWl0aW5nT25UcmFuc2FjdGlvbihcclxuICAgICAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdERlY2ltYWxzID0gMTg7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRUb2tlbi5kZWNpbWFscykgZGVmYXVsdERlY2ltYWxzID0gc2VsZWN0ZWRUb2tlbi5kZWNpbWFsc1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUb2tlblxyXG4gICAgICAgICAgICAgICAgICAgIC50cmFuc2ZlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnJlY2lwaWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXRoZXJzLnV0aWxzLnBhcnNlRXRoZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoK3ZhbHVlcy5hbW91bnQpLnRvRml4ZWQoZGVmYXVsdERlY2ltYWxzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXRoU2NhbkxpbmsoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaHR0cHM6Ly9yb3BzdGVuLmV0aGVyc2Nhbi5pby90eC8ke3Jlcy5oYXNofWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMud2FpdCgpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm0ucmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXRoU2NhbkxpbmsoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNXYWl0aW5nT25UcmFuc2FjdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRva2VuLnVwZGF0ZU5hdGl2ZUJhbGFuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUb2tlbi51cGRhdGVOYXRpdmVCYWxhbmNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzV2FpdGluZ09uVHJhbnNhY3Rpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZXJyLm1lc3NhZ2V9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGU6ICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgbGV0IGVycm9yID0ge307XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFRva2VuICYmICt2YWx1ZXMuYW1vdW50ID4gc2VsZWN0ZWRUb2tlbi5iYWxhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBhbW91bnQ6IFwiSW5zdWZmaWNpZW50IGJhbGFuY2UuXCJ9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGFjdGl2ZSAmJiB0b2tlbnMpIHtcclxuICAgICAgICAgICAgbGV0IGFsbCA9XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0b2tlbnMpXHJcblxyXG4gICAgICAgICAgICBsZXQgdGtuID0gYWxsLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAoYWRkcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zW2FkZHJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmFtZSA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgIGlmICh0a24pIHtcclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVG9rZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zW3Rrbl1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVG9rZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zW2FsbFswXV1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFthY3RpdmUsIHRva2VucywgdG9rZW5dKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtLmhhbmRsZVN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5pbnB1dEJveFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW1vdW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtgRW50ZXIgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVG9rZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGVjdGVkVG9rZW4uc3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gYW1vdW50YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbW91bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm0uaGFuZGxlQ2hhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW1vdW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbW91bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVudGVyIEFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJhbGFuY2U6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRUb2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxlY3RlZFRva2VuLmJhbGFuY2UudG9GaXhlZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlY2lwaWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWNpcGllbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17YEVudGVyIFJlY2lwaWVudCBBZGRyZXNzYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJlY2lwaWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVjaXBpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtLmhhbmRsZUNoYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlY2lwaWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVjaXBpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLmJ0bkJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5teUJ0blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzV2FpdGluZ09uVHJhbnNhY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtldGhTY2FuTGluayA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5teUJ0blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXRoU2NhbkxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV0aGVyc2NhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwibWFrZVN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlVG9rZW5zQ29udGV4dCIsInVzZVdlYjNSZWFjdCIsImV0aGVycyIsIlRleHRGaWVsZCIsInVzZUZvcm1payIsInl1cCIsInVzZVJvdXRlciIsInZhbGlkYXRpb25TY2hlbWEiLCJvYmplY3QiLCJhbW91bnQiLCJudW1iZXIiLCJyZXF1aXJlZCIsInJlY2lwaWVudCIsInN0cmluZyIsIm1hdGNoZXMiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiZmxleEdyb3ciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJpbnB1dEJveCIsIm1heFdpZHRoIiwiaW5wdXQiLCJtYXJnaW5Cb3R0b20iLCJteUJ0biIsImJ0bkJveCIsImZsZXhEaXJlY3Rpb24iLCJUcmFuc2ZlciIsInJvdXRlciIsInRva2VuIiwic2V0VG9rZW4iLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJyZXBsYWNlIiwiY2xhc3NlcyIsImFjdGl2ZSIsInRva2VucyIsInNlbGVjdGVkVG9rZW4iLCJzZXRTZWxlY3RlZFRva2VuIiwiaXNXYWl0aW5nT25UcmFuc2FjdGlvbiIsInNldElzV2FpdGluZ09uVHJhbnNhY3Rpb24iLCJldGhTY2FuTGluayIsInNldEV0aFNjYW5MaW5rIiwidHJhbnNGb3JtIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwidmFsdWVzIiwidHJhbnNmZXIiLCJkZWZhdWx0RGVjaW1hbHMiLCJkZWNpbWFscyIsInV0aWxzIiwicGFyc2VFdGhlciIsInRvRml4ZWQiLCJ0aGVuIiwicmVzIiwiaGFzaCIsIndhaXQiLCJ2YWx1ZSIsInJlc2V0Rm9ybSIsInVwZGF0ZU5hdGl2ZUJhbGFuY2UiLCJjYXRjaCIsImVyciIsIm1lc3NhZ2UiLCJ2YWxpZGF0ZSIsImVycm9yIiwiYmFsYW5jZSIsImFsbCIsIk9iamVjdCIsImtleXMiLCJ0a24iLCJmaW5kIiwiYWRkciIsIm5hbWUiLCJoYW5kbGVTdWJtaXQiLCJ0b3VjaGVkIiwiZXJyb3JzIiwic3ltYm9sIiwiaGFuZGxlQ2hhbmdlIiwiQm9vbGVhbiJdLCJzb3VyY2VSb290IjoiIn0=