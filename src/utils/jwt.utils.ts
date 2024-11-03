import "dotenv"
import jwt from 'jsonwebtoken';
import config from 'config';
// const privateKey = config.get<string>('privateKey');
const PRIVATEKEY = process.env.PRIVATEKEY;
// const publicKey = config.get<string>('publicKey');
// Define interface for JWT payload
interface JwtPayload {
	id: string;
	iat?: number;
	exp?: number;
}
function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
	return jwt.sign({ id: object }, PRIVATEKEY, {
		...(options && options),
	})
}
function verifyJwt(token: string): {
	valid: boolean;
	expired: boolean;
	decoded: JwtPayload | null;
} {
	try {

		const decoded = jwt.verify(token, PRIVATEKEY) as JwtPayload;
		return {
			valid: true,
			expired: false,
			decoded,
		};
	} catch (e: any) {
		return {
			valid: false,
			expired: e.message === 'jwt expired',
			decoded: null,
		};
	}
}

export { signJwt, verifyJwt };
