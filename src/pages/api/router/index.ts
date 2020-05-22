import Router from "router";
import finalhandler from "finalhandler";
import { rootRoute } from "../../../services/rootRoute";
import { test1Route } from "../../../services/test1Route";
import { test2Route } from "../../../services/test2Route";
import { test3Route } from "../../../services/test3Route";
import { test4Route } from "../../../services/test4Route";
import { test5Route } from "../../../services/test5Route";
import { test6Route } from "../../../services/test6Route";
import { test7Route } from "../../../services/test7Route";
import { test8Route } from "../../../services/test8Route";
import { test9Route } from "../../../services/test9Route";
import { test10Route } from "../../../services/test10Route";
import { test11Route } from "../../../services/test11Route";
import { test12Route } from "../../../services/test12Route";
import { test13Route } from "../../../services/test13Route";

const router = Router();

router.get("/api/router", rootRoute);
router.get("/api/router/test1", test1Route);
router.get("/api/router/test1/test2", test2Route);
router.get("/api/router/test3", test3Route);
router.get("/api/router/test4", test4Route);
router.get("/api/router/test5", test5Route);
router.get("/api/router/test6", test6Route);
router.get("/api/router/test7", test7Route);
router.get("/api/router/test8", test8Route);
router.get("/api/router/test9", test9Route);
router.get("/api/router/test10", test10Route);
router.get("/api/router/test11", test11Route);
router.get("/api/router/test12", test12Route);
router.get("/api/router/test13", test13Route);

function getRoutes(req, res) {
  router(req, res, finalhandler(req, res));
}

export default getRoutes;
