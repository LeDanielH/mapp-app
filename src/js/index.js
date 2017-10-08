process.env.NODE_ENV === 'production' ? module.exports = require('./prod.js') : module.exports = require('./dev.js');
import '../sass/index.scss';
import Accordion from './accordion';

const mappAccordion = new Accordion('.accordion__header', '.accordion__panel');
mappAccordion.init();