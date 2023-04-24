const deepCopy = (origin, map = new WeakMap) => {
	if (origin == undefined || typeof origin !== 'object') return origin
	if (origin instanceof Date) return new Date(origin)
	if (origin instanceof RegExp) return new RegExp(origin)
	var copied = map.get(origin)
	if (!!copied) return copied
	let target = {}
	if (Object.prototype.toString.call(origin) === "[object Array]") target = []
	map.set(origin, target)
	let keys = Reflect.ownKeys(origin)
	for (let key of keys) {
		target[key] = deepCopy(origin[key], map)
	}
	return target
}

export default deepCopy