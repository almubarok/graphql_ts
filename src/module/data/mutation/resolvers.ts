import I from './interfaces';
import { handleError, errors, createSubs, TOPICS } from '../../../shared';

export const createDataResolver: I['createData'] = async (_src, arg, ctx) => {
  try {
    const validDevice = await ctx.prisma.device.findFirst({
      where: { owner_id: ctx.userId, id: arg.data.device_id },
    });
    if (!validDevice) throw errors.fieldInvalid('device_id');

    const data = await ctx.prisma.data.create({ data: arg.data });
    ctx.pubsub.publish(TOPICS.DATA, createSubs('CREATE', data));

    return data;
  } catch (error) {
    throw handleError(error);
  }
};
