import Cors from 'micro-cors';
const cors = Cors({ allowMethods: ['GET', 'HEAD'] });
import Router from 'router';
import { rootRoute } from '../../../api/rootRoute';
import finalhandler from 'finalhandler';
import { test1Route } from '../../../api/test1Route';

const router = Router();

router.get('/api/router', rootRoute);
router.get('/api/router/test1', test1Route);

function getRoutes(req, res) {
    router(req, res, finalhandler(req, res));
}

export default cors(getRoutes);