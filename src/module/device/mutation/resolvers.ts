import {
  handleError,
  pubsub,
  TOPICS,
  createSubs,
  errors,
} from '../../../shared';
import I from './interfaces';

export const createDeviceResolver: I['createDevice'] = async (
  _src,
  arg,
  ctx
) => {
  try {
    const device = await ctx.prisma.device.create({
      data: { ...arg.data, owner_id: ctx.userId },
    });
    pubsub.publish(TOPICS.DEVICE, createSubs('CREATE', device));

    return device;
  } catch (error) {
    throw handleError(error);
  }
};

export const updateDeviceResolver: I['updateDevice'] = async (
  _src,
  args,
  ctx
) => {
  try {
    const validDevice = await ctx.prisma.device.findFirst({
      where: { id: args.device_id, owner_id: ctx.userId },
    });
    if (!validDevice) throw errors.fieldInvalid('device_id');

    const updated = await ctx.prisma.device.update({
      where: { id: args.device_id },
      data: {},
    });
    pubsub.publish(TOPICS.DEVICE, createSubs('UPDATE', updated));

    return updated;
  } catch (error) {
    throw handleError(error);
  }
};

export const deleteDeviceResolver: I['deleteDevice'] = async (
  _src,
  args,
  ctx
) => {
  try {
    const validDevice = await ctx.prisma.device.findFirst({
      where: { id: args.device_id, owner_id: ctx.userId },
    });

    if (!validDevice) throw errors.fieldInvalid('device_id');

    const datas = await ctx.prisma.data.findMany({
      where: { device_id: args.device_id },
    });
    await ctx.prisma.data.deleteMany({ where: { device_id: args.device_id } });
    const device = await ctx.prisma.device.delete({
      where: { id: args.device_id },
    });
    pubsub.publish(TOPICS.DEVICE, createSubs('DELETE', device));
    for (const data of datas) {
      pubsub.publish(TOPICS.DATA, createSubs('DELETE', data));
    }

    return device;
  } catch (error) {
    throw handleError(error);
  }
};
