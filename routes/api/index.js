const router = require('express').Router();
// getting the catefory routes
const categoryRoutes = require('./category-routes');
// getting the product routes
const productRoutes = require('./product-routes');

// getting the tagRoutes
const tagRoutes = require('./tag-routes');

// Middleware to use these routes
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
