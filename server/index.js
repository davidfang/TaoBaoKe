/**
 * Created by weng on 2017/4/16.
 */
var express = require('./express');

if (require('piping')({hook: true})) {
    express();
}
