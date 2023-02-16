const express = require("express");
const history = require("connect-history-api-fallback");
const {createProxyMiddleware} = require("http-proxy-middleware");
const app = express();
app.use(history());// 如果找不到对应的资源，那么会使用index.html
app.use(express.static(__dirname));
app.use("/admin",createProxyMiddleware({
    target:"http://139.198.34.216:8212/admin/acl",
    changeOrigin:true,
    pathRewrite:{
        "^/admin":""
    }
}))
app.use("/syt",createProxyMiddleware({
    target:"http://syt-api.atguigu.cn",
    changeOrigin:true,
    pathRewrite: {
        "^/syt":""
    }
}))
app.listen(8090,function(){
    console.log("success");
})