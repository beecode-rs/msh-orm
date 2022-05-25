#!/bin/bash

ROOT=../../..
PRJ_DIR=$ROOT

vision --projectRootPath=$PRJ_DIR --tsConfig=$PRJ_DIR/tsconfig.json --destName=vision          --printIgnoreExternal --printIgnorePaths='["src/index.ts","src/util","src/test"]' --printSimplifyEntities='[["src/dal","DAL"]]'

vision --projectRootPath=$PRJ_DIR --tsConfig=$PRJ_DIR/tsconfig.json --destName=vision-dal      --printIgnoreExternal --printIgnorePaths='["src/index.ts","src/util","src/test"]' --src='src/dal'


vision --projectRootPath=$PRJ_DIR --tsConfig=$PRJ_DIR/tsconfig.json --destName=vision-memory   --printIgnoreExternal --printIgnorePaths='["src/index.ts","src/util","src/test","src/dal","src/firebase","src/typeorm"]' # --printSimplifyEntities='[["src/dal","DAL"]]'
vision --projectRootPath=$PRJ_DIR --tsConfig=$PRJ_DIR/tsconfig.json --destName=vision-typeorm  --printIgnoreExternal --printIgnorePaths='["src/index.ts","src/util","src/test","src/dal","src/firebase","src/memory"]'  # --printSimplifyEntities='[["src/dal","DAL"]]'
vision --projectRootPath=$PRJ_DIR --tsConfig=$PRJ_DIR/tsconfig.json --destName=vision-firebase --printIgnoreExternal --printIgnorePaths='["src/index.ts","src/util","src/test","src/dal","src/memory","src/typeorm"]'   # --printSimplifyEntities='[["src/dal","DAL"]]'
