import { parallel } from 'async';

parallel([function(callback) {}, function(callback) {}], function(
    err,
    results,
) {
    console.log(results);
});
