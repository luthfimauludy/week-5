const _ = require("lodash");
const Boom = require("boom");

const db = require("../../models");
const GeneralHelper = require("./generalHelper");

const fileName = "server/helpers/eventHelper.js";

exports.getAllEvent = async (dataObject) => {
  const { limit, offset } = dataObject;

  try {
    const events = await db.Events.findAll({
      limit,
      offset,
      attributes: { exclude: ["createdAt", "updatedAt", "cityId"] },
      include: [
        {
          model: db.Cities,
          as: "cities",
          attributes: ["id", ["name", "location"]],
        },
      ],
    });

    return Promise.resolve(events);
  } catch (err) {
    console.log([fileName, "getAllEvent", "ERROR"], { info: `${err}` });
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};

exports.getOneEvent = async (id) => {
  try {
    const event = await db.Events.findByPk(id, {
      attributes: { exclude: ["createdAt", "updatedAt", "cityId"] },
      include: [
        {
          model: db.Cities,
          as: "cities",
          attributes: ["id", ["name", "location"]],
        },
      ],
    });
    if (_.isEmpty(event)) {
      return Promise.reject(Boom.notFound("EVENT_NOT_FOUND"));
    }

    return Promise.resolve(event);
  } catch (err) {
    console.log([fileName, "getOneEvent", "ERROR"], { info: `${err}` });
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};

exports.insert = async (dataObject) => {
  const { title, descriptions, cityId, picture, date } = dataObject;

  try {
    const event = await db.Events.findOne({
      where: { title },
    });
    if (!_.isEmpty(event)) {
      return Promise.reject(Boom.badRequest("TITLE_HAS_BEEN_USED"));
    }

    const data = await db.Events.create({
      title,
      descriptions,
      cityId,
      picture,
      date,
    });
    return Promise.resolve(data);
  } catch (err) {
    console.log([fileName, "insert", "ERROR"], { info: `${err}` });
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};

exports.update = async (id, dataObject) => {
  try {
    const { title, descriptions, cityId, picture, date } = dataObject;

    const event = await db.Events.findOne({
      where: { id },
    });
    if (_.isEmpty(event)) {
      return Promise.reject(Boom.notFound("EVENT_NOT_FOUND"));
    }

    const data = await db.Events.update(
      {
        title,
        descriptions,
        cityId,
        picture,
        date,
      },
      { where: { id } }
    );

    return Promise.resolve(data);
  } catch (err) {
    console.log([fileName, "update", "ERROR"], { info: `${err}` });
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};

exports.delete = async (id) => {
  try {
    const event = await db.Events.findOne({
      where: { id },
    });
    if (_.isEmpty(event)) {
      return Promise.reject(Boom.notFound("EVENT_NOT_FOUND"));
    }

    const data = await db.Events.destroy({
      where: { id },
    });

    return Promise.resolve(data);
  } catch (err) {
    console.log([fileName, "update", "ERROR"], { info: `${err}` });
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};
