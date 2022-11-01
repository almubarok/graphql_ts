import { handleError } from '../../../shared';
import I from './interfaces';

export const getDevicesResolver: I['getDevices'] = async (_src, arg, ctx) => {
  try {
    const limit = arg.limit || 10;
    const offset = limit * (arg.page || 0);
    const orderBy = arg.order || 'id';
    const search = arg.search || '';

    const devices = await ctx.prisma.device.findMany({
      where: {
        owner_id: ctx.userId,
        OR: [{ name: { contains: search } }, { code: { contains: search } }],
      },
      orderBy: { [orderBy]: arg.sort || 'asc' },
      take: limit,
      skip: offset,
    });

    return devices;
  } catch (error) {
    throw handleError(error);
  }
};
