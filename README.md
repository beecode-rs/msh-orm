[![Build Status](https://beecode.semaphoreci.com/badges/msh-orm/branches/main.svg?style=shields)](https://beecode.semaphoreci.com/projects/msh-orm)
[![codecov](https://codecov.io/gh/beecode-rs/msh-orm/branch/main/graph/badge.svg?token=<// TODO add token>)](https://codecov.io/gh/beecode-rs/msh-orm)
[![GitHub license](https://img.shields.io/github/license/beecode-rs/msh-orm)](https://github.com/beecode-rs/msh-orm/blob/main/LICENSE)  
[![NPM](https://nodei.co/npm/@beecode/msh-orm.png)](https://nodei.co/npm/@beecode/msh-orm)

# msh-orm

Micro-service helper: node environment

This project is intended to be used in typescript project to validate and add types to the project configuration.

<!-- toc -->

- [Install](#install)
- [Usage](#usage)
- [Idea/Explanation](#ideaexplanation)
  * [common-dal.ts](#common-dalts)
  * [common-dal-implementable.ts](#common-dal-implementablets)

<!-- tocstop -->

## Install

`npm i @beecode/msh-orm`

## Usage


## Idea/Explanation

The idea is to make simple ORM to use in business logic so that using any ORM framework the framework code will not spill into business logic.  
This way we can use simple ORM to manipulate/filter in most use cases and whenever there is complicated use case we can drop down to DAL-Implementation layer and use frameworks specific ORM.

In `dal` folder we have two `common-dal` files.  

### common-dal.ts

`common-dal` is an abstract class which needs to be extended by our entities dal class.  
Here we need to implement transformation between model and entity because our model does not need to be one to one with our entity

After doing this our dal has simple curd/filter operations available.

### common-dal-implementable.ts

`common-dal-implementable.ts` is generic interface for implementing dal. Now that we have our entity dal we need to connect it with implementation which is directly talking to our data storage. We can store our data in memory, database or any medium that can store data, event third party service.  
Here we have few implementation available (memory, typeorm, firebase). We need to create implementation for our data storage.

So our dal implementation need sto implement interface from `common-dal-implementable.ts` and, if we want to use memory dal, we need to extend abstract class from `memory-common-dal-implementation.ts` (you can write your own implementation for any data storage).
