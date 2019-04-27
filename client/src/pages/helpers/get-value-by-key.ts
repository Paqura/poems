type TObject = {
	[key: string]: any,
};

const multipleGetter = (object: TObject, keys: string[], reserve?: any): string[] => {
	return keys.map(key => object[key] || reserve || null);
};

export default (object: TObject, key: string[] | string, reserve?: any): any => {
	if(!object) return null;

	return typeof key === 'string'
		? object[key] || reserve || null
		: multipleGetter(object, Array.isArray(key) ? key : [], reserve);
};
