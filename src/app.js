const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const session = require("koa-generic-session");
const cors = require("koa-cors");
const koaBody = require('./middleware/koa-body');

const index = require("./routes/index");
const users = require("./routes/users");
const addressRouter = require("./routes/addressRouter");
const shopRouter = require("./routes/shopRouter");
const orderRouter = require("./routes/orderRouter");
const fileRouter = require("./routes/fileRouter");

// error handler
onerror(app);

// middlewares
app.use(
    bodyparser({
        enableTypes: ["json", "form", "text"],
    })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

app.use(
    views(__dirname + "/views", {
        extension: "pug",
    })
);

//设置cors跨域请求
app.use(
    cors({
        // origin: "http://localhost:8088", //前端origin
        credentials: true, //允许跨域带cookie
        methods: ["GET","POST","PATCH","DELETE"]
    })
);
//设置文件请求
app.use(koaBody);

//设置秘钥
app.keys = ["solomonKey"];

//设置session
app.use(
    session({
        cookie: {
            //设置cookie
            path: "/",
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        },
    })
);
// logger
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(addressRouter.routes(), addressRouter.allowedMethods());
app.use(shopRouter.routes(), shopRouter.allowedMethods());
app.use(orderRouter.routes(), orderRouter.allowedMethods());
app.use(fileRouter.routes(), fileRouter.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
    console.error("server error", err, ctx);
});

module.exports = app;
