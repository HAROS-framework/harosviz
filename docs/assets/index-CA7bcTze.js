const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      '/stratis/assets/IssuesView-ToZ7kQ1l.js',
      '/stratis/assets/IssuesView-hlg7LbFA.css',
      '/stratis/assets/RuntimeView-4zp2RM15.js',
      '/stratis/assets/RuntimeView-Cnp8g5ba.css',
    ]),
) => i.map((i) => d[i])
;(function () {
  const e = document.createElement('link').relList
  if (e && e.supports && e.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === 'childList')
        for (const o of s.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
    const s = {}
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (s.credentials = 'omit')
          : (s.credentials = 'same-origin'),
      s
    )
  }
  function r(i) {
    if (i.ep) return
    i.ep = !0
    const s = n(i)
    fetch(i.href, s)
  }
})()
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Ni(t) {
  const e = Object.create(null)
  for (const n of t.split(',')) e[n] = 1
  return (n) => n in e
}
const st = {},
  Ke = [],
  Jt = () => {},
  Kc = () => !1,
  wr = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
  $i = (t) => t.startsWith('onUpdate:'),
  mt = Object.assign,
  ki = (t, e) => {
    const n = t.indexOf(e)
    n > -1 && t.splice(n, 1)
  },
  zc = Object.prototype.hasOwnProperty,
  tt = (t, e) => zc.call(t, e),
  j = Array.isArray,
  ze = (t) => xr(t) === '[object Map]',
  No = (t) => xr(t) === '[object Set]',
  z = (t) => typeof t == 'function',
  dt = (t) => typeof t == 'string',
  he = (t) => typeof t == 'symbol',
  ft = (t) => t !== null && typeof t == 'object',
  $o = (t) => (ft(t) || z(t)) && z(t.then) && z(t.catch),
  ko = Object.prototype.toString,
  xr = (t) => ko.call(t),
  qc = (t) => xr(t).slice(8, -1),
  Io = (t) => xr(t) === '[object Object]',
  Ii = (t) => dt(t) && t !== 'NaN' && t[0] !== '-' && '' + parseInt(t, 10) === t,
  mn = Ni(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  br = (t) => {
    const e = Object.create(null)
    return (n) => e[n] || (e[n] = t(n))
  },
  Wc = /-(\w)/g,
  be = br((t) => t.replace(Wc, (e, n) => (n ? n.toUpperCase() : ''))),
  Gc = /\B([A-Z])/g,
  Fe = br((t) => t.replace(Gc, '-$1').toLowerCase()),
  Fo = br((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  Fr = br((t) => (t ? `on${Fo(t)}` : '')),
  xe = (t, e) => !Object.is(t, e),
  Lr = (t, ...e) => {
    for (let n = 0; n < t.length; n++) t[n](...e)
  },
  Lo = (t, e, n, r = !1) => {
    Object.defineProperty(t, e, { configurable: !0, enumerable: !1, writable: r, value: n })
  },
  Xc = (t) => {
    const e = parseFloat(t)
    return isNaN(e) ? t : e
  }
let ps
const Sr = () =>
  ps ||
  (ps =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function Fi(t) {
  if (j(t)) {
    const e = {}
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = dt(r) ? Zc(r) : Fi(r)
      if (i) for (const s in i) e[s] = i[s]
    }
    return e
  } else if (dt(t) || ft(t)) return t
}
const Yc = /;(?![^(]*\))/g,
  Jc = /:([^]+)/,
  Qc = /\/\*[^]*?\*\//g
function Zc(t) {
  const e = {}
  return (
    t
      .replace(Qc, '')
      .split(Yc)
      .forEach((n) => {
        if (n) {
          const r = n.split(Jc)
          r.length > 1 && (e[r[0].trim()] = r[1].trim())
        }
      }),
    e
  )
}
function Li(t) {
  let e = ''
  if (dt(t)) e = t
  else if (j(t))
    for (let n = 0; n < t.length; n++) {
      const r = Li(t[n])
      r && (e += r + ' ')
    }
  else if (ft(t)) for (const n in t) t[n] && (e += n + ' ')
  return e.trim()
}
const tu = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  eu = Ni(tu)
function Ho(t) {
  return !!t || t === ''
}
const Do = (t) => !!(t && t.__v_isRef === !0),
  nu = (t) =>
    dt(t)
      ? t
      : t == null
        ? ''
        : j(t) || (ft(t) && (t.toString === ko || !z(t.toString)))
          ? Do(t)
            ? nu(t.value)
            : JSON.stringify(t, Vo, 2)
          : String(t),
  Vo = (t, e) =>
    Do(e)
      ? Vo(t, e.value)
      : ze(e)
        ? {
            [`Map(${e.size})`]: [...e.entries()].reduce(
              (n, [r, i], s) => ((n[Hr(r, s) + ' =>'] = i), n),
              {},
            ),
          }
        : No(e)
          ? { [`Set(${e.size})`]: [...e.values()].map((n) => Hr(n)) }
          : he(e)
            ? Hr(e)
            : ft(e) && !j(e) && !Io(e)
              ? String(e)
              : e,
  Hr = (t, e = '') => {
    var n
    return he(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t
  }
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let bt
class Bo {
  constructor(e = !1) {
    ;(this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = bt),
      !e && bt && (this.index = (bt.scopes || (bt.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let e, n
      if (this.scopes) for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].pause()
      for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let e, n
      if (this.scopes) for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].resume()
      for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].resume()
    }
  }
  run(e) {
    if (this._active) {
      const n = bt
      try {
        return (bt = this), e()
      } finally {
        bt = n
      }
    }
  }
  on() {
    bt = this
  }
  off() {
    bt = this.parent
  }
  stop(e) {
    if (this._active) {
      this._active = !1
      let n, r
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop()
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]()
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0)
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !e) {
        const i = this.parent.scopes.pop()
        i && i !== this && ((this.parent.scopes[this.index] = i), (i.index = this.index))
      }
      this.parent = void 0
    }
  }
}
function jo(t) {
  return new Bo(t)
}
function Uo() {
  return bt
}
function ru(t, e = !1) {
  bt && bt.cleanups.push(t)
}
let ct
const Dr = new WeakSet()
class Ko {
  constructor(e) {
    ;(this.fn = e),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      bt && bt.active && bt.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 && ((this.flags &= -65), Dr.has(this) && (Dr.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || qo(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;(this.flags |= 2), gs(this), Wo(this)
    const e = ct,
      n = Ut
    ;(ct = this), (Ut = !0)
    try {
      return this.fn()
    } finally {
      Go(this), (ct = e), (Ut = n), (this.flags &= -3)
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep) Vi(e)
      ;(this.deps = this.depsTail = void 0),
        gs(this),
        this.onStop && this.onStop(),
        (this.flags &= -2)
    }
  }
  trigger() {
    this.flags & 64 ? Dr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    ri(this) && this.run()
  }
  get dirty() {
    return ri(this)
  }
}
let zo = 0,
  _n,
  yn
function qo(t, e = !1) {
  if (((t.flags |= 8), e)) {
    ;(t.next = yn), (yn = t)
    return
  }
  ;(t.next = _n), (_n = t)
}
function Hi() {
  zo++
}
function Di() {
  if (--zo > 0) return
  if (yn) {
    let e = yn
    for (yn = void 0; e; ) {
      const n = e.next
      ;(e.next = void 0), (e.flags &= -9), (e = n)
    }
  }
  let t
  for (; _n; ) {
    let e = _n
    for (_n = void 0; e; ) {
      const n = e.next
      if (((e.next = void 0), (e.flags &= -9), e.flags & 1))
        try {
          e.trigger()
        } catch (r) {
          t || (t = r)
        }
      e = n
    }
  }
  if (t) throw t
}
function Wo(t) {
  for (let e = t.deps; e; e = e.nextDep)
    (e.version = -1), (e.prevActiveLink = e.dep.activeLink), (e.dep.activeLink = e)
}
function Go(t) {
  let e,
    n = t.depsTail,
    r = n
  for (; r; ) {
    const i = r.prevDep
    r.version === -1 ? (r === n && (n = i), Vi(r), iu(r)) : (e = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = i)
  }
  ;(t.deps = e), (t.depsTail = n)
}
function ri(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (
      e.dep.version !== e.version ||
      (e.dep.computed && (Xo(e.dep.computed) || e.dep.version !== e.version))
    )
      return !0
  return !!t._dirty
}
function Xo(t) {
  if ((t.flags & 4 && !(t.flags & 16)) || ((t.flags &= -17), t.globalVersion === An)) return
  t.globalVersion = An
  const e = t.dep
  if (((t.flags |= 2), e.version > 0 && !t.isSSR && t.deps && !ri(t))) {
    t.flags &= -3
    return
  }
  const n = ct,
    r = Ut
  ;(ct = t), (Ut = !0)
  try {
    Wo(t)
    const i = t.fn(t._value)
    ;(e.version === 0 || xe(i, t._value)) && ((t._value = i), e.version++)
  } catch (i) {
    throw (e.version++, i)
  } finally {
    ;(ct = n), (Ut = r), Go(t), (t.flags &= -3)
  }
}
function Vi(t, e = !1) {
  const { dep: n, prevSub: r, nextSub: i } = t
  if (
    (r && ((r.nextSub = i), (t.prevSub = void 0)),
    i && ((i.prevSub = r), (t.nextSub = void 0)),
    n.subs === t && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5
    for (let s = n.computed.deps; s; s = s.nextDep) Vi(s, !0)
  }
  !e && !--n.sc && n.map && n.map.delete(n.key)
}
function iu(t) {
  const { prevDep: e, nextDep: n } = t
  e && ((e.nextDep = n), (t.prevDep = void 0)), n && ((n.prevDep = e), (t.nextDep = void 0))
}
let Ut = !0
const Yo = []
function Ee() {
  Yo.push(Ut), (Ut = !1)
}
function Ae() {
  const t = Yo.pop()
  Ut = t === void 0 ? !0 : t
}
function gs(t) {
  const { cleanup: e } = t
  if (((t.cleanup = void 0), e)) {
    const n = ct
    ct = void 0
    try {
      e()
    } finally {
      ct = n
    }
  }
}
let An = 0
class su {
  constructor(e, n) {
    ;(this.sub = e),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0)
  }
}
class Bi {
  constructor(e) {
    ;(this.computed = e),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0)
  }
  track(e) {
    if (!ct || !Ut || ct === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== ct)
      (n = this.activeLink = new su(ct, this)),
        ct.deps
          ? ((n.prevDep = ct.depsTail), (ct.depsTail.nextDep = n), (ct.depsTail = n))
          : (ct.deps = ct.depsTail = n),
        Jo(n)
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep
      ;(r.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = r),
        (n.prevDep = ct.depsTail),
        (n.nextDep = void 0),
        (ct.depsTail.nextDep = n),
        (ct.depsTail = n),
        ct.deps === n && (ct.deps = r)
    }
    return n
  }
  trigger(e) {
    this.version++, An++, this.notify(e)
  }
  notify(e) {
    Hi()
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
    } finally {
      Di()
    }
  }
}
function Jo(t) {
  if ((t.dep.sc++, t.sub.flags & 4)) {
    const e = t.dep.computed
    if (e && !t.dep.subs) {
      e.flags |= 20
      for (let r = e.deps; r; r = r.nextDep) Jo(r)
    }
    const n = t.dep.subs
    n !== t && ((t.prevSub = n), n && (n.nextSub = t)), (t.dep.subs = t)
  }
}
const nr = new WeakMap(),
  Oe = Symbol(''),
  ii = Symbol(''),
  Rn = Symbol('')
function vt(t, e, n) {
  if (Ut && ct) {
    let r = nr.get(t)
    r || nr.set(t, (r = new Map()))
    let i = r.get(n)
    i || (r.set(n, (i = new Bi())), (i.map = r), (i.key = n)), i.track()
  }
}
function oe(t, e, n, r, i, s) {
  const o = nr.get(t)
  if (!o) {
    An++
    return
  }
  const l = (c) => {
    c && c.trigger()
  }
  if ((Hi(), e === 'clear')) o.forEach(l)
  else {
    const c = j(t),
      u = c && Ii(n)
    if (c && n === 'length') {
      const f = Number(r)
      o.forEach((a, h) => {
        ;(h === 'length' || h === Rn || (!he(h) && h >= f)) && l(a)
      })
    } else
      switch (((n !== void 0 || o.has(void 0)) && l(o.get(n)), u && l(o.get(Rn)), e)) {
        case 'add':
          c ? u && l(o.get('length')) : (l(o.get(Oe)), ze(t) && l(o.get(ii)))
          break
        case 'delete':
          c || (l(o.get(Oe)), ze(t) && l(o.get(ii)))
          break
        case 'set':
          ze(t) && l(o.get(Oe))
          break
      }
  }
  Di()
}
function ou(t, e) {
  const n = nr.get(t)
  return n && n.get(e)
}
function De(t) {
  const e = Y(t)
  return e === t ? e : (vt(e, 'iterate', Rn), Ft(t) ? e : e.map(wt))
}
function Er(t) {
  return vt((t = Y(t)), 'iterate', Rn), t
}
const lu = {
  __proto__: null,
  [Symbol.iterator]() {
    return Vr(this, Symbol.iterator, wt)
  },
  concat(...t) {
    return De(this).concat(...t.map((e) => (j(e) ? De(e) : e)))
  },
  entries() {
    return Vr(this, 'entries', (t) => ((t[1] = wt(t[1])), t))
  },
  every(t, e) {
    return ne(this, 'every', t, e, void 0, arguments)
  },
  filter(t, e) {
    return ne(this, 'filter', t, e, (n) => n.map(wt), arguments)
  },
  find(t, e) {
    return ne(this, 'find', t, e, wt, arguments)
  },
  findIndex(t, e) {
    return ne(this, 'findIndex', t, e, void 0, arguments)
  },
  findLast(t, e) {
    return ne(this, 'findLast', t, e, wt, arguments)
  },
  findLastIndex(t, e) {
    return ne(this, 'findLastIndex', t, e, void 0, arguments)
  },
  forEach(t, e) {
    return ne(this, 'forEach', t, e, void 0, arguments)
  },
  includes(...t) {
    return Br(this, 'includes', t)
  },
  indexOf(...t) {
    return Br(this, 'indexOf', t)
  },
  join(t) {
    return De(this).join(t)
  },
  lastIndexOf(...t) {
    return Br(this, 'lastIndexOf', t)
  },
  map(t, e) {
    return ne(this, 'map', t, e, void 0, arguments)
  },
  pop() {
    return rn(this, 'pop')
  },
  push(...t) {
    return rn(this, 'push', t)
  },
  reduce(t, ...e) {
    return ms(this, 'reduce', t, e)
  },
  reduceRight(t, ...e) {
    return ms(this, 'reduceRight', t, e)
  },
  shift() {
    return rn(this, 'shift')
  },
  some(t, e) {
    return ne(this, 'some', t, e, void 0, arguments)
  },
  splice(...t) {
    return rn(this, 'splice', t)
  },
  toReversed() {
    return De(this).toReversed()
  },
  toSorted(t) {
    return De(this).toSorted(t)
  },
  toSpliced(...t) {
    return De(this).toSpliced(...t)
  },
  unshift(...t) {
    return rn(this, 'unshift', t)
  },
  values() {
    return Vr(this, 'values', wt)
  },
}
function Vr(t, e, n) {
  const r = Er(t),
    i = r[e]()
  return (
    r !== t &&
      !Ft(t) &&
      ((i._next = i.next),
      (i.next = () => {
        const s = i._next()
        return s.value && (s.value = n(s.value)), s
      })),
    i
  )
}
const cu = Array.prototype
function ne(t, e, n, r, i, s) {
  const o = Er(t),
    l = o !== t && !Ft(t),
    c = o[e]
  if (c !== cu[e]) {
    const a = c.apply(t, s)
    return l ? wt(a) : a
  }
  let u = n
  o !== t &&
    (l
      ? (u = function (a, h) {
          return n.call(this, wt(a), h, t)
        })
      : n.length > 2 &&
        (u = function (a, h) {
          return n.call(this, a, h, t)
        }))
  const f = c.call(o, u, r)
  return l && i ? i(f) : f
}
function ms(t, e, n, r) {
  const i = Er(t)
  let s = n
  return (
    i !== t &&
      (Ft(t)
        ? n.length > 3 &&
          (s = function (o, l, c) {
            return n.call(this, o, l, c, t)
          })
        : (s = function (o, l, c) {
            return n.call(this, o, wt(l), c, t)
          })),
    i[e](s, ...r)
  )
}
function Br(t, e, n) {
  const r = Y(t)
  vt(r, 'iterate', Rn)
  const i = r[e](...n)
  return (i === -1 || i === !1) && Ki(n[0]) ? ((n[0] = Y(n[0])), r[e](...n)) : i
}
function rn(t, e, n = []) {
  Ee(), Hi()
  const r = Y(t)[e].apply(t, n)
  return Di(), Ae(), r
}
const uu = Ni('__proto__,__v_isRef,__isVue'),
  Qo = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== 'arguments' && t !== 'caller')
      .map((t) => Symbol[t])
      .filter(he),
  )
function fu(t) {
  he(t) || (t = String(t))
  const e = Y(this)
  return vt(e, 'has', t), e.hasOwnProperty(t)
}
class Zo {
  constructor(e = !1, n = !1) {
    ;(this._isReadonly = e), (this._isShallow = n)
  }
  get(e, n, r) {
    if (n === '__v_skip') return e.__v_skip
    const i = this._isReadonly,
      s = this._isShallow
    if (n === '__v_isReactive') return !i
    if (n === '__v_isReadonly') return i
    if (n === '__v_isShallow') return s
    if (n === '__v_raw')
      return r === (i ? (s ? wu : rl) : s ? nl : el).get(e) ||
        Object.getPrototypeOf(e) === Object.getPrototypeOf(r)
        ? e
        : void 0
    const o = j(e)
    if (!i) {
      let c
      if (o && (c = lu[n])) return c
      if (n === 'hasOwnProperty') return fu
    }
    const l = Reflect.get(e, n, ht(e) ? e : r)
    return (he(n) ? Qo.has(n) : uu(n)) || (i || vt(e, 'get', n), s)
      ? l
      : ht(l)
        ? o && Ii(n)
          ? l
          : l.value
        : ft(l)
          ? i
            ? sl(l)
            : Fn(l)
          : l
  }
}
class tl extends Zo {
  constructor(e = !1) {
    super(!1, e)
  }
  set(e, n, r, i) {
    let s = e[n]
    if (!this._isShallow) {
      const c = $e(s)
      if ((!Ft(r) && !$e(r) && ((s = Y(s)), (r = Y(r))), !j(e) && ht(s) && !ht(r)))
        return c ? !1 : ((s.value = r), !0)
    }
    const o = j(e) && Ii(n) ? Number(n) < e.length : tt(e, n),
      l = Reflect.set(e, n, r, ht(e) ? e : i)
    return e === Y(i) && (o ? xe(r, s) && oe(e, 'set', n, r) : oe(e, 'add', n, r)), l
  }
  deleteProperty(e, n) {
    const r = tt(e, n)
    e[n]
    const i = Reflect.deleteProperty(e, n)
    return i && r && oe(e, 'delete', n, void 0), i
  }
  has(e, n) {
    const r = Reflect.has(e, n)
    return (!he(n) || !Qo.has(n)) && vt(e, 'has', n), r
  }
  ownKeys(e) {
    return vt(e, 'iterate', j(e) ? 'length' : Oe), Reflect.ownKeys(e)
  }
}
class au extends Zo {
  constructor(e = !1) {
    super(!0, e)
  }
  set(e, n) {
    return !0
  }
  deleteProperty(e, n) {
    return !0
  }
}
const hu = new tl(),
  du = new au(),
  pu = new tl(!0)
const si = (t) => t,
  Un = (t) => Reflect.getPrototypeOf(t)
function gu(t, e, n) {
  return function (...r) {
    const i = this.__v_raw,
      s = Y(i),
      o = ze(s),
      l = t === 'entries' || (t === Symbol.iterator && o),
      c = t === 'keys' && o,
      u = i[t](...r),
      f = n ? si : e ? oi : wt
    return (
      !e && vt(s, 'iterate', c ? ii : Oe),
      {
        next() {
          const { value: a, done: h } = u.next()
          return h ? { value: a, done: h } : { value: l ? [f(a[0]), f(a[1])] : f(a), done: h }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function Kn(t) {
  return function (...e) {
    return t === 'delete' ? !1 : t === 'clear' ? void 0 : this
  }
}
function mu(t, e) {
  const n = {
    get(i) {
      const s = this.__v_raw,
        o = Y(s),
        l = Y(i)
      t || (xe(i, l) && vt(o, 'get', i), vt(o, 'get', l))
      const { has: c } = Un(o),
        u = e ? si : t ? oi : wt
      if (c.call(o, i)) return u(s.get(i))
      if (c.call(o, l)) return u(s.get(l))
      s !== o && s.get(i)
    },
    get size() {
      const i = this.__v_raw
      return !t && vt(Y(i), 'iterate', Oe), Reflect.get(i, 'size', i)
    },
    has(i) {
      const s = this.__v_raw,
        o = Y(s),
        l = Y(i)
      return (
        t || (xe(i, l) && vt(o, 'has', i), vt(o, 'has', l)),
        i === l ? s.has(i) : s.has(i) || s.has(l)
      )
    },
    forEach(i, s) {
      const o = this,
        l = o.__v_raw,
        c = Y(l),
        u = e ? si : t ? oi : wt
      return !t && vt(c, 'iterate', Oe), l.forEach((f, a) => i.call(s, u(f), u(a), o))
    },
  }
  return (
    mt(
      n,
      t
        ? { add: Kn('add'), set: Kn('set'), delete: Kn('delete'), clear: Kn('clear') }
        : {
            add(i) {
              !e && !Ft(i) && !$e(i) && (i = Y(i))
              const s = Y(this)
              return Un(s).has.call(s, i) || (s.add(i), oe(s, 'add', i, i)), this
            },
            set(i, s) {
              !e && !Ft(s) && !$e(s) && (s = Y(s))
              const o = Y(this),
                { has: l, get: c } = Un(o)
              let u = l.call(o, i)
              u || ((i = Y(i)), (u = l.call(o, i)))
              const f = c.call(o, i)
              return o.set(i, s), u ? xe(s, f) && oe(o, 'set', i, s) : oe(o, 'add', i, s), this
            },
            delete(i) {
              const s = Y(this),
                { has: o, get: l } = Un(s)
              let c = o.call(s, i)
              c || ((i = Y(i)), (c = o.call(s, i))), l && l.call(s, i)
              const u = s.delete(i)
              return c && oe(s, 'delete', i, void 0), u
            },
            clear() {
              const i = Y(this),
                s = i.size !== 0,
                o = i.clear()
              return s && oe(i, 'clear', void 0, void 0), o
            },
          },
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
      n[i] = gu(i, t, e)
    }),
    n
  )
}
function ji(t, e) {
  const n = mu(t, e)
  return (r, i, s) =>
    i === '__v_isReactive'
      ? !t
      : i === '__v_isReadonly'
        ? t
        : i === '__v_raw'
          ? r
          : Reflect.get(tt(n, i) && i in r ? n : r, i, s)
}
const _u = { get: ji(!1, !1) },
  yu = { get: ji(!1, !0) },
  vu = { get: ji(!0, !1) }
const el = new WeakMap(),
  nl = new WeakMap(),
  rl = new WeakMap(),
  wu = new WeakMap()
function xu(t) {
  switch (t) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function bu(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : xu(qc(t))
}
function Fn(t) {
  return $e(t) ? t : Ui(t, !1, hu, _u, el)
}
function il(t) {
  return Ui(t, !1, pu, yu, nl)
}
function sl(t) {
  return Ui(t, !0, du, vu, rl)
}
function Ui(t, e, n, r, i) {
  if (!ft(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t
  const s = i.get(t)
  if (s) return s
  const o = bu(t)
  if (o === 0) return t
  const l = new Proxy(t, o === 2 ? r : n)
  return i.set(t, l), l
}
function ue(t) {
  return $e(t) ? ue(t.__v_raw) : !!(t && t.__v_isReactive)
}
function $e(t) {
  return !!(t && t.__v_isReadonly)
}
function Ft(t) {
  return !!(t && t.__v_isShallow)
}
function Ki(t) {
  return t ? !!t.__v_raw : !1
}
function Y(t) {
  const e = t && t.__v_raw
  return e ? Y(e) : t
}
function zi(t) {
  return !tt(t, '__v_skip') && Object.isExtensible(t) && Lo(t, '__v_skip', !0), t
}
const wt = (t) => (ft(t) ? Fn(t) : t),
  oi = (t) => (ft(t) ? sl(t) : t)
function ht(t) {
  return t ? t.__v_isRef === !0 : !1
}
function Ar(t) {
  return ll(t, !1)
}
function ol(t) {
  return ll(t, !0)
}
function ll(t, e) {
  return ht(t) ? t : new Su(t, e)
}
class Su {
  constructor(e, n) {
    ;(this.dep = new Bi()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? e : Y(e)),
      (this._value = n ? e : wt(e)),
      (this.__v_isShallow = n)
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(e) {
    const n = this._rawValue,
      r = this.__v_isShallow || Ft(e) || $e(e)
    ;(e = r ? e : Y(e)),
      xe(e, n) && ((this._rawValue = e), (this._value = r ? e : wt(e)), this.dep.trigger())
  }
}
function Bt(t) {
  return ht(t) ? t.value : t
}
const Eu = {
  get: (t, e, n) => (e === '__v_raw' ? t : Bt(Reflect.get(t, e, n))),
  set: (t, e, n, r) => {
    const i = t[e]
    return ht(i) && !ht(n) ? ((i.value = n), !0) : Reflect.set(t, e, n, r)
  },
}
function cl(t) {
  return ue(t) ? t : new Proxy(t, Eu)
}
function Au(t) {
  const e = j(t) ? new Array(t.length) : {}
  for (const n in t) e[n] = ul(t, n)
  return e
}
class Ru {
  constructor(e, n, r) {
    ;(this._object = e),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0),
      (this._value = void 0)
  }
  get value() {
    const e = this._object[this._key]
    return (this._value = e === void 0 ? this._defaultValue : e)
  }
  set value(e) {
    this._object[this._key] = e
  }
  get dep() {
    return ou(Y(this._object), this._key)
  }
}
class Mu {
  constructor(e) {
    ;(this._getter = e), (this.__v_isRef = !0), (this.__v_isReadonly = !0), (this._value = void 0)
  }
  get value() {
    return (this._value = this._getter())
  }
}
function Cu(t, e, n) {
  return ht(t) ? t : z(t) ? new Mu(t) : ft(t) && arguments.length > 1 ? ul(t, e, n) : Ar(t)
}
function ul(t, e, n) {
  const r = t[e]
  return ht(r) ? r : new Ru(t, e, n)
}
class Pu {
  constructor(e, n, r) {
    ;(this.fn = e),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Bi(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = An - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = r)
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && ct !== this)) return qo(this, !0), !0
  }
  get value() {
    const e = this.dep.track()
    return Xo(this), e && (e.version = this.dep.version), this._value
  }
  set value(e) {
    this.setter && this.setter(e)
  }
}
function Ou(t, e, n = !1) {
  let r, i
  return z(t) ? (r = t) : ((r = t.get), (i = t.set)), new Pu(r, i, n)
}
const zn = {},
  rr = new WeakMap()
let Ce
function Tu(t, e = !1, n = Ce) {
  if (n) {
    let r = rr.get(n)
    r || rr.set(n, (r = [])), r.push(t)
  }
}
function Nu(t, e, n = st) {
  const { immediate: r, deep: i, once: s, scheduler: o, augmentJob: l, call: c } = n,
    u = (O) => (i ? O : Ft(O) || i === !1 || i === 0 ? le(O, 1) : le(O))
  let f,
    a,
    h,
    p,
    _ = !1,
    w = !1
  if (
    (ht(t)
      ? ((a = () => t.value), (_ = Ft(t)))
      : ue(t)
        ? ((a = () => u(t)), (_ = !0))
        : j(t)
          ? ((w = !0),
            (_ = t.some((O) => ue(O) || Ft(O))),
            (a = () =>
              t.map((O) => {
                if (ht(O)) return O.value
                if (ue(O)) return u(O)
                if (z(O)) return c ? c(O, 2) : O()
              })))
          : z(t)
            ? e
              ? (a = c ? () => c(t, 2) : t)
              : (a = () => {
                  if (h) {
                    Ee()
                    try {
                      h()
                    } finally {
                      Ae()
                    }
                  }
                  const O = Ce
                  Ce = f
                  try {
                    return c ? c(t, 3, [p]) : t(p)
                  } finally {
                    Ce = O
                  }
                })
            : (a = Jt),
    e && i)
  ) {
    const O = a,
      I = i === !0 ? 1 / 0 : i
    a = () => le(O(), I)
  }
  const k = Uo(),
    N = () => {
      f.stop(), k && k.active && ki(k.effects, f)
    }
  if (s && e) {
    const O = e
    e = (...I) => {
      O(...I), N()
    }
  }
  let C = w ? new Array(t.length).fill(zn) : zn
  const P = (O) => {
    if (!(!(f.flags & 1) || (!f.dirty && !O)))
      if (e) {
        const I = f.run()
        if (i || _ || (w ? I.some((ot, q) => xe(ot, C[q])) : xe(I, C))) {
          h && h()
          const ot = Ce
          Ce = f
          try {
            const q = [I, C === zn ? void 0 : w && C[0] === zn ? [] : C, p]
            c ? c(e, 3, q) : e(...q), (C = I)
          } finally {
            Ce = ot
          }
        }
      } else f.run()
  }
  return (
    l && l(P),
    (f = new Ko(a)),
    (f.scheduler = o ? () => o(P, !1) : P),
    (p = (O) => Tu(O, !1, f)),
    (h = f.onStop =
      () => {
        const O = rr.get(f)
        if (O) {
          if (c) c(O, 4)
          else for (const I of O) I()
          rr.delete(f)
        }
      }),
    e ? (r ? P(!0) : (C = f.run())) : o ? o(P.bind(null, !0), !0) : f.run(),
    (N.pause = f.pause.bind(f)),
    (N.resume = f.resume.bind(f)),
    (N.stop = N),
    N
  )
}
function le(t, e = 1 / 0, n) {
  if (e <= 0 || !ft(t) || t.__v_skip || ((n = n || new Set()), n.has(t))) return t
  if ((n.add(t), e--, ht(t))) le(t.value, e, n)
  else if (j(t)) for (let r = 0; r < t.length; r++) le(t[r], e, n)
  else if (No(t) || ze(t))
    t.forEach((r) => {
      le(r, e, n)
    })
  else if (Io(t)) {
    for (const r in t) le(t[r], e, n)
    for (const r of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, r) && le(t[r], e, n)
  }
  return t
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Ln(t, e, n, r) {
  try {
    return r ? t(...r) : t()
  } catch (i) {
    Rr(i, e, n)
  }
}
function te(t, e, n, r) {
  if (z(t)) {
    const i = Ln(t, e, n, r)
    return (
      i &&
        $o(i) &&
        i.catch((s) => {
          Rr(s, e, n)
        }),
      i
    )
  }
  if (j(t)) {
    const i = []
    for (let s = 0; s < t.length; s++) i.push(te(t[s], e, n, r))
    return i
  }
}
function Rr(t, e, n, r = !0) {
  const i = e ? e.vnode : null,
    { errorHandler: s, throwUnhandledErrorInProduction: o } = (e && e.appContext.config) || st
  if (e) {
    let l = e.parent
    const c = e.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; l; ) {
      const f = l.ec
      if (f) {
        for (let a = 0; a < f.length; a++) if (f[a](t, c, u) === !1) return
      }
      l = l.parent
    }
    if (s) {
      Ee(), Ln(s, null, 10, [t, c, u]), Ae()
      return
    }
  }
  $u(t, n, i, r, o)
}
function $u(t, e, n, r = !0, i = !1) {
  if (i) throw t
  console.error(t)
}
const St = []
let Xt = -1
const qe = []
let ye = null,
  Be = 0
const fl = Promise.resolve()
let ir = null
function qi(t) {
  const e = ir || fl
  return t ? e.then(this ? t.bind(this) : t) : e
}
function ku(t) {
  let e = Xt + 1,
    n = St.length
  for (; e < n; ) {
    const r = (e + n) >>> 1,
      i = St[r],
      s = Mn(i)
    s < t || (s === t && i.flags & 2) ? (e = r + 1) : (n = r)
  }
  return e
}
function Wi(t) {
  if (!(t.flags & 1)) {
    const e = Mn(t),
      n = St[St.length - 1]
    !n || (!(t.flags & 2) && e >= Mn(n)) ? St.push(t) : St.splice(ku(e), 0, t), (t.flags |= 1), al()
  }
}
function al() {
  ir || (ir = fl.then(dl))
}
function Iu(t) {
  j(t)
    ? qe.push(...t)
    : ye && t.id === -1
      ? ye.splice(Be + 1, 0, t)
      : t.flags & 1 || (qe.push(t), (t.flags |= 1)),
    al()
}
function _s(t, e, n = Xt + 1) {
  for (; n < St.length; n++) {
    const r = St[n]
    if (r && r.flags & 2) {
      if (t && r.id !== t.uid) continue
      St.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2)
    }
  }
}
function hl(t) {
  if (qe.length) {
    const e = [...new Set(qe)].sort((n, r) => Mn(n) - Mn(r))
    if (((qe.length = 0), ye)) {
      ye.push(...e)
      return
    }
    for (ye = e, Be = 0; Be < ye.length; Be++) {
      const n = ye[Be]
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2)
    }
    ;(ye = null), (Be = 0)
  }
}
const Mn = (t) => (t.id == null ? (t.flags & 2 ? -1 : 1 / 0) : t.id)
function dl(t) {
  try {
    for (Xt = 0; Xt < St.length; Xt++) {
      const e = St[Xt]
      e &&
        !(e.flags & 8) &&
        (e.flags & 4 && (e.flags &= -2), Ln(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2))
    }
  } finally {
    for (; Xt < St.length; Xt++) {
      const e = St[Xt]
      e && (e.flags &= -2)
    }
    ;(Xt = -1), (St.length = 0), hl(), (ir = null), (St.length || qe.length) && dl()
  }
}
let gt = null,
  pl = null
function sr(t) {
  const e = gt
  return (gt = t), (pl = (t && t.type.__scopeId) || null), e
}
function un(t, e = gt, n) {
  if (!e || t._n) return t
  const r = (...i) => {
    r._d && As(-1)
    const s = sr(e)
    let o
    try {
      o = t(...i)
    } finally {
      sr(s), r._d && As(1)
    }
    return o
  }
  return (r._n = !0), (r._c = !0), (r._d = !0), r
}
function Sm(t, e) {
  if (gt === null) return t
  const n = Or(gt),
    r = t.dirs || (t.dirs = [])
  for (let i = 0; i < e.length; i++) {
    let [s, o, l, c = st] = e[i]
    s &&
      (z(s) && (s = { mounted: s, updated: s }),
      s.deep && le(o),
      r.push({ dir: s, instance: n, value: o, oldValue: void 0, arg: l, modifiers: c }))
  }
  return t
}
function Re(t, e, n, r) {
  const i = t.dirs,
    s = e && e.dirs
  for (let o = 0; o < i.length; o++) {
    const l = i[o]
    s && (l.oldValue = s[o].value)
    let c = l.dir[r]
    c && (Ee(), te(c, n, 8, [t.el, l, t, e]), Ae())
  }
}
const Fu = Symbol('_vte'),
  Lu = (t) => t.__isTeleport
function Gi(t, e) {
  t.shapeFlag & 6 && t.component
    ? ((t.transition = e), Gi(t.component.subTree, e))
    : t.shapeFlag & 128
      ? ((t.ssContent.transition = e.clone(t.ssContent)),
        (t.ssFallback.transition = e.clone(t.ssFallback)))
      : (t.transition = e)
}
/*! #__NO_SIDE_EFFECTS__ */ function en(t, e) {
  return z(t) ? mt({ name: t.name }, e, { setup: t }) : t
}
function gl(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + '-', 0, 0]
}
function Hu(t) {
  const e = kf(),
    n = ol(null)
  if (e) {
    const i = e.refs === st ? (e.refs = {}) : e.refs
    Object.defineProperty(i, t, { enumerable: !0, get: () => n.value, set: (s) => (n.value = s) })
  }
  return n
}
function or(t, e, n, r, i = !1) {
  if (j(t)) {
    t.forEach((_, w) => or(_, e && (j(e) ? e[w] : e), n, r, i))
    return
  }
  if (We(r) && !i) {
    r.shapeFlag & 512 &&
      r.type.__asyncResolved &&
      r.component.subTree.component &&
      or(t, e, n, r.component.subTree)
    return
  }
  const s = r.shapeFlag & 4 ? Or(r.component) : r.el,
    o = i ? null : s,
    { i: l, r: c } = t,
    u = e && e.r,
    f = l.refs === st ? (l.refs = {}) : l.refs,
    a = l.setupState,
    h = Y(a),
    p = a === st ? () => !1 : (_) => tt(h, _)
  if (
    (u != null &&
      u !== c &&
      (dt(u) ? ((f[u] = null), p(u) && (a[u] = null)) : ht(u) && (u.value = null)),
    z(c))
  )
    Ln(c, l, 12, [o, f])
  else {
    const _ = dt(c),
      w = ht(c)
    if (_ || w) {
      const k = () => {
        if (t.f) {
          const N = _ ? (p(c) ? a[c] : f[c]) : c.value
          i
            ? j(N) && ki(N, s)
            : j(N)
              ? N.includes(s) || N.push(s)
              : _
                ? ((f[c] = [s]), p(c) && (a[c] = f[c]))
                : ((c.value = [s]), t.k && (f[t.k] = c.value))
        } else _ ? ((f[c] = o), p(c) && (a[c] = o)) : w && ((c.value = o), t.k && (f[t.k] = o))
      }
      o ? ((k.id = -1), Tt(k, n)) : k()
    }
  }
}
Sr().requestIdleCallback
Sr().cancelIdleCallback
const We = (t) => !!t.type.__asyncLoader,
  ml = (t) => t.type.__isKeepAlive
function Du(t, e) {
  _l(t, 'a', e)
}
function Vu(t, e) {
  _l(t, 'da', e)
}
function _l(t, e, n = _t) {
  const r =
    t.__wdc ||
    (t.__wdc = () => {
      let i = n
      for (; i; ) {
        if (i.isDeactivated) return
        i = i.parent
      }
      return t()
    })
  if ((Mr(e, r, n), n)) {
    let i = n.parent
    for (; i && i.parent; ) ml(i.parent.vnode) && Bu(r, e, n, i), (i = i.parent)
  }
}
function Bu(t, e, n, r) {
  const i = Mr(e, t, r, !0)
  vl(() => {
    ki(r[e], i)
  }, n)
}
function Mr(t, e, n = _t, r = !1) {
  if (n) {
    const i = n[t] || (n[t] = []),
      s =
        e.__weh ||
        (e.__weh = (...o) => {
          Ee()
          const l = Hn(n),
            c = te(e, n, t, o)
          return l(), Ae(), c
        })
    return r ? i.unshift(s) : i.push(s), s
  }
}
const de =
    (t) =>
    (e, n = _t) => {
      ;(!On || t === 'sp') && Mr(t, (...r) => e(...r), n)
    },
  ju = de('bm'),
  yl = de('m'),
  Uu = de('bu'),
  Ku = de('u'),
  zu = de('bum'),
  vl = de('um'),
  qu = de('sp'),
  Wu = de('rtg'),
  Gu = de('rtc')
function Xu(t, e = _t) {
  Mr('ec', t, e)
}
const Yu = Symbol.for('v-ndc')
function Em(t, e, n, r) {
  let i
  const s = n,
    o = j(t)
  if (o || dt(t)) {
    const l = o && ue(t)
    let c = !1
    l && ((c = !Ft(t)), (t = Er(t))), (i = new Array(t.length))
    for (let u = 0, f = t.length; u < f; u++) i[u] = e(c ? wt(t[u]) : t[u], u, void 0, s)
  } else if (typeof t == 'number') {
    i = new Array(t)
    for (let l = 0; l < t; l++) i[l] = e(l + 1, l, void 0, s)
  } else if (ft(t))
    if (t[Symbol.iterator]) i = Array.from(t, (l, c) => e(l, c, void 0, s))
    else {
      const l = Object.keys(t)
      i = new Array(l.length)
      for (let c = 0, u = l.length; c < u; c++) {
        const f = l[c]
        i[c] = e(t[f], f, c, s)
      }
    }
  else i = []
  return i
}
function Am(t, e, n = {}, r, i) {
  if (gt.ce || (gt.parent && We(gt.parent) && gt.parent.ce))
    return Lt(), ai(Rt, null, [ut('slot', n, r)], 64)
  let s = t[e]
  s && s._c && (s._d = !1), Lt()
  const o = s && wl(s(n)),
    l = n.key || (o && o.key),
    c = ai(
      Rt,
      { key: (l && !he(l) ? l : `_${e}`) + (!o && r ? '_fb' : '') },
      o || [],
      o && t._ === 1 ? 64 : -2,
    )
  return c.scopeId && (c.slotScopeIds = [c.scopeId + '-s']), s && s._c && (s._d = !0), c
}
function wl(t) {
  return t.some((e) => (Pn(e) ? !(e.type === Se || (e.type === Rt && !wl(e.children))) : !0))
    ? t
    : null
}
const li = (t) => (t ? (Vl(t) ? Or(t) : li(t.parent)) : null),
  vn = mt(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => li(t.parent),
    $root: (t) => li(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Xi(t),
    $forceUpdate: (t) =>
      t.f ||
      (t.f = () => {
        Wi(t.update)
      }),
    $nextTick: (t) => t.n || (t.n = qi.bind(t.proxy)),
    $watch: (t) => vf.bind(t),
  }),
  jr = (t, e) => t !== st && !t.__isScriptSetup && tt(t, e),
  Ju = {
    get({ _: t }, e) {
      if (e === '__v_skip') return !0
      const { ctx: n, setupState: r, data: i, props: s, accessCache: o, type: l, appContext: c } = t
      let u
      if (e[0] !== '$') {
        const p = o[e]
        if (p !== void 0)
          switch (p) {
            case 1:
              return r[e]
            case 2:
              return i[e]
            case 4:
              return n[e]
            case 3:
              return s[e]
          }
        else {
          if (jr(r, e)) return (o[e] = 1), r[e]
          if (i !== st && tt(i, e)) return (o[e] = 2), i[e]
          if ((u = t.propsOptions[0]) && tt(u, e)) return (o[e] = 3), s[e]
          if (n !== st && tt(n, e)) return (o[e] = 4), n[e]
          ci && (o[e] = 0)
        }
      }
      const f = vn[e]
      let a, h
      if (f) return e === '$attrs' && vt(t.attrs, 'get', ''), f(t)
      if ((a = l.__cssModules) && (a = a[e])) return a
      if (n !== st && tt(n, e)) return (o[e] = 4), n[e]
      if (((h = c.config.globalProperties), tt(h, e))) return h[e]
    },
    set({ _: t }, e, n) {
      const { data: r, setupState: i, ctx: s } = t
      return jr(i, e)
        ? ((i[e] = n), !0)
        : r !== st && tt(r, e)
          ? ((r[e] = n), !0)
          : tt(t.props, e) || (e[0] === '$' && e.slice(1) in t)
            ? !1
            : ((s[e] = n), !0)
    },
    has(
      { _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: i, propsOptions: s } },
      o,
    ) {
      let l
      return (
        !!n[o] ||
        (t !== st && tt(t, o)) ||
        jr(e, o) ||
        ((l = s[0]) && tt(l, o)) ||
        tt(r, o) ||
        tt(vn, o) ||
        tt(i.config.globalProperties, o)
      )
    },
    defineProperty(t, e, n) {
      return (
        n.get != null ? (t._.accessCache[e] = 0) : tt(n, 'value') && this.set(t, e, n.value, null),
        Reflect.defineProperty(t, e, n)
      )
    },
  }
function ys(t) {
  return j(t) ? t.reduce((e, n) => ((e[n] = null), e), {}) : t
}
let ci = !0
function Qu(t) {
  const e = Xi(t),
    n = t.proxy,
    r = t.ctx
  ;(ci = !1), e.beforeCreate && vs(e.beforeCreate, t, 'bc')
  const {
    data: i,
    computed: s,
    methods: o,
    watch: l,
    provide: c,
    inject: u,
    created: f,
    beforeMount: a,
    mounted: h,
    beforeUpdate: p,
    updated: _,
    activated: w,
    deactivated: k,
    beforeDestroy: N,
    beforeUnmount: C,
    destroyed: P,
    unmounted: O,
    render: I,
    renderTracked: ot,
    renderTriggered: q,
    errorCaptured: U,
    serverPrefetch: K,
    expose: J,
    inheritAttrs: H,
    components: Z,
    directives: Q,
    filters: Et,
  } = e
  if ((u && Zu(u, r, null), o))
    for (const V in o) {
      const G = o[V]
      z(G) && (r[V] = G.bind(n))
    }
  if (i) {
    const V = i.call(n, n)
    ft(V) && (t.data = Fn(V))
  }
  if (((ci = !0), s))
    for (const V in s) {
      const G = s[V],
        pt = z(G) ? G.bind(n, n) : z(G.get) ? G.get.bind(n, n) : Jt,
        ge = !z(G) && z(G.set) ? G.set.bind(n) : Jt,
        qt = It({ get: pt, set: ge })
      Object.defineProperty(r, V, {
        enumerable: !0,
        configurable: !0,
        get: () => qt.value,
        set: (At) => (qt.value = At),
      })
    }
  if (l) for (const V in l) xl(l[V], r, n, V)
  if (c) {
    const V = z(c) ? c.call(n) : c
    Reflect.ownKeys(V).forEach((G) => {
      Yn(G, V[G])
    })
  }
  f && vs(f, t, 'c')
  function et(V, G) {
    j(G) ? G.forEach((pt) => V(pt.bind(n))) : G && V(G.bind(n))
  }
  if (
    (et(ju, a),
    et(yl, h),
    et(Uu, p),
    et(Ku, _),
    et(Du, w),
    et(Vu, k),
    et(Xu, U),
    et(Gu, ot),
    et(Wu, q),
    et(zu, C),
    et(vl, O),
    et(qu, K),
    j(J))
  )
    if (J.length) {
      const V = t.exposed || (t.exposed = {})
      J.forEach((G) => {
        Object.defineProperty(V, G, { get: () => n[G], set: (pt) => (n[G] = pt) })
      })
    } else t.exposed || (t.exposed = {})
  I && t.render === Jt && (t.render = I),
    H != null && (t.inheritAttrs = H),
    Z && (t.components = Z),
    Q && (t.directives = Q),
    K && gl(t)
}
function Zu(t, e, n = Jt) {
  j(t) && (t = ui(t))
  for (const r in t) {
    const i = t[r]
    let s
    ft(i)
      ? 'default' in i
        ? (s = Qt(i.from || r, i.default, !0))
        : (s = Qt(i.from || r))
      : (s = Qt(i)),
      ht(s)
        ? Object.defineProperty(e, r, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: (o) => (s.value = o),
          })
        : (e[r] = s)
  }
}
function vs(t, e, n) {
  te(j(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy), e, n)
}
function xl(t, e, n, r) {
  let i = r.includes('.') ? Il(n, r) : () => n[r]
  if (dt(t)) {
    const s = e[t]
    z(s) && wn(i, s)
  } else if (z(t)) wn(i, t.bind(n))
  else if (ft(t))
    if (j(t)) t.forEach((s) => xl(s, e, n, r))
    else {
      const s = z(t.handler) ? t.handler.bind(n) : e[t.handler]
      z(s) && wn(i, s, t)
    }
}
function Xi(t) {
  const e = t.type,
    { mixins: n, extends: r } = e,
    {
      mixins: i,
      optionsCache: s,
      config: { optionMergeStrategies: o },
    } = t.appContext,
    l = s.get(e)
  let c
  return (
    l
      ? (c = l)
      : !i.length && !n && !r
        ? (c = e)
        : ((c = {}), i.length && i.forEach((u) => lr(c, u, o, !0)), lr(c, e, o)),
    ft(e) && s.set(e, c),
    c
  )
}
function lr(t, e, n, r = !1) {
  const { mixins: i, extends: s } = e
  s && lr(t, s, n, !0), i && i.forEach((o) => lr(t, o, n, !0))
  for (const o in e)
    if (!(r && o === 'expose')) {
      const l = tf[o] || (n && n[o])
      t[o] = l ? l(t[o], e[o]) : e[o]
    }
  return t
}
const tf = {
  data: ws,
  props: xs,
  emits: xs,
  methods: fn,
  computed: fn,
  beforeCreate: xt,
  created: xt,
  beforeMount: xt,
  mounted: xt,
  beforeUpdate: xt,
  updated: xt,
  beforeDestroy: xt,
  beforeUnmount: xt,
  destroyed: xt,
  unmounted: xt,
  activated: xt,
  deactivated: xt,
  errorCaptured: xt,
  serverPrefetch: xt,
  components: fn,
  directives: fn,
  watch: nf,
  provide: ws,
  inject: ef,
}
function ws(t, e) {
  return e
    ? t
      ? function () {
          return mt(z(t) ? t.call(this, this) : t, z(e) ? e.call(this, this) : e)
        }
      : e
    : t
}
function ef(t, e) {
  return fn(ui(t), ui(e))
}
function ui(t) {
  if (j(t)) {
    const e = {}
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n]
    return e
  }
  return t
}
function xt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e
}
function fn(t, e) {
  return t ? mt(Object.create(null), t, e) : e
}
function xs(t, e) {
  return t
    ? j(t) && j(e)
      ? [...new Set([...t, ...e])]
      : mt(Object.create(null), ys(t), ys(e ?? {}))
    : e
}
function nf(t, e) {
  if (!t) return e
  if (!e) return t
  const n = mt(Object.create(null), t)
  for (const r in e) n[r] = xt(t[r], e[r])
  return n
}
function bl() {
  return {
    app: null,
    config: {
      isNativeTag: Kc,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let rf = 0
function sf(t, e) {
  return function (r, i = null) {
    z(r) || (r = mt({}, r)), i != null && !ft(i) && (i = null)
    const s = bl(),
      o = new WeakSet(),
      l = []
    let c = !1
    const u = (s.app = {
      _uid: rf++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: Vf,
      get config() {
        return s.config
      },
      set config(f) {},
      use(f, ...a) {
        return (
          o.has(f) ||
            (f && z(f.install) ? (o.add(f), f.install(u, ...a)) : z(f) && (o.add(f), f(u, ...a))),
          u
        )
      },
      mixin(f) {
        return s.mixins.includes(f) || s.mixins.push(f), u
      },
      component(f, a) {
        return a ? ((s.components[f] = a), u) : s.components[f]
      },
      directive(f, a) {
        return a ? ((s.directives[f] = a), u) : s.directives[f]
      },
      mount(f, a, h) {
        if (!c) {
          const p = u._ceVNode || ut(r, i)
          return (
            (p.appContext = s),
            h === !0 ? (h = 'svg') : h === !1 && (h = void 0),
            a && e ? e(p, f) : t(p, f, h),
            (c = !0),
            (u._container = f),
            (f.__vue_app__ = u),
            Or(p.component)
          )
        }
      },
      onUnmount(f) {
        l.push(f)
      },
      unmount() {
        c && (te(l, u._instance, 16), t(null, u._container), delete u._container.__vue_app__)
      },
      provide(f, a) {
        return (s.provides[f] = a), u
      },
      runWithContext(f) {
        const a = Te
        Te = u
        try {
          return f()
        } finally {
          Te = a
        }
      },
    })
    return u
  }
}
let Te = null
function Yn(t, e) {
  if (_t) {
    let n = _t.provides
    const r = _t.parent && _t.parent.provides
    r === n && (n = _t.provides = Object.create(r)), (n[t] = e)
  }
}
function Qt(t, e, n = !1) {
  const r = _t || gt
  if (r || Te) {
    const i = Te
      ? Te._context.provides
      : r
        ? r.parent == null
          ? r.vnode.appContext && r.vnode.appContext.provides
          : r.parent.provides
        : void 0
    if (i && t in i) return i[t]
    if (arguments.length > 1) return n && z(e) ? e.call(r && r.proxy) : e
  }
}
function of() {
  return !!(_t || gt || Te)
}
const Sl = {},
  El = () => Object.create(Sl),
  Al = (t) => Object.getPrototypeOf(t) === Sl
function lf(t, e, n, r = !1) {
  const i = {},
    s = El()
  ;(t.propsDefaults = Object.create(null)), Rl(t, e, i, s)
  for (const o in t.propsOptions[0]) o in i || (i[o] = void 0)
  n ? (t.props = r ? i : il(i)) : t.type.props ? (t.props = i) : (t.props = s), (t.attrs = s)
}
function cf(t, e, n, r) {
  const {
      props: i,
      attrs: s,
      vnode: { patchFlag: o },
    } = t,
    l = Y(i),
    [c] = t.propsOptions
  let u = !1
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const f = t.vnode.dynamicProps
      for (let a = 0; a < f.length; a++) {
        let h = f[a]
        if (Cr(t.emitsOptions, h)) continue
        const p = e[h]
        if (c)
          if (tt(s, h)) p !== s[h] && ((s[h] = p), (u = !0))
          else {
            const _ = be(h)
            i[_] = fi(c, l, _, p, t, !1)
          }
        else p !== s[h] && ((s[h] = p), (u = !0))
      }
    }
  } else {
    Rl(t, e, i, s) && (u = !0)
    let f
    for (const a in l)
      (!e || (!tt(e, a) && ((f = Fe(a)) === a || !tt(e, f)))) &&
        (c
          ? n && (n[a] !== void 0 || n[f] !== void 0) && (i[a] = fi(c, l, a, void 0, t, !0))
          : delete i[a])
    if (s !== l) for (const a in s) (!e || !tt(e, a)) && (delete s[a], (u = !0))
  }
  u && oe(t.attrs, 'set', '')
}
function Rl(t, e, n, r) {
  const [i, s] = t.propsOptions
  let o = !1,
    l
  if (e)
    for (let c in e) {
      if (mn(c)) continue
      const u = e[c]
      let f
      i && tt(i, (f = be(c)))
        ? !s || !s.includes(f)
          ? (n[f] = u)
          : ((l || (l = {}))[f] = u)
        : Cr(t.emitsOptions, c) || ((!(c in r) || u !== r[c]) && ((r[c] = u), (o = !0)))
    }
  if (s) {
    const c = Y(n),
      u = l || st
    for (let f = 0; f < s.length; f++) {
      const a = s[f]
      n[a] = fi(i, c, a, u[a], t, !tt(u, a))
    }
  }
  return o
}
function fi(t, e, n, r, i, s) {
  const o = t[n]
  if (o != null) {
    const l = tt(o, 'default')
    if (l && r === void 0) {
      const c = o.default
      if (o.type !== Function && !o.skipFactory && z(c)) {
        const { propsDefaults: u } = i
        if (n in u) r = u[n]
        else {
          const f = Hn(i)
          ;(r = u[n] = c.call(null, e)), f()
        }
      } else r = c
      i.ce && i.ce._setProp(n, r)
    }
    o[0] && (s && !l ? (r = !1) : o[1] && (r === '' || r === Fe(n)) && (r = !0))
  }
  return r
}
const uf = new WeakMap()
function Ml(t, e, n = !1) {
  const r = n ? uf : e.propsCache,
    i = r.get(t)
  if (i) return i
  const s = t.props,
    o = {},
    l = []
  let c = !1
  if (!z(t)) {
    const f = (a) => {
      c = !0
      const [h, p] = Ml(a, e, !0)
      mt(o, h), p && l.push(...p)
    }
    !n && e.mixins.length && e.mixins.forEach(f),
      t.extends && f(t.extends),
      t.mixins && t.mixins.forEach(f)
  }
  if (!s && !c) return ft(t) && r.set(t, Ke), Ke
  if (j(s))
    for (let f = 0; f < s.length; f++) {
      const a = be(s[f])
      bs(a) && (o[a] = st)
    }
  else if (s)
    for (const f in s) {
      const a = be(f)
      if (bs(a)) {
        const h = s[f],
          p = (o[a] = j(h) || z(h) ? { type: h } : mt({}, h)),
          _ = p.type
        let w = !1,
          k = !0
        if (j(_))
          for (let N = 0; N < _.length; ++N) {
            const C = _[N],
              P = z(C) && C.name
            if (P === 'Boolean') {
              w = !0
              break
            } else P === 'String' && (k = !1)
          }
        else w = z(_) && _.name === 'Boolean'
        ;(p[0] = w), (p[1] = k), (w || tt(p, 'default')) && l.push(a)
      }
    }
  const u = [o, l]
  return ft(t) && r.set(t, u), u
}
function bs(t) {
  return t[0] !== '$' && !mn(t)
}
const Cl = (t) => t[0] === '_' || t === '$stable',
  Yi = (t) => (j(t) ? t.map(Yt) : [Yt(t)]),
  ff = (t, e, n) => {
    if (e._n) return e
    const r = un((...i) => Yi(e(...i)), n)
    return (r._c = !1), r
  },
  Pl = (t, e, n) => {
    const r = t._ctx
    for (const i in t) {
      if (Cl(i)) continue
      const s = t[i]
      if (z(s)) e[i] = ff(i, s, r)
      else if (s != null) {
        const o = Yi(s)
        e[i] = () => o
      }
    }
  },
  Ol = (t, e) => {
    const n = Yi(e)
    t.slots.default = () => n
  },
  Tl = (t, e, n) => {
    for (const r in e) (n || r !== '_') && (t[r] = e[r])
  },
  af = (t, e, n) => {
    const r = (t.slots = El())
    if (t.vnode.shapeFlag & 32) {
      const i = e._
      i ? (Tl(r, e, n), n && Lo(r, '_', i, !0)) : Pl(e, r)
    } else e && Ol(t, e)
  },
  hf = (t, e, n) => {
    const { vnode: r, slots: i } = t
    let s = !0,
      o = st
    if (r.shapeFlag & 32) {
      const l = e._
      l ? (n && l === 1 ? (s = !1) : Tl(i, e, n)) : ((s = !e.$stable), Pl(e, i)), (o = e)
    } else e && (Ol(t, e), (o = { default: 1 }))
    if (s) for (const l in i) !Cl(l) && o[l] == null && delete i[l]
  },
  Tt = Rf
function df(t) {
  return pf(t)
}
function pf(t, e) {
  const n = Sr()
  n.__VUE__ = !0
  const {
      insert: r,
      remove: i,
      patchProp: s,
      createElement: o,
      createText: l,
      createComment: c,
      setText: u,
      setElementText: f,
      parentNode: a,
      nextSibling: h,
      setScopeId: p = Jt,
      insertStaticContent: _,
    } = t,
    w = (d, g, m, x = null, y = null, b = null, R = void 0, A = null, E = !!g.dynamicChildren) => {
      if (d === g) return
      d && !sn(d, g) && ((x = v(d)), At(d, y, b, !0), (d = null)),
        g.patchFlag === -2 && ((E = !1), (g.dynamicChildren = null))
      const { type: S, ref: D, shapeFlag: T } = g
      switch (S) {
        case Pr:
          k(d, g, m, x)
          break
        case Se:
          N(d, g, m, x)
          break
        case zr:
          d == null && C(g, m, x, R)
          break
        case Rt:
          Z(d, g, m, x, y, b, R, A, E)
          break
        default:
          T & 1
            ? I(d, g, m, x, y, b, R, A, E)
            : T & 6
              ? Q(d, g, m, x, y, b, R, A, E)
              : (T & 64 || T & 128) && S.process(d, g, m, x, y, b, R, A, E, F)
      }
      D != null && y && or(D, d && d.ref, b, g || d, !g)
    },
    k = (d, g, m, x) => {
      if (d == null) r((g.el = l(g.children)), m, x)
      else {
        const y = (g.el = d.el)
        g.children !== d.children && u(y, g.children)
      }
    },
    N = (d, g, m, x) => {
      d == null ? r((g.el = c(g.children || '')), m, x) : (g.el = d.el)
    },
    C = (d, g, m, x) => {
      ;[d.el, d.anchor] = _(d.children, g, m, x, d.el, d.anchor)
    },
    P = ({ el: d, anchor: g }, m, x) => {
      let y
      for (; d && d !== g; ) (y = h(d)), r(d, m, x), (d = y)
      r(g, m, x)
    },
    O = ({ el: d, anchor: g }) => {
      let m
      for (; d && d !== g; ) (m = h(d)), i(d), (d = m)
      i(g)
    },
    I = (d, g, m, x, y, b, R, A, E) => {
      g.type === 'svg' ? (R = 'svg') : g.type === 'math' && (R = 'mathml'),
        d == null ? ot(g, m, x, y, b, R, A, E) : K(d, g, y, b, R, A, E)
    },
    ot = (d, g, m, x, y, b, R, A) => {
      let E, S
      const { props: D, shapeFlag: T, transition: L, dirs: B } = d
      if (
        ((E = d.el = o(d.type, b, D && D.is, D)),
        T & 8 ? f(E, d.children) : T & 16 && U(d.children, E, null, x, y, Ur(d, b), R, A),
        B && Re(d, null, x, 'created'),
        q(E, d, d.scopeId, R, x),
        D)
      ) {
        for (const lt in D) lt !== 'value' && !mn(lt) && s(E, lt, null, D[lt], b, x)
        'value' in D && s(E, 'value', null, D.value, b), (S = D.onVnodeBeforeMount) && Gt(S, x, d)
      }
      B && Re(d, null, x, 'beforeMount')
      const X = gf(y, L)
      X && L.beforeEnter(E),
        r(E, g, m),
        ((S = D && D.onVnodeMounted) || X || B) &&
          Tt(() => {
            S && Gt(S, x, d), X && L.enter(E), B && Re(d, null, x, 'mounted')
          }, y)
    },
    q = (d, g, m, x, y) => {
      if ((m && p(d, m), x)) for (let b = 0; b < x.length; b++) p(d, x[b])
      if (y) {
        let b = y.subTree
        if (g === b || (Ll(b.type) && (b.ssContent === g || b.ssFallback === g))) {
          const R = y.vnode
          q(d, R, R.scopeId, R.slotScopeIds, y.parent)
        }
      }
    },
    U = (d, g, m, x, y, b, R, A, E = 0) => {
      for (let S = E; S < d.length; S++) {
        const D = (d[S] = A ? ve(d[S]) : Yt(d[S]))
        w(null, D, g, m, x, y, b, R, A)
      }
    },
    K = (d, g, m, x, y, b, R) => {
      const A = (g.el = d.el)
      let { patchFlag: E, dynamicChildren: S, dirs: D } = g
      E |= d.patchFlag & 16
      const T = d.props || st,
        L = g.props || st
      let B
      if (
        (m && Me(m, !1),
        (B = L.onVnodeBeforeUpdate) && Gt(B, m, g, d),
        D && Re(g, d, m, 'beforeUpdate'),
        m && Me(m, !0),
        ((T.innerHTML && L.innerHTML == null) || (T.textContent && L.textContent == null)) &&
          f(A, ''),
        S
          ? J(d.dynamicChildren, S, A, m, x, Ur(g, y), b)
          : R || G(d, g, A, null, m, x, Ur(g, y), b, !1),
        E > 0)
      ) {
        if (E & 16) H(A, T, L, m, y)
        else if (
          (E & 2 && T.class !== L.class && s(A, 'class', null, L.class, y),
          E & 4 && s(A, 'style', T.style, L.style, y),
          E & 8)
        ) {
          const X = g.dynamicProps
          for (let lt = 0; lt < X.length; lt++) {
            const rt = X[lt],
              Ct = T[rt],
              yt = L[rt]
            ;(yt !== Ct || rt === 'value') && s(A, rt, Ct, yt, y, m)
          }
        }
        E & 1 && d.children !== g.children && f(A, g.children)
      } else !R && S == null && H(A, T, L, m, y)
      ;((B = L.onVnodeUpdated) || D) &&
        Tt(() => {
          B && Gt(B, m, g, d), D && Re(g, d, m, 'updated')
        }, x)
    },
    J = (d, g, m, x, y, b, R) => {
      for (let A = 0; A < g.length; A++) {
        const E = d[A],
          S = g[A],
          D = E.el && (E.type === Rt || !sn(E, S) || E.shapeFlag & 70) ? a(E.el) : m
        w(E, S, D, null, x, y, b, R, !0)
      }
    },
    H = (d, g, m, x, y) => {
      if (g !== m) {
        if (g !== st) for (const b in g) !mn(b) && !(b in m) && s(d, b, g[b], null, y, x)
        for (const b in m) {
          if (mn(b)) continue
          const R = m[b],
            A = g[b]
          R !== A && b !== 'value' && s(d, b, A, R, y, x)
        }
        'value' in m && s(d, 'value', g.value, m.value, y)
      }
    },
    Z = (d, g, m, x, y, b, R, A, E) => {
      const S = (g.el = d ? d.el : l('')),
        D = (g.anchor = d ? d.anchor : l(''))
      let { patchFlag: T, dynamicChildren: L, slotScopeIds: B } = g
      B && (A = A ? A.concat(B) : B),
        d == null
          ? (r(S, m, x), r(D, m, x), U(g.children || [], m, D, y, b, R, A, E))
          : T > 0 && T & 64 && L && d.dynamicChildren
            ? (J(d.dynamicChildren, L, m, y, b, R, A),
              (g.key != null || (y && g === y.subTree)) && Nl(d, g, !0))
            : G(d, g, m, D, y, b, R, A, E)
    },
    Q = (d, g, m, x, y, b, R, A, E) => {
      ;(g.slotScopeIds = A),
        d == null
          ? g.shapeFlag & 512
            ? y.ctx.activate(g, m, x, R, E)
            : Et(g, m, x, y, b, R, E)
          : Ht(d, g, E)
    },
    Et = (d, g, m, x, y, b, R) => {
      const A = (d.component = $f(d, x, y))
      if ((ml(d) && (A.ctx.renderer = F), If(A, !1, R), A.asyncDep)) {
        if ((y && y.registerDep(A, et, R), !d.el)) {
          const E = (A.subTree = ut(Se))
          N(null, E, g, m)
        }
      } else et(A, d, g, m, y, b, R)
    },
    Ht = (d, g, m) => {
      const x = (g.component = d.component)
      if (Ef(d, g, m))
        if (x.asyncDep && !x.asyncResolved) {
          V(x, g, m)
          return
        } else (x.next = g), x.update()
      else (g.el = d.el), (x.vnode = g)
    },
    et = (d, g, m, x, y, b, R) => {
      const A = () => {
        if (d.isMounted) {
          let { next: T, bu: L, u: B, parent: X, vnode: lt } = d
          {
            const Pt = $l(d)
            if (Pt) {
              T && ((T.el = lt.el), V(d, T, R)),
                Pt.asyncDep.then(() => {
                  d.isUnmounted || A()
                })
              return
            }
          }
          let rt = T,
            Ct
          Me(d, !1),
            T ? ((T.el = lt.el), V(d, T, R)) : (T = lt),
            L && Lr(L),
            (Ct = T.props && T.props.onVnodeBeforeUpdate) && Gt(Ct, X, T, lt),
            Me(d, !0)
          const yt = Kr(d),
            Dt = d.subTree
          ;(d.subTree = yt),
            w(Dt, yt, a(Dt.el), v(Dt), d, y, b),
            (T.el = yt.el),
            rt === null && Af(d, yt.el),
            B && Tt(B, y),
            (Ct = T.props && T.props.onVnodeUpdated) && Tt(() => Gt(Ct, X, T, lt), y)
        } else {
          let T
          const { el: L, props: B } = g,
            { bm: X, m: lt, parent: rt, root: Ct, type: yt } = d,
            Dt = We(g)
          if (
            (Me(d, !1),
            X && Lr(X),
            !Dt && (T = B && B.onVnodeBeforeMount) && Gt(T, rt, g),
            Me(d, !0),
            L && at)
          ) {
            const Pt = () => {
              ;(d.subTree = Kr(d)), at(L, d.subTree, d, y, null)
            }
            Dt && yt.__asyncHydrate ? yt.__asyncHydrate(L, d, Pt) : Pt()
          } else {
            Ct.ce && Ct.ce._injectChildStyle(yt)
            const Pt = (d.subTree = Kr(d))
            w(null, Pt, m, x, d, y, b), (g.el = Pt.el)
          }
          if ((lt && Tt(lt, y), !Dt && (T = B && B.onVnodeMounted))) {
            const Pt = g
            Tt(() => Gt(T, rt, Pt), y)
          }
          ;(g.shapeFlag & 256 || (rt && We(rt.vnode) && rt.vnode.shapeFlag & 256)) &&
            d.a &&
            Tt(d.a, y),
            (d.isMounted = !0),
            (g = m = x = null)
        }
      }
      d.scope.on()
      const E = (d.effect = new Ko(A))
      d.scope.off()
      const S = (d.update = E.run.bind(E)),
        D = (d.job = E.runIfDirty.bind(E))
      ;(D.i = d), (D.id = d.uid), (E.scheduler = () => Wi(D)), Me(d, !0), S()
    },
    V = (d, g, m) => {
      g.component = d
      const x = d.vnode.props
      ;(d.vnode = g), (d.next = null), cf(d, g.props, x, m), hf(d, g.children, m), Ee(), _s(d), Ae()
    },
    G = (d, g, m, x, y, b, R, A, E = !1) => {
      const S = d && d.children,
        D = d ? d.shapeFlag : 0,
        T = g.children,
        { patchFlag: L, shapeFlag: B } = g
      if (L > 0) {
        if (L & 128) {
          ge(S, T, m, x, y, b, R, A, E)
          return
        } else if (L & 256) {
          pt(S, T, m, x, y, b, R, A, E)
          return
        }
      }
      B & 8
        ? (D & 16 && kt(S, y, b), T !== S && f(m, T))
        : D & 16
          ? B & 16
            ? ge(S, T, m, x, y, b, R, A, E)
            : kt(S, y, b, !0)
          : (D & 8 && f(m, ''), B & 16 && U(T, m, x, y, b, R, A, E))
    },
    pt = (d, g, m, x, y, b, R, A, E) => {
      ;(d = d || Ke), (g = g || Ke)
      const S = d.length,
        D = g.length,
        T = Math.min(S, D)
      let L
      for (L = 0; L < T; L++) {
        const B = (g[L] = E ? ve(g[L]) : Yt(g[L]))
        w(d[L], B, m, null, y, b, R, A, E)
      }
      S > D ? kt(d, y, b, !0, !1, T) : U(g, m, x, y, b, R, A, E, T)
    },
    ge = (d, g, m, x, y, b, R, A, E) => {
      let S = 0
      const D = g.length
      let T = d.length - 1,
        L = D - 1
      for (; S <= T && S <= L; ) {
        const B = d[S],
          X = (g[S] = E ? ve(g[S]) : Yt(g[S]))
        if (sn(B, X)) w(B, X, m, null, y, b, R, A, E)
        else break
        S++
      }
      for (; S <= T && S <= L; ) {
        const B = d[T],
          X = (g[L] = E ? ve(g[L]) : Yt(g[L]))
        if (sn(B, X)) w(B, X, m, null, y, b, R, A, E)
        else break
        T--, L--
      }
      if (S > T) {
        if (S <= L) {
          const B = L + 1,
            X = B < D ? g[B].el : x
          for (; S <= L; ) w(null, (g[S] = E ? ve(g[S]) : Yt(g[S])), m, X, y, b, R, A, E), S++
        }
      } else if (S > L) for (; S <= T; ) At(d[S], y, b, !0), S++
      else {
        const B = S,
          X = S,
          lt = new Map()
        for (S = X; S <= L; S++) {
          const Ot = (g[S] = E ? ve(g[S]) : Yt(g[S]))
          Ot.key != null && lt.set(Ot.key, S)
        }
        let rt,
          Ct = 0
        const yt = L - X + 1
        let Dt = !1,
          Pt = 0
        const nn = new Array(yt)
        for (S = 0; S < yt; S++) nn[S] = 0
        for (S = B; S <= T; S++) {
          const Ot = d[S]
          if (Ct >= yt) {
            At(Ot, y, b, !0)
            continue
          }
          let Wt
          if (Ot.key != null) Wt = lt.get(Ot.key)
          else
            for (rt = X; rt <= L; rt++)
              if (nn[rt - X] === 0 && sn(Ot, g[rt])) {
                Wt = rt
                break
              }
          Wt === void 0
            ? At(Ot, y, b, !0)
            : ((nn[Wt - X] = S + 1),
              Wt >= Pt ? (Pt = Wt) : (Dt = !0),
              w(Ot, g[Wt], m, null, y, b, R, A, E),
              Ct++)
        }
        const hs = Dt ? mf(nn) : Ke
        for (rt = hs.length - 1, S = yt - 1; S >= 0; S--) {
          const Ot = X + S,
            Wt = g[Ot],
            ds = Ot + 1 < D ? g[Ot + 1].el : x
          nn[S] === 0
            ? w(null, Wt, m, ds, y, b, R, A, E)
            : Dt && (rt < 0 || S !== hs[rt] ? qt(Wt, m, ds, 2) : rt--)
        }
      }
    },
    qt = (d, g, m, x, y = null) => {
      const { el: b, type: R, transition: A, children: E, shapeFlag: S } = d
      if (S & 6) {
        qt(d.component.subTree, g, m, x)
        return
      }
      if (S & 128) {
        d.suspense.move(g, m, x)
        return
      }
      if (S & 64) {
        R.move(d, g, m, F)
        return
      }
      if (R === Rt) {
        r(b, g, m)
        for (let T = 0; T < E.length; T++) qt(E[T], g, m, x)
        r(d.anchor, g, m)
        return
      }
      if (R === zr) {
        P(d, g, m)
        return
      }
      if (x !== 2 && S & 1 && A)
        if (x === 0) A.beforeEnter(b), r(b, g, m), Tt(() => A.enter(b), y)
        else {
          const { leave: T, delayLeave: L, afterLeave: B } = A,
            X = () => r(b, g, m),
            lt = () => {
              T(b, () => {
                X(), B && B()
              })
            }
          L ? L(b, X, lt) : lt()
        }
      else r(b, g, m)
    },
    At = (d, g, m, x = !1, y = !1) => {
      const {
        type: b,
        props: R,
        ref: A,
        children: E,
        dynamicChildren: S,
        shapeFlag: D,
        patchFlag: T,
        dirs: L,
        cacheIndex: B,
      } = d
      if (
        (T === -2 && (y = !1),
        A != null && or(A, null, m, d, !0),
        B != null && (g.renderCache[B] = void 0),
        D & 256)
      ) {
        g.ctx.deactivate(d)
        return
      }
      const X = D & 1 && L,
        lt = !We(d)
      let rt
      if ((lt && (rt = R && R.onVnodeBeforeUnmount) && Gt(rt, g, d), D & 6)) jn(d.component, m, x)
      else {
        if (D & 128) {
          d.suspense.unmount(m, x)
          return
        }
        X && Re(d, null, g, 'beforeUnmount'),
          D & 64
            ? d.type.remove(d, g, m, F, x)
            : S && !S.hasOnce && (b !== Rt || (T > 0 && T & 64))
              ? kt(S, g, m, !1, !0)
              : ((b === Rt && T & 384) || (!y && D & 16)) && kt(E, g, m),
          x && Le(d)
      }
      ;((lt && (rt = R && R.onVnodeUnmounted)) || X) &&
        Tt(() => {
          rt && Gt(rt, g, d), X && Re(d, null, g, 'unmounted')
        }, m)
    },
    Le = (d) => {
      const { type: g, el: m, anchor: x, transition: y } = d
      if (g === Rt) {
        He(m, x)
        return
      }
      if (g === zr) {
        O(d)
        return
      }
      const b = () => {
        i(m), y && !y.persisted && y.afterLeave && y.afterLeave()
      }
      if (d.shapeFlag & 1 && y && !y.persisted) {
        const { leave: R, delayLeave: A } = y,
          E = () => R(m, b)
        A ? A(d.el, b, E) : E()
      } else b()
    },
    He = (d, g) => {
      let m
      for (; d !== g; ) (m = h(d)), i(d), (d = m)
      i(g)
    },
    jn = (d, g, m) => {
      const { bum: x, scope: y, job: b, subTree: R, um: A, m: E, a: S } = d
      Ss(E),
        Ss(S),
        x && Lr(x),
        y.stop(),
        b && ((b.flags |= 8), At(R, d, g, m)),
        A && Tt(A, g),
        Tt(() => {
          d.isUnmounted = !0
        }, g),
        g &&
          g.pendingBranch &&
          !g.isUnmounted &&
          d.asyncDep &&
          !d.asyncResolved &&
          d.suspenseId === g.pendingId &&
          (g.deps--, g.deps === 0 && g.resolve())
    },
    kt = (d, g, m, x = !1, y = !1, b = 0) => {
      for (let R = b; R < d.length; R++) At(d[R], g, m, x, y)
    },
    v = (d) => {
      if (d.shapeFlag & 6) return v(d.component.subTree)
      if (d.shapeFlag & 128) return d.suspense.next()
      const g = h(d.anchor || d.el),
        m = g && g[Fu]
      return m ? h(m) : g
    }
  let $ = !1
  const M = (d, g, m) => {
      d == null
        ? g._vnode && At(g._vnode, null, null, !0)
        : w(g._vnode || null, d, g, null, null, null, m),
        (g._vnode = d),
        $ || (($ = !0), _s(), hl(), ($ = !1))
    },
    F = { p: w, um: At, m: qt, r: Le, mt: Et, mc: U, pc: G, pbc: J, n: v, o: t }
  let nt, at
  return { render: M, hydrate: nt, createApp: sf(M, nt) }
}
function Ur({ type: t, props: e }, n) {
  return (n === 'svg' && t === 'foreignObject') ||
    (n === 'mathml' && t === 'annotation-xml' && e && e.encoding && e.encoding.includes('html'))
    ? void 0
    : n
}
function Me({ effect: t, job: e }, n) {
  n ? ((t.flags |= 32), (e.flags |= 4)) : ((t.flags &= -33), (e.flags &= -5))
}
function gf(t, e) {
  return (!t || (t && !t.pendingBranch)) && e && !e.persisted
}
function Nl(t, e, n = !1) {
  const r = t.children,
    i = e.children
  if (j(r) && j(i))
    for (let s = 0; s < r.length; s++) {
      const o = r[s]
      let l = i[s]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = i[s] = ve(i[s])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && Nl(o, l)),
        l.type === Pr && (l.el = o.el)
    }
}
function mf(t) {
  const e = t.slice(),
    n = [0]
  let r, i, s, o, l
  const c = t.length
  for (r = 0; r < c; r++) {
    const u = t[r]
    if (u !== 0) {
      if (((i = n[n.length - 1]), t[i] < u)) {
        ;(e[r] = i), n.push(r)
        continue
      }
      for (s = 0, o = n.length - 1; s < o; ) (l = (s + o) >> 1), t[n[l]] < u ? (s = l + 1) : (o = l)
      u < t[n[s]] && (s > 0 && (e[r] = n[s - 1]), (n[s] = r))
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0; ) (n[s] = o), (o = e[o])
  return n
}
function $l(t) {
  const e = t.subTree.component
  if (e) return e.asyncDep && !e.asyncResolved ? e : $l(e)
}
function Ss(t) {
  if (t) for (let e = 0; e < t.length; e++) t[e].flags |= 8
}
const _f = Symbol.for('v-scx'),
  yf = () => Qt(_f)
function wn(t, e, n) {
  return kl(t, e, n)
}
function kl(t, e, n = st) {
  const { immediate: r, deep: i, flush: s, once: o } = n,
    l = mt({}, n),
    c = (e && r) || (!e && s !== 'post')
  let u
  if (On) {
    if (s === 'sync') {
      const p = yf()
      u = p.__watcherHandles || (p.__watcherHandles = [])
    } else if (!c) {
      const p = () => {}
      return (p.stop = Jt), (p.resume = Jt), (p.pause = Jt), p
    }
  }
  const f = _t
  l.call = (p, _, w) => te(p, f, _, w)
  let a = !1
  s === 'post'
    ? (l.scheduler = (p) => {
        Tt(p, f && f.suspense)
      })
    : s !== 'sync' &&
      ((a = !0),
      (l.scheduler = (p, _) => {
        _ ? p() : Wi(p)
      })),
    (l.augmentJob = (p) => {
      e && (p.flags |= 4), a && ((p.flags |= 2), f && ((p.id = f.uid), (p.i = f)))
    })
  const h = Nu(t, e, l)
  return On && (u ? u.push(h) : c && h()), h
}
function vf(t, e, n) {
  const r = this.proxy,
    i = dt(t) ? (t.includes('.') ? Il(r, t) : () => r[t]) : t.bind(r, r)
  let s
  z(e) ? (s = e) : ((s = e.handler), (n = e))
  const o = Hn(this),
    l = kl(i, s.bind(r), n)
  return o(), l
}
function Il(t, e) {
  const n = e.split('.')
  return () => {
    let r = t
    for (let i = 0; i < n.length && r; i++) r = r[n[i]]
    return r
  }
}
const wf = (t, e) =>
  e === 'modelValue' || e === 'model-value'
    ? t.modelModifiers
    : t[`${e}Modifiers`] || t[`${be(e)}Modifiers`] || t[`${Fe(e)}Modifiers`]
function xf(t, e, ...n) {
  if (t.isUnmounted) return
  const r = t.vnode.props || st
  let i = n
  const s = e.startsWith('update:'),
    o = s && wf(r, e.slice(7))
  o && (o.trim && (i = n.map((f) => (dt(f) ? f.trim() : f))), o.number && (i = n.map(Xc)))
  let l,
    c = r[(l = Fr(e))] || r[(l = Fr(be(e)))]
  !c && s && (c = r[(l = Fr(Fe(e)))]), c && te(c, t, 6, i)
  const u = r[l + 'Once']
  if (u) {
    if (!t.emitted) t.emitted = {}
    else if (t.emitted[l]) return
    ;(t.emitted[l] = !0), te(u, t, 6, i)
  }
}
function Fl(t, e, n = !1) {
  const r = e.emitsCache,
    i = r.get(t)
  if (i !== void 0) return i
  const s = t.emits
  let o = {},
    l = !1
  if (!z(t)) {
    const c = (u) => {
      const f = Fl(u, e, !0)
      f && ((l = !0), mt(o, f))
    }
    !n && e.mixins.length && e.mixins.forEach(c),
      t.extends && c(t.extends),
      t.mixins && t.mixins.forEach(c)
  }
  return !s && !l
    ? (ft(t) && r.set(t, null), null)
    : (j(s) ? s.forEach((c) => (o[c] = null)) : mt(o, s), ft(t) && r.set(t, o), o)
}
function Cr(t, e) {
  return !t || !wr(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, '')),
      tt(t, e[0].toLowerCase() + e.slice(1)) || tt(t, Fe(e)) || tt(t, e))
}
function Kr(t) {
  const {
      type: e,
      vnode: n,
      proxy: r,
      withProxy: i,
      propsOptions: [s],
      slots: o,
      attrs: l,
      emit: c,
      render: u,
      renderCache: f,
      props: a,
      data: h,
      setupState: p,
      ctx: _,
      inheritAttrs: w,
    } = t,
    k = sr(t)
  let N, C
  try {
    if (n.shapeFlag & 4) {
      const O = i || r,
        I = O
      ;(N = Yt(u.call(I, O, f, a, p, h, _))), (C = l)
    } else {
      const O = e
      ;(N = Yt(O.length > 1 ? O(a, { attrs: l, slots: o, emit: c }) : O(a, null))),
        (C = e.props ? l : bf(l))
    }
  } catch (O) {
    ;(xn.length = 0), Rr(O, t, 1), (N = ut(Se))
  }
  let P = N
  if (C && w !== !1) {
    const O = Object.keys(C),
      { shapeFlag: I } = P
    O.length && I & 7 && (s && O.some($i) && (C = Sf(C, s)), (P = Xe(P, C, !1, !0)))
  }
  return (
    n.dirs && ((P = Xe(P, null, !1, !0)), (P.dirs = P.dirs ? P.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Gi(P, n.transition),
    (N = P),
    sr(k),
    N
  )
}
const bf = (t) => {
    let e
    for (const n in t) (n === 'class' || n === 'style' || wr(n)) && ((e || (e = {}))[n] = t[n])
    return e
  },
  Sf = (t, e) => {
    const n = {}
    for (const r in t) (!$i(r) || !(r.slice(9) in e)) && (n[r] = t[r])
    return n
  }
function Ef(t, e, n) {
  const { props: r, children: i, component: s } = t,
    { props: o, children: l, patchFlag: c } = e,
    u = s.emitsOptions
  if (e.dirs || e.transition) return !0
  if (n && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return r ? Es(r, o, u) : !!o
    if (c & 8) {
      const f = e.dynamicProps
      for (let a = 0; a < f.length; a++) {
        const h = f[a]
        if (o[h] !== r[h] && !Cr(u, h)) return !0
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? (o ? Es(r, o, u) : !0) : !!o
  return !1
}
function Es(t, e, n) {
  const r = Object.keys(e)
  if (r.length !== Object.keys(t).length) return !0
  for (let i = 0; i < r.length; i++) {
    const s = r[i]
    if (e[s] !== t[s] && !Cr(n, s)) return !0
  }
  return !1
}
function Af({ vnode: t, parent: e }, n) {
  for (; e; ) {
    const r = e.subTree
    if ((r.suspense && r.suspense.activeBranch === t && (r.el = t.el), r === t))
      ((t = e.vnode).el = n), (e = e.parent)
    else break
  }
}
const Ll = (t) => t.__isSuspense
function Rf(t, e) {
  e && e.pendingBranch ? (j(t) ? e.effects.push(...t) : e.effects.push(t)) : Iu(t)
}
const Rt = Symbol.for('v-fgt'),
  Pr = Symbol.for('v-txt'),
  Se = Symbol.for('v-cmt'),
  zr = Symbol.for('v-stc'),
  xn = []
let Nt = null
function Lt(t = !1) {
  xn.push((Nt = t ? null : []))
}
function Mf() {
  xn.pop(), (Nt = xn[xn.length - 1] || null)
}
let Cn = 1
function As(t, e = !1) {
  ;(Cn += t), t < 0 && Nt && e && (Nt.hasOnce = !0)
}
function Hl(t) {
  return (t.dynamicChildren = Cn > 0 ? Nt || Ke : null), Mf(), Cn > 0 && Nt && Nt.push(t), t
}
function pe(t, e, n, r, i, s) {
  return Hl(W(t, e, n, r, i, s, !0))
}
function ai(t, e, n, r, i) {
  return Hl(ut(t, e, n, r, i, !0))
}
function Pn(t) {
  return t ? t.__v_isVNode === !0 : !1
}
function sn(t, e) {
  return t.type === e.type && t.key === e.key
}
const Dl = ({ key: t }) => t ?? null,
  Jn = ({ ref: t, ref_key: e, ref_for: n }) => (
    typeof t == 'number' && (t = '' + t),
    t != null ? (dt(t) || ht(t) || z(t) ? { i: gt, r: t, k: e, f: !!n } : t) : null
  )
function W(t, e = null, n = null, r = 0, i = null, s = t === Rt ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Dl(e),
    ref: e && Jn(e),
    scopeId: pl,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: gt,
  }
  return (
    l ? (Ji(c, n), s & 128 && t.normalize(c)) : n && (c.shapeFlag |= dt(n) ? 8 : 16),
    Cn > 0 && !o && Nt && (c.patchFlag > 0 || s & 6) && c.patchFlag !== 32 && Nt.push(c),
    c
  )
}
const ut = Cf
function Cf(t, e = null, n = null, r = 0, i = null, s = !1) {
  if (((!t || t === Yu) && (t = Se), Pn(t))) {
    const l = Xe(t, e, !0)
    return (
      n && Ji(l, n),
      Cn > 0 && !s && Nt && (l.shapeFlag & 6 ? (Nt[Nt.indexOf(t)] = l) : Nt.push(l)),
      (l.patchFlag = -2),
      l
    )
  }
  if ((Df(t) && (t = t.__vccOpts), e)) {
    e = Pf(e)
    let { class: l, style: c } = e
    l && !dt(l) && (e.class = Li(l)),
      ft(c) && (Ki(c) && !j(c) && (c = mt({}, c)), (e.style = Fi(c)))
  }
  const o = dt(t) ? 1 : Ll(t) ? 128 : Lu(t) ? 64 : ft(t) ? 4 : z(t) ? 2 : 0
  return W(t, e, n, r, i, o, s, !0)
}
function Pf(t) {
  return t ? (Ki(t) || Al(t) ? mt({}, t) : t) : null
}
function Xe(t, e, n = !1, r = !1) {
  const { props: i, ref: s, patchFlag: o, children: l, transition: c } = t,
    u = e ? Of(i || {}, e) : i,
    f = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: t.type,
      props: u,
      key: u && Dl(u),
      ref: e && e.ref ? (n && s ? (j(s) ? s.concat(Jn(e)) : [s, Jn(e)]) : Jn(e)) : s,
      scopeId: t.scopeId,
      slotScopeIds: t.slotScopeIds,
      children: l,
      target: t.target,
      targetStart: t.targetStart,
      targetAnchor: t.targetAnchor,
      staticCount: t.staticCount,
      shapeFlag: t.shapeFlag,
      patchFlag: e && t.type !== Rt ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: t.dynamicProps,
      dynamicChildren: t.dynamicChildren,
      appContext: t.appContext,
      dirs: t.dirs,
      transition: c,
      component: t.component,
      suspense: t.suspense,
      ssContent: t.ssContent && Xe(t.ssContent),
      ssFallback: t.ssFallback && Xe(t.ssFallback),
      el: t.el,
      anchor: t.anchor,
      ctx: t.ctx,
      ce: t.ce,
    }
  return c && r && Gi(f, c.clone(f)), f
}
function ce(t = ' ', e = 0) {
  return ut(Pr, null, t, e)
}
function Rm(t = '', e = !1) {
  return e ? (Lt(), ai(Se, null, t)) : ut(Se, null, t)
}
function Yt(t) {
  return t == null || typeof t == 'boolean'
    ? ut(Se)
    : j(t)
      ? ut(Rt, null, t.slice())
      : Pn(t)
        ? ve(t)
        : ut(Pr, null, String(t))
}
function ve(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : Xe(t)
}
function Ji(t, e) {
  let n = 0
  const { shapeFlag: r } = t
  if (e == null) e = null
  else if (j(e)) n = 16
  else if (typeof e == 'object')
    if (r & 65) {
      const i = e.default
      i && (i._c && (i._d = !1), Ji(t, i()), i._c && (i._d = !0))
      return
    } else {
      n = 32
      const i = e._
      !i && !Al(e)
        ? (e._ctx = gt)
        : i === 3 && gt && (gt.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)))
    }
  else
    z(e)
      ? ((e = { default: e, _ctx: gt }), (n = 32))
      : ((e = String(e)), r & 64 ? ((n = 16), (e = [ce(e)])) : (n = 8))
  ;(t.children = e), (t.shapeFlag |= n)
}
function Of(...t) {
  const e = {}
  for (let n = 0; n < t.length; n++) {
    const r = t[n]
    for (const i in r)
      if (i === 'class') e.class !== r.class && (e.class = Li([e.class, r.class]))
      else if (i === 'style') e.style = Fi([e.style, r.style])
      else if (wr(i)) {
        const s = e[i],
          o = r[i]
        o && s !== o && !(j(s) && s.includes(o)) && (e[i] = s ? [].concat(s, o) : o)
      } else i !== '' && (e[i] = r[i])
  }
  return e
}
function Gt(t, e, n, r = null) {
  te(t, e, 7, [n, r])
}
const Tf = bl()
let Nf = 0
function $f(t, e, n) {
  const r = t.type,
    i = (e ? e.appContext : t.appContext) || Tf,
    s = {
      uid: Nf++,
      vnode: t,
      type: r,
      parent: e,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Bo(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(i.provides),
      ids: e ? e.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Ml(r, i),
      emitsOptions: Fl(r, i),
      emit: null,
      emitted: null,
      propsDefaults: st,
      inheritAttrs: r.inheritAttrs,
      ctx: st,
      data: st,
      props: st,
      attrs: st,
      slots: st,
      refs: st,
      setupState: st,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (s.ctx = { _: s }), (s.root = e ? e.root : s), (s.emit = xf.bind(null, s)), t.ce && t.ce(s), s
  )
}
let _t = null
const kf = () => _t || gt
let cr, hi
{
  const t = Sr(),
    e = (n, r) => {
      let i
      return (
        (i = t[n]) || (i = t[n] = []),
        i.push(r),
        (s) => {
          i.length > 1 ? i.forEach((o) => o(s)) : i[0](s)
        }
      )
    }
  ;(cr = e('__VUE_INSTANCE_SETTERS__', (n) => (_t = n))),
    (hi = e('__VUE_SSR_SETTERS__', (n) => (On = n)))
}
const Hn = (t) => {
    const e = _t
    return (
      cr(t),
      t.scope.on(),
      () => {
        t.scope.off(), cr(e)
      }
    )
  },
  Rs = () => {
    _t && _t.scope.off(), cr(null)
  }
function Vl(t) {
  return t.vnode.shapeFlag & 4
}
let On = !1
function If(t, e = !1, n = !1) {
  e && hi(e)
  const { props: r, children: i } = t.vnode,
    s = Vl(t)
  lf(t, r, s, e), af(t, i, n)
  const o = s ? Ff(t, e) : void 0
  return e && hi(!1), o
}
function Ff(t, e) {
  const n = t.type
  ;(t.accessCache = Object.create(null)), (t.proxy = new Proxy(t.ctx, Ju))
  const { setup: r } = n
  if (r) {
    Ee()
    const i = (t.setupContext = r.length > 1 ? Hf(t) : null),
      s = Hn(t),
      o = Ln(r, t, 0, [t.props, i]),
      l = $o(o)
    if ((Ae(), s(), (l || t.sp) && !We(t) && gl(t), l)) {
      if ((o.then(Rs, Rs), e))
        return o
          .then((c) => {
            Ms(t, c, e)
          })
          .catch((c) => {
            Rr(c, t, 0)
          })
      t.asyncDep = o
    } else Ms(t, o, e)
  } else Bl(t, e)
}
function Ms(t, e, n) {
  z(e)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = e)
      : (t.render = e)
    : ft(e) && (t.setupState = cl(e)),
    Bl(t, n)
}
let Cs
function Bl(t, e, n) {
  const r = t.type
  if (!t.render) {
    if (!e && Cs && !r.render) {
      const i = r.template || Xi(t).template
      if (i) {
        const { isCustomElement: s, compilerOptions: o } = t.appContext.config,
          { delimiters: l, compilerOptions: c } = r,
          u = mt(mt({ isCustomElement: s, delimiters: l }, o), c)
        r.render = Cs(i, u)
      }
    }
    t.render = r.render || Jt
  }
  {
    const i = Hn(t)
    Ee()
    try {
      Qu(t)
    } finally {
      Ae(), i()
    }
  }
}
const Lf = {
  get(t, e) {
    return vt(t, 'get', ''), t[e]
  },
}
function Hf(t) {
  const e = (n) => {
    t.exposed = n || {}
  }
  return { attrs: new Proxy(t.attrs, Lf), slots: t.slots, emit: t.emit, expose: e }
}
function Or(t) {
  return t.exposed
    ? t.exposeProxy ||
        (t.exposeProxy = new Proxy(cl(zi(t.exposed)), {
          get(e, n) {
            if (n in e) return e[n]
            if (n in vn) return vn[n](t)
          },
          has(e, n) {
            return n in e || n in vn
          },
        }))
    : t.proxy
}
function Df(t) {
  return z(t) && '__vccOpts' in t
}
const It = (t, e) => Ou(t, e, On)
function jl(t, e, n) {
  const r = arguments.length
  return r === 2
    ? ft(e) && !j(e)
      ? Pn(e)
        ? ut(t, null, [e])
        : ut(t, e)
      : ut(t, null, e)
    : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && Pn(n) && (n = [n]),
      ut(t, e, n))
}
const Vf = '3.5.13'
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let di
const Ps = typeof window < 'u' && window.trustedTypes
if (Ps)
  try {
    di = Ps.createPolicy('vue', { createHTML: (t) => t })
  } catch {}
const Ul = di ? (t) => di.createHTML(t) : (t) => t,
  Bf = 'http://www.w3.org/2000/svg',
  jf = 'http://www.w3.org/1998/Math/MathML',
  se = typeof document < 'u' ? document : null,
  Os = se && se.createElement('template'),
  Uf = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null)
    },
    remove: (t) => {
      const e = t.parentNode
      e && e.removeChild(t)
    },
    createElement: (t, e, n, r) => {
      const i =
        e === 'svg'
          ? se.createElementNS(Bf, t)
          : e === 'mathml'
            ? se.createElementNS(jf, t)
            : n
              ? se.createElement(t, { is: n })
              : se.createElement(t)
      return t === 'select' && r && r.multiple != null && i.setAttribute('multiple', r.multiple), i
    },
    createText: (t) => se.createTextNode(t),
    createComment: (t) => se.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e
    },
    setElementText: (t, e) => {
      t.textContent = e
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => se.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, '')
    },
    insertStaticContent(t, e, n, r, i, s) {
      const o = n ? n.previousSibling : e.lastChild
      if (i && (i === s || i.nextSibling))
        for (; e.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)); );
      else {
        Os.innerHTML = Ul(
          r === 'svg' ? `<svg>${t}</svg>` : r === 'mathml' ? `<math>${t}</math>` : t,
        )
        const l = Os.content
        if (r === 'svg' || r === 'mathml') {
          const c = l.firstChild
          for (; c.firstChild; ) l.appendChild(c.firstChild)
          l.removeChild(c)
        }
        e.insertBefore(l, n)
      }
      return [o ? o.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild]
    },
  },
  Kf = Symbol('_vtc')
function zf(t, e, n) {
  const r = t[Kf]
  r && (e = (e ? [e, ...r] : [...r]).join(' ')),
    e == null ? t.removeAttribute('class') : n ? t.setAttribute('class', e) : (t.className = e)
}
const ur = Symbol('_vod'),
  Kl = Symbol('_vsh'),
  Mm = {
    beforeMount(t, { value: e }, { transition: n }) {
      ;(t[ur] = t.style.display === 'none' ? '' : t.style.display),
        n && e ? n.beforeEnter(t) : on(t, e)
    },
    mounted(t, { value: e }, { transition: n }) {
      n && e && n.enter(t)
    },
    updated(t, { value: e, oldValue: n }, { transition: r }) {
      !e != !n &&
        (r
          ? e
            ? (r.beforeEnter(t), on(t, !0), r.enter(t))
            : r.leave(t, () => {
                on(t, !1)
              })
          : on(t, e))
    },
    beforeUnmount(t, { value: e }) {
      on(t, e)
    },
  }
function on(t, e) {
  ;(t.style.display = e ? t[ur] : 'none'), (t[Kl] = !e)
}
const qf = Symbol(''),
  Wf = /(^|;)\s*display\s*:/
function Gf(t, e, n) {
  const r = t.style,
    i = dt(n)
  let s = !1
  if (n && !i) {
    if (e)
      if (dt(e))
        for (const o of e.split(';')) {
          const l = o.slice(0, o.indexOf(':')).trim()
          n[l] == null && Qn(r, l, '')
        }
      else for (const o in e) n[o] == null && Qn(r, o, '')
    for (const o in n) o === 'display' && (s = !0), Qn(r, o, n[o])
  } else if (i) {
    if (e !== n) {
      const o = r[qf]
      o && (n += ';' + o), (r.cssText = n), (s = Wf.test(n))
    }
  } else e && t.removeAttribute('style')
  ur in t && ((t[ur] = s ? r.display : ''), t[Kl] && (r.display = 'none'))
}
const Ts = /\s*!important$/
function Qn(t, e, n) {
  if (j(n)) n.forEach((r) => Qn(t, e, r))
  else if ((n == null && (n = ''), e.startsWith('--'))) t.setProperty(e, n)
  else {
    const r = Xf(t, e)
    Ts.test(n) ? t.setProperty(Fe(r), n.replace(Ts, ''), 'important') : (t[r] = n)
  }
}
const Ns = ['Webkit', 'Moz', 'ms'],
  qr = {}
function Xf(t, e) {
  const n = qr[e]
  if (n) return n
  let r = be(e)
  if (r !== 'filter' && r in t) return (qr[e] = r)
  r = Fo(r)
  for (let i = 0; i < Ns.length; i++) {
    const s = Ns[i] + r
    if (s in t) return (qr[e] = s)
  }
  return e
}
const $s = 'http://www.w3.org/1999/xlink'
function ks(t, e, n, r, i, s = eu(e)) {
  r && e.startsWith('xlink:')
    ? n == null
      ? t.removeAttributeNS($s, e.slice(6, e.length))
      : t.setAttributeNS($s, e, n)
    : n == null || (s && !Ho(n))
      ? t.removeAttribute(e)
      : t.setAttribute(e, s ? '' : he(n) ? String(n) : n)
}
function Is(t, e, n, r, i) {
  if (e === 'innerHTML' || e === 'textContent') {
    n != null && (t[e] = e === 'innerHTML' ? Ul(n) : n)
    return
  }
  const s = t.tagName
  if (e === 'value' && s !== 'PROGRESS' && !s.includes('-')) {
    const l = s === 'OPTION' ? t.getAttribute('value') || '' : t.value,
      c = n == null ? (t.type === 'checkbox' ? 'on' : '') : String(n)
    ;(l !== c || !('_value' in t)) && (t.value = c),
      n == null && t.removeAttribute(e),
      (t._value = n)
    return
  }
  let o = !1
  if (n === '' || n == null) {
    const l = typeof t[e]
    l === 'boolean'
      ? (n = Ho(n))
      : n == null && l === 'string'
        ? ((n = ''), (o = !0))
        : l === 'number' && ((n = 0), (o = !0))
  }
  try {
    t[e] = n
  } catch {}
  o && t.removeAttribute(i || e)
}
function Yf(t, e, n, r) {
  t.addEventListener(e, n, r)
}
function Jf(t, e, n, r) {
  t.removeEventListener(e, n, r)
}
const Fs = Symbol('_vei')
function Qf(t, e, n, r, i = null) {
  const s = t[Fs] || (t[Fs] = {}),
    o = s[e]
  if (r && o) o.value = r
  else {
    const [l, c] = Zf(e)
    if (r) {
      const u = (s[e] = na(r, i))
      Yf(t, l, u, c)
    } else o && (Jf(t, l, o, c), (s[e] = void 0))
  }
}
const Ls = /(?:Once|Passive|Capture)$/
function Zf(t) {
  let e
  if (Ls.test(t)) {
    e = {}
    let r
    for (; (r = t.match(Ls)); )
      (t = t.slice(0, t.length - r[0].length)), (e[r[0].toLowerCase()] = !0)
  }
  return [t[2] === ':' ? t.slice(3) : Fe(t.slice(2)), e]
}
let Wr = 0
const ta = Promise.resolve(),
  ea = () => Wr || (ta.then(() => (Wr = 0)), (Wr = Date.now()))
function na(t, e) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now()
    else if (r._vts <= n.attached) return
    te(ra(r, n.value), e, 5, [r])
  }
  return (n.value = t), (n.attached = ea()), n
}
function ra(t, e) {
  if (j(e)) {
    const n = t.stopImmediatePropagation
    return (
      (t.stopImmediatePropagation = () => {
        n.call(t), (t._stopped = !0)
      }),
      e.map((r) => (i) => !i._stopped && r && r(i))
    )
  } else return e
}
const Hs = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    t.charCodeAt(2) > 96 &&
    t.charCodeAt(2) < 123,
  ia = (t, e, n, r, i, s) => {
    const o = i === 'svg'
    e === 'class'
      ? zf(t, r, o)
      : e === 'style'
        ? Gf(t, n, r)
        : wr(e)
          ? $i(e) || Qf(t, e, n, r, s)
          : (
                e[0] === '.'
                  ? ((e = e.slice(1)), !0)
                  : e[0] === '^'
                    ? ((e = e.slice(1)), !1)
                    : sa(t, e, r, o)
              )
            ? (Is(t, e, r),
              !t.tagName.includes('-') &&
                (e === 'value' || e === 'checked' || e === 'selected') &&
                ks(t, e, r, o, s, e !== 'value'))
            : t._isVueCE && (/[A-Z]/.test(e) || !dt(r))
              ? Is(t, be(e), r, s, e)
              : (e === 'true-value'
                  ? (t._trueValue = r)
                  : e === 'false-value' && (t._falseValue = r),
                ks(t, e, r, o))
  }
function sa(t, e, n, r) {
  if (r) return !!(e === 'innerHTML' || e === 'textContent' || (e in t && Hs(e) && z(n)))
  if (
    e === 'spellcheck' ||
    e === 'draggable' ||
    e === 'translate' ||
    e === 'form' ||
    (e === 'list' && t.tagName === 'INPUT') ||
    (e === 'type' && t.tagName === 'TEXTAREA')
  )
    return !1
  if (e === 'width' || e === 'height') {
    const i = t.tagName
    if (i === 'IMG' || i === 'VIDEO' || i === 'CANVAS' || i === 'SOURCE') return !1
  }
  return Hs(e) && dt(n) ? !1 : e in t
}
const oa = ['ctrl', 'shift', 'alt', 'meta'],
  la = {
    stop: (t) => t.stopPropagation(),
    prevent: (t) => t.preventDefault(),
    self: (t) => t.target !== t.currentTarget,
    ctrl: (t) => !t.ctrlKey,
    shift: (t) => !t.shiftKey,
    alt: (t) => !t.altKey,
    meta: (t) => !t.metaKey,
    left: (t) => 'button' in t && t.button !== 0,
    middle: (t) => 'button' in t && t.button !== 1,
    right: (t) => 'button' in t && t.button !== 2,
    exact: (t, e) => oa.some((n) => t[`${n}Key`] && !e.includes(n)),
  },
  Cm = (t, e) => {
    const n = t._withMods || (t._withMods = {}),
      r = e.join('.')
    return (
      n[r] ||
      (n[r] = (i, ...s) => {
        for (let o = 0; o < e.length; o++) {
          const l = la[e[o]]
          if (l && l(i, e)) return
        }
        return t(i, ...s)
      })
    )
  },
  ca = mt({ patchProp: ia }, Uf)
let Ds
function ua() {
  return Ds || (Ds = df(ca))
}
const fa = (...t) => {
  const e = ua().createApp(...t),
    { mount: n } = e
  return (
    (e.mount = (r) => {
      const i = ha(r)
      if (!i) return
      const s = e._component
      !z(s) && !s.render && !s.template && (s.template = i.innerHTML),
        i.nodeType === 1 && (i.textContent = '')
      const o = n(i, !1, aa(i))
      return (
        i instanceof Element && (i.removeAttribute('v-cloak'), i.setAttribute('data-v-app', '')), o
      )
    }),
    e
  )
}
function aa(t) {
  if (t instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && t instanceof MathMLElement) return 'mathml'
}
function ha(t) {
  return dt(t) ? document.querySelector(t) : t
}
var da = !1
/*!
 * pinia v2.2.6
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ let zl
const Tr = (t) => (zl = t),
  ql = Symbol()
function pi(t) {
  return (
    t &&
    typeof t == 'object' &&
    Object.prototype.toString.call(t) === '[object Object]' &&
    typeof t.toJSON != 'function'
  )
}
var bn
;(function (t) {
  ;(t.direct = 'direct'), (t.patchObject = 'patch object'), (t.patchFunction = 'patch function')
})(bn || (bn = {}))
function pa() {
  const t = jo(!0),
    e = t.run(() => Ar({}))
  let n = [],
    r = []
  const i = zi({
    install(s) {
      Tr(i),
        (i._a = s),
        s.provide(ql, i),
        (s.config.globalProperties.$pinia = i),
        r.forEach((o) => n.push(o)),
        (r = [])
    },
    use(s) {
      return !this._a && !da ? r.push(s) : n.push(s), this
    },
    _p: n,
    _a: null,
    _e: t,
    _s: new Map(),
    state: e,
  })
  return i
}
const Wl = () => {}
function Vs(t, e, n, r = Wl) {
  t.push(e)
  const i = () => {
    const s = t.indexOf(e)
    s > -1 && (t.splice(s, 1), r())
  }
  return !n && Uo() && ru(i), i
}
function Ve(t, ...e) {
  t.slice().forEach((n) => {
    n(...e)
  })
}
const ga = (t) => t(),
  Bs = Symbol(),
  Gr = Symbol()
function gi(t, e) {
  t instanceof Map && e instanceof Map
    ? e.forEach((n, r) => t.set(r, n))
    : t instanceof Set && e instanceof Set && e.forEach(t.add, t)
  for (const n in e) {
    if (!e.hasOwnProperty(n)) continue
    const r = e[n],
      i = t[n]
    pi(i) && pi(r) && t.hasOwnProperty(n) && !ht(r) && !ue(r) ? (t[n] = gi(i, r)) : (t[n] = r)
  }
  return t
}
const ma = Symbol()
function _a(t) {
  return !pi(t) || !t.hasOwnProperty(ma)
}
const { assign: _e } = Object
function ya(t) {
  return !!(ht(t) && t.effect)
}
function va(t, e, n, r) {
  const { state: i, actions: s, getters: o } = e,
    l = n.state.value[t]
  let c
  function u() {
    l || (n.state.value[t] = i ? i() : {})
    const f = Au(n.state.value[t])
    return _e(
      f,
      s,
      Object.keys(o || {}).reduce(
        (a, h) => (
          (a[h] = zi(
            It(() => {
              Tr(n)
              const p = n._s.get(t)
              return o[h].call(p, p)
            }),
          )),
          a
        ),
        {},
      ),
    )
  }
  return (c = Gl(t, u, e, n, r, !0)), c
}
function Gl(t, e, n = {}, r, i, s) {
  let o
  const l = _e({ actions: {} }, n),
    c = { deep: !0 }
  let u,
    f,
    a = [],
    h = [],
    p
  const _ = r.state.value[t]
  !s && !_ && (r.state.value[t] = {}), Ar({})
  let w
  function k(U) {
    let K
    ;(u = f = !1),
      typeof U == 'function'
        ? (U(r.state.value[t]), (K = { type: bn.patchFunction, storeId: t, events: p }))
        : (gi(r.state.value[t], U),
          (K = { type: bn.patchObject, payload: U, storeId: t, events: p }))
    const J = (w = Symbol())
    qi().then(() => {
      w === J && (u = !0)
    }),
      (f = !0),
      Ve(a, K, r.state.value[t])
  }
  const N = s
    ? function () {
        const { state: K } = n,
          J = K ? K() : {}
        this.$patch((H) => {
          _e(H, J)
        })
      }
    : Wl
  function C() {
    o.stop(), (a = []), (h = []), r._s.delete(t)
  }
  const P = (U, K = '') => {
      if (Bs in U) return (U[Gr] = K), U
      const J = function () {
        Tr(r)
        const H = Array.from(arguments),
          Z = [],
          Q = []
        function Et(V) {
          Z.push(V)
        }
        function Ht(V) {
          Q.push(V)
        }
        Ve(h, { args: H, name: J[Gr], store: I, after: Et, onError: Ht })
        let et
        try {
          et = U.apply(this && this.$id === t ? this : I, H)
        } catch (V) {
          throw (Ve(Q, V), V)
        }
        return et instanceof Promise
          ? et.then((V) => (Ve(Z, V), V)).catch((V) => (Ve(Q, V), Promise.reject(V)))
          : (Ve(Z, et), et)
      }
      return (J[Bs] = !0), (J[Gr] = K), J
    },
    O = {
      _p: r,
      $id: t,
      $onAction: Vs.bind(null, h),
      $patch: k,
      $reset: N,
      $subscribe(U, K = {}) {
        const J = Vs(a, U, K.detached, () => H()),
          H = o.run(() =>
            wn(
              () => r.state.value[t],
              (Z) => {
                ;(K.flush === 'sync' ? f : u) && U({ storeId: t, type: bn.direct, events: p }, Z)
              },
              _e({}, c, K),
            ),
          )
        return J
      },
      $dispose: C,
    },
    I = Fn(O)
  r._s.set(t, I)
  const q = ((r._a && r._a.runWithContext) || ga)(() =>
    r._e.run(() => (o = jo()).run(() => e({ action: P }))),
  )
  for (const U in q) {
    const K = q[U]
    if ((ht(K) && !ya(K)) || ue(K))
      s || (_ && _a(K) && (ht(K) ? (K.value = _[U]) : gi(K, _[U])), (r.state.value[t][U] = K))
    else if (typeof K == 'function') {
      const J = P(K, U)
      ;(q[U] = J), (l.actions[U] = K)
    }
  }
  return (
    _e(I, q),
    _e(Y(I), q),
    Object.defineProperty(I, '$state', {
      get: () => r.state.value[t],
      set: (U) => {
        k((K) => {
          _e(K, U)
        })
      },
    }),
    r._p.forEach((U) => {
      _e(
        I,
        o.run(() => U({ store: I, app: r._a, pinia: r, options: l })),
      )
    }),
    _ && s && n.hydrate && n.hydrate(I.$state, _),
    (u = !0),
    (f = !0),
    I
  )
}
/*! #__NO_SIDE_EFFECTS__ */ function Pm(t, e, n) {
  let r, i
  const s = typeof e == 'function'
  ;(r = t), (i = s ? n : e)
  function o(l, c) {
    const u = of()
    return (
      (l = l || (u ? Qt(ql, null) : null)),
      l && Tr(l),
      (l = zl),
      l._s.has(r) || (s ? Gl(r, e, i, l) : va(r, i, l)),
      l._s.get(r)
    )
  }
  return (o.$id = r), o
}
function Om(t) {
  {
    const e = Y(t),
      n = {}
    for (const r in e) {
      const i = e[r]
      ;(ht(i) || ue(i)) && (n[r] = Cu(t, r))
    }
    return n
  }
}
/*!
 * vue-router v4.4.5
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const je = typeof document < 'u'
function Xl(t) {
  return typeof t == 'object' || 'displayName' in t || 'props' in t || '__vccOpts' in t
}
function wa(t) {
  return t.__esModule || t[Symbol.toStringTag] === 'Module' || (t.default && Xl(t.default))
}
const it = Object.assign
function Xr(t, e) {
  const n = {}
  for (const r in e) {
    const i = e[r]
    n[r] = Kt(i) ? i.map(t) : t(i)
  }
  return n
}
const Sn = () => {},
  Kt = Array.isArray,
  Yl = /#/g,
  xa = /&/g,
  ba = /\//g,
  Sa = /=/g,
  Ea = /\?/g,
  Jl = /\+/g,
  Aa = /%5B/g,
  Ra = /%5D/g,
  Ql = /%5E/g,
  Ma = /%60/g,
  Zl = /%7B/g,
  Ca = /%7C/g,
  tc = /%7D/g,
  Pa = /%20/g
function Qi(t) {
  return encodeURI('' + t)
    .replace(Ca, '|')
    .replace(Aa, '[')
    .replace(Ra, ']')
}
function Oa(t) {
  return Qi(t).replace(Zl, '{').replace(tc, '}').replace(Ql, '^')
}
function mi(t) {
  return Qi(t)
    .replace(Jl, '%2B')
    .replace(Pa, '+')
    .replace(Yl, '%23')
    .replace(xa, '%26')
    .replace(Ma, '`')
    .replace(Zl, '{')
    .replace(tc, '}')
    .replace(Ql, '^')
}
function Ta(t) {
  return mi(t).replace(Sa, '%3D')
}
function Na(t) {
  return Qi(t).replace(Yl, '%23').replace(Ea, '%3F')
}
function $a(t) {
  return t == null ? '' : Na(t).replace(ba, '%2F')
}
function Tn(t) {
  try {
    return decodeURIComponent('' + t)
  } catch {}
  return '' + t
}
const ka = /\/$/,
  Ia = (t) => t.replace(ka, '')
function Yr(t, e, n = '/') {
  let r,
    i = {},
    s = '',
    o = ''
  const l = e.indexOf('#')
  let c = e.indexOf('?')
  return (
    l < c && l >= 0 && (c = -1),
    c > -1 && ((r = e.slice(0, c)), (s = e.slice(c + 1, l > -1 ? l : e.length)), (i = t(s))),
    l > -1 && ((r = r || e.slice(0, l)), (o = e.slice(l, e.length))),
    (r = Da(r ?? e, n)),
    { fullPath: r + (s && '?') + s + o, path: r, query: i, hash: Tn(o) }
  )
}
function Fa(t, e) {
  const n = e.query ? t(e.query) : ''
  return e.path + (n && '?') + n + (e.hash || '')
}
function js(t, e) {
  return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || '/'
}
function La(t, e, n) {
  const r = e.matched.length - 1,
    i = n.matched.length - 1
  return (
    r > -1 &&
    r === i &&
    Ye(e.matched[r], n.matched[i]) &&
    ec(e.params, n.params) &&
    t(e.query) === t(n.query) &&
    e.hash === n.hash
  )
}
function Ye(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e)
}
function ec(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) return !1
  for (const n in t) if (!Ha(t[n], e[n])) return !1
  return !0
}
function Ha(t, e) {
  return Kt(t) ? Us(t, e) : Kt(e) ? Us(e, t) : t === e
}
function Us(t, e) {
  return Kt(e)
    ? t.length === e.length && t.every((n, r) => n === e[r])
    : t.length === 1 && t[0] === e
}
function Da(t, e) {
  if (t.startsWith('/')) return t
  if (!t) return e
  const n = e.split('/'),
    r = t.split('/'),
    i = r[r.length - 1]
  ;(i === '..' || i === '.') && r.push('')
  let s = n.length - 1,
    o,
    l
  for (o = 0; o < r.length; o++)
    if (((l = r[o]), l !== '.'))
      if (l === '..') s > 1 && s--
      else break
  return n.slice(0, s).join('/') + '/' + r.slice(o).join('/')
}
const me = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0,
}
var Nn
;(function (t) {
  ;(t.pop = 'pop'), (t.push = 'push')
})(Nn || (Nn = {}))
var En
;(function (t) {
  ;(t.back = 'back'), (t.forward = 'forward'), (t.unknown = '')
})(En || (En = {}))
function Va(t) {
  if (!t)
    if (je) {
      const e = document.querySelector('base')
      ;(t = (e && e.getAttribute('href')) || '/'), (t = t.replace(/^\w+:\/\/[^\/]+/, ''))
    } else t = '/'
  return t[0] !== '/' && t[0] !== '#' && (t = '/' + t), Ia(t)
}
const Ba = /^[^#]+#/
function ja(t, e) {
  return t.replace(Ba, '#') + e
}
function Ua(t, e) {
  const n = document.documentElement.getBoundingClientRect(),
    r = t.getBoundingClientRect()
  return {
    behavior: e.behavior,
    left: r.left - n.left - (e.left || 0),
    top: r.top - n.top - (e.top || 0),
  }
}
const Nr = () => ({ left: window.scrollX, top: window.scrollY })
function Ka(t) {
  let e
  if ('el' in t) {
    const n = t.el,
      r = typeof n == 'string' && n.startsWith('#'),
      i =
        typeof n == 'string'
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!i) return
    e = Ua(i, t)
  } else e = t
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(e)
    : window.scrollTo(
        e.left != null ? e.left : window.scrollX,
        e.top != null ? e.top : window.scrollY,
      )
}
function Ks(t, e) {
  return (history.state ? history.state.position - e : -1) + t
}
const _i = new Map()
function za(t, e) {
  _i.set(t, e)
}
function qa(t) {
  const e = _i.get(t)
  return _i.delete(t), e
}
let Wa = () => location.protocol + '//' + location.host
function nc(t, e) {
  const { pathname: n, search: r, hash: i } = e,
    s = t.indexOf('#')
  if (s > -1) {
    let l = i.includes(t.slice(s)) ? t.slice(s).length : 1,
      c = i.slice(l)
    return c[0] !== '/' && (c = '/' + c), js(c, '')
  }
  return js(n, t) + r + i
}
function Ga(t, e, n, r) {
  let i = [],
    s = [],
    o = null
  const l = ({ state: h }) => {
    const p = nc(t, location),
      _ = n.value,
      w = e.value
    let k = 0
    if (h) {
      if (((n.value = p), (e.value = h), o && o === _)) {
        o = null
        return
      }
      k = w ? h.position - w.position : 0
    } else r(p)
    i.forEach((N) => {
      N(n.value, _, {
        delta: k,
        type: Nn.pop,
        direction: k ? (k > 0 ? En.forward : En.back) : En.unknown,
      })
    })
  }
  function c() {
    o = n.value
  }
  function u(h) {
    i.push(h)
    const p = () => {
      const _ = i.indexOf(h)
      _ > -1 && i.splice(_, 1)
    }
    return s.push(p), p
  }
  function f() {
    const { history: h } = window
    h.state && h.replaceState(it({}, h.state, { scroll: Nr() }), '')
  }
  function a() {
    for (const h of s) h()
    ;(s = []),
      window.removeEventListener('popstate', l),
      window.removeEventListener('beforeunload', f)
  }
  return (
    window.addEventListener('popstate', l),
    window.addEventListener('beforeunload', f, { passive: !0 }),
    { pauseListeners: c, listen: u, destroy: a }
  )
}
function zs(t, e, n, r = !1, i = !1) {
  return {
    back: t,
    current: e,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: i ? Nr() : null,
  }
}
function Xa(t) {
  const { history: e, location: n } = window,
    r = { value: nc(t, n) },
    i = { value: e.state }
  i.value ||
    s(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: e.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    )
  function s(c, u, f) {
    const a = t.indexOf('#'),
      h = a > -1 ? (n.host && document.querySelector('base') ? t : t.slice(a)) + c : Wa() + t + c
    try {
      e[f ? 'replaceState' : 'pushState'](u, '', h), (i.value = u)
    } catch (p) {
      console.error(p), n[f ? 'replace' : 'assign'](h)
    }
  }
  function o(c, u) {
    const f = it({}, e.state, zs(i.value.back, c, i.value.forward, !0), u, {
      position: i.value.position,
    })
    s(c, f, !0), (r.value = c)
  }
  function l(c, u) {
    const f = it({}, i.value, e.state, { forward: c, scroll: Nr() })
    s(f.current, f, !0)
    const a = it({}, zs(r.value, c, null), { position: f.position + 1 }, u)
    s(c, a, !1), (r.value = c)
  }
  return { location: r, state: i, push: l, replace: o }
}
function Ya(t) {
  t = Va(t)
  const e = Xa(t),
    n = Ga(t, e.state, e.location, e.replace)
  function r(s, o = !0) {
    o || n.pauseListeners(), history.go(s)
  }
  const i = it({ location: '', base: t, go: r, createHref: ja.bind(null, t) }, e, n)
  return (
    Object.defineProperty(i, 'location', { enumerable: !0, get: () => e.location.value }),
    Object.defineProperty(i, 'state', { enumerable: !0, get: () => e.state.value }),
    i
  )
}
function Ja(t) {
  return (
    (t = location.host ? t || location.pathname + location.search : ''),
    t.includes('#') || (t += '#'),
    Ya(t)
  )
}
function Qa(t) {
  return typeof t == 'string' || (t && typeof t == 'object')
}
function rc(t) {
  return typeof t == 'string' || typeof t == 'symbol'
}
const ic = Symbol('')
var qs
;(function (t) {
  ;(t[(t.aborted = 4)] = 'aborted'),
    (t[(t.cancelled = 8)] = 'cancelled'),
    (t[(t.duplicated = 16)] = 'duplicated')
})(qs || (qs = {}))
function Je(t, e) {
  return it(new Error(), { type: t, [ic]: !0 }, e)
}
function re(t, e) {
  return t instanceof Error && ic in t && (e == null || !!(t.type & e))
}
const Ws = '[^/]+?',
  Za = { sensitive: !1, strict: !1, start: !0, end: !0 },
  th = /[.+*?^${}()[\]/\\]/g
function eh(t, e) {
  const n = it({}, Za, e),
    r = []
  let i = n.start ? '^' : ''
  const s = []
  for (const u of t) {
    const f = u.length ? [] : [90]
    n.strict && !u.length && (i += '/')
    for (let a = 0; a < u.length; a++) {
      const h = u[a]
      let p = 40 + (n.sensitive ? 0.25 : 0)
      if (h.type === 0) a || (i += '/'), (i += h.value.replace(th, '\\$&')), (p += 40)
      else if (h.type === 1) {
        const { value: _, repeatable: w, optional: k, regexp: N } = h
        s.push({ name: _, repeatable: w, optional: k })
        const C = N || Ws
        if (C !== Ws) {
          p += 10
          try {
            new RegExp(`(${C})`)
          } catch (O) {
            throw new Error(`Invalid custom RegExp for param "${_}" (${C}): ` + O.message)
          }
        }
        let P = w ? `((?:${C})(?:/(?:${C}))*)` : `(${C})`
        a || (P = k && u.length < 2 ? `(?:/${P})` : '/' + P),
          k && (P += '?'),
          (i += P),
          (p += 20),
          k && (p += -8),
          w && (p += -20),
          C === '.*' && (p += -50)
      }
      f.push(p)
    }
    r.push(f)
  }
  if (n.strict && n.end) {
    const u = r.length - 1
    r[u][r[u].length - 1] += 0.7000000000000001
  }
  n.strict || (i += '/?'), n.end ? (i += '$') : n.strict && (i += '(?:/|$)')
  const o = new RegExp(i, n.sensitive ? '' : 'i')
  function l(u) {
    const f = u.match(o),
      a = {}
    if (!f) return null
    for (let h = 1; h < f.length; h++) {
      const p = f[h] || '',
        _ = s[h - 1]
      a[_.name] = p && _.repeatable ? p.split('/') : p
    }
    return a
  }
  function c(u) {
    let f = '',
      a = !1
    for (const h of t) {
      ;(!a || !f.endsWith('/')) && (f += '/'), (a = !1)
      for (const p of h)
        if (p.type === 0) f += p.value
        else if (p.type === 1) {
          const { value: _, repeatable: w, optional: k } = p,
            N = _ in u ? u[_] : ''
          if (Kt(N) && !w)
            throw new Error(
              `Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const C = Kt(N) ? N.join('/') : N
          if (!C)
            if (k) h.length < 2 && (f.endsWith('/') ? (f = f.slice(0, -1)) : (a = !0))
            else throw new Error(`Missing required param "${_}"`)
          f += C
        }
    }
    return f || '/'
  }
  return { re: o, score: r, keys: s, parse: l, stringify: c }
}
function nh(t, e) {
  let n = 0
  for (; n < t.length && n < e.length; ) {
    const r = e[n] - t[n]
    if (r) return r
    n++
  }
  return t.length < e.length
    ? t.length === 1 && t[0] === 80
      ? -1
      : 1
    : t.length > e.length
      ? e.length === 1 && e[0] === 80
        ? 1
        : -1
      : 0
}
function sc(t, e) {
  let n = 0
  const r = t.score,
    i = e.score
  for (; n < r.length && n < i.length; ) {
    const s = nh(r[n], i[n])
    if (s) return s
    n++
  }
  if (Math.abs(i.length - r.length) === 1) {
    if (Gs(r)) return 1
    if (Gs(i)) return -1
  }
  return i.length - r.length
}
function Gs(t) {
  const e = t[t.length - 1]
  return t.length > 0 && e[e.length - 1] < 0
}
const rh = { type: 0, value: '' },
  ih = /[a-zA-Z0-9_]/
function sh(t) {
  if (!t) return [[]]
  if (t === '/') return [[rh]]
  if (!t.startsWith('/')) throw new Error(`Invalid path "${t}"`)
  function e(p) {
    throw new Error(`ERR (${n})/"${u}": ${p}`)
  }
  let n = 0,
    r = n
  const i = []
  let s
  function o() {
    s && i.push(s), (s = [])
  }
  let l = 0,
    c,
    u = '',
    f = ''
  function a() {
    u &&
      (n === 0
        ? s.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
          ? (s.length > 1 &&
              (c === '*' || c === '+') &&
              e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
            s.push({
              type: 1,
              value: u,
              regexp: f,
              repeatable: c === '*' || c === '+',
              optional: c === '*' || c === '?',
            }))
          : e('Invalid state to consume buffer'),
      (u = ''))
  }
  function h() {
    u += c
  }
  for (; l < t.length; ) {
    if (((c = t[l++]), c === '\\' && n !== 2)) {
      ;(r = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        c === '/' ? (u && a(), o()) : c === ':' ? (a(), (n = 1)) : h()
        break
      case 4:
        h(), (n = r)
        break
      case 1:
        c === '('
          ? (n = 2)
          : ih.test(c)
            ? h()
            : (a(), (n = 0), c !== '*' && c !== '?' && c !== '+' && l--)
        break
      case 2:
        c === ')' ? (f[f.length - 1] == '\\' ? (f = f.slice(0, -1) + c) : (n = 3)) : (f += c)
        break
      case 3:
        a(), (n = 0), c !== '*' && c !== '?' && c !== '+' && l--, (f = '')
        break
      default:
        e('Unknown state')
        break
    }
  }
  return n === 2 && e(`Unfinished custom RegExp for param "${u}"`), a(), o(), i
}
function oh(t, e, n) {
  const r = eh(sh(t.path), n),
    i = it(r, { record: t, parent: e, children: [], alias: [] })
  return e && !i.record.aliasOf == !e.record.aliasOf && e.children.push(i), i
}
function lh(t, e) {
  const n = [],
    r = new Map()
  e = Qs({ strict: !1, end: !0, sensitive: !1 }, e)
  function i(a) {
    return r.get(a)
  }
  function s(a, h, p) {
    const _ = !p,
      w = Ys(a)
    w.aliasOf = p && p.record
    const k = Qs(e, a),
      N = [w]
    if ('alias' in a) {
      const O = typeof a.alias == 'string' ? [a.alias] : a.alias
      for (const I of O)
        N.push(
          Ys(
            it({}, w, {
              components: p ? p.record.components : w.components,
              path: I,
              aliasOf: p ? p.record : w,
            }),
          ),
        )
    }
    let C, P
    for (const O of N) {
      const { path: I } = O
      if (h && I[0] !== '/') {
        const ot = h.record.path,
          q = ot[ot.length - 1] === '/' ? '' : '/'
        O.path = h.record.path + (I && q + I)
      }
      if (
        ((C = oh(O, h, k)),
        p
          ? p.alias.push(C)
          : ((P = P || C), P !== C && P.alias.push(C), _ && a.name && !Js(C) && o(a.name)),
        oc(C) && c(C),
        w.children)
      ) {
        const ot = w.children
        for (let q = 0; q < ot.length; q++) s(ot[q], C, p && p.children[q])
      }
      p = p || C
    }
    return P
      ? () => {
          o(P)
        }
      : Sn
  }
  function o(a) {
    if (rc(a)) {
      const h = r.get(a)
      h && (r.delete(a), n.splice(n.indexOf(h), 1), h.children.forEach(o), h.alias.forEach(o))
    } else {
      const h = n.indexOf(a)
      h > -1 &&
        (n.splice(h, 1),
        a.record.name && r.delete(a.record.name),
        a.children.forEach(o),
        a.alias.forEach(o))
    }
  }
  function l() {
    return n
  }
  function c(a) {
    const h = fh(a, n)
    n.splice(h, 0, a), a.record.name && !Js(a) && r.set(a.record.name, a)
  }
  function u(a, h) {
    let p,
      _ = {},
      w,
      k
    if ('name' in a && a.name) {
      if (((p = r.get(a.name)), !p)) throw Je(1, { location: a })
      ;(k = p.record.name),
        (_ = it(
          Xs(
            h.params,
            p.keys
              .filter((P) => !P.optional)
              .concat(p.parent ? p.parent.keys.filter((P) => P.optional) : [])
              .map((P) => P.name),
          ),
          a.params &&
            Xs(
              a.params,
              p.keys.map((P) => P.name),
            ),
        )),
        (w = p.stringify(_))
    } else if (a.path != null)
      (w = a.path), (p = n.find((P) => P.re.test(w))), p && ((_ = p.parse(w)), (k = p.record.name))
    else {
      if (((p = h.name ? r.get(h.name) : n.find((P) => P.re.test(h.path))), !p))
        throw Je(1, { location: a, currentLocation: h })
      ;(k = p.record.name), (_ = it({}, h.params, a.params)), (w = p.stringify(_))
    }
    const N = []
    let C = p
    for (; C; ) N.unshift(C.record), (C = C.parent)
    return { name: k, path: w, params: _, matched: N, meta: uh(N) }
  }
  t.forEach((a) => s(a))
  function f() {
    ;(n.length = 0), r.clear()
  }
  return {
    addRoute: s,
    resolve: u,
    removeRoute: o,
    clearRoutes: f,
    getRoutes: l,
    getRecordMatcher: i,
  }
}
function Xs(t, e) {
  const n = {}
  for (const r of e) r in t && (n[r] = t[r])
  return n
}
function Ys(t) {
  const e = {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: t.aliasOf,
    beforeEnter: t.beforeEnter,
    props: ch(t),
    children: t.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in t ? t.components || null : t.component && { default: t.component },
  }
  return Object.defineProperty(e, 'mods', { value: {} }), e
}
function ch(t) {
  const e = {},
    n = t.props || !1
  if ('component' in t) e.default = n
  else for (const r in t.components) e[r] = typeof n == 'object' ? n[r] : n
  return e
}
function Js(t) {
  for (; t; ) {
    if (t.record.aliasOf) return !0
    t = t.parent
  }
  return !1
}
function uh(t) {
  return t.reduce((e, n) => it(e, n.meta), {})
}
function Qs(t, e) {
  const n = {}
  for (const r in t) n[r] = r in e ? e[r] : t[r]
  return n
}
function fh(t, e) {
  let n = 0,
    r = e.length
  for (; n !== r; ) {
    const s = (n + r) >> 1
    sc(t, e[s]) < 0 ? (r = s) : (n = s + 1)
  }
  const i = ah(t)
  return i && (r = e.lastIndexOf(i, r - 1)), r
}
function ah(t) {
  let e = t
  for (; (e = e.parent); ) if (oc(e) && sc(t, e) === 0) return e
}
function oc({ record: t }) {
  return !!(t.name || (t.components && Object.keys(t.components).length) || t.redirect)
}
function hh(t) {
  const e = {}
  if (t === '' || t === '?') return e
  const r = (t[0] === '?' ? t.slice(1) : t).split('&')
  for (let i = 0; i < r.length; ++i) {
    const s = r[i].replace(Jl, ' '),
      o = s.indexOf('='),
      l = Tn(o < 0 ? s : s.slice(0, o)),
      c = o < 0 ? null : Tn(s.slice(o + 1))
    if (l in e) {
      let u = e[l]
      Kt(u) || (u = e[l] = [u]), u.push(c)
    } else e[l] = c
  }
  return e
}
function Zs(t) {
  let e = ''
  for (let n in t) {
    const r = t[n]
    if (((n = Ta(n)), r == null)) {
      r !== void 0 && (e += (e.length ? '&' : '') + n)
      continue
    }
    ;(Kt(r) ? r.map((s) => s && mi(s)) : [r && mi(r)]).forEach((s) => {
      s !== void 0 && ((e += (e.length ? '&' : '') + n), s != null && (e += '=' + s))
    })
  }
  return e
}
function dh(t) {
  const e = {}
  for (const n in t) {
    const r = t[n]
    r !== void 0 &&
      (e[n] = Kt(r) ? r.map((i) => (i == null ? null : '' + i)) : r == null ? r : '' + r)
  }
  return e
}
const ph = Symbol(''),
  to = Symbol(''),
  Zi = Symbol(''),
  lc = Symbol(''),
  yi = Symbol('')
function ln() {
  let t = []
  function e(r) {
    return (
      t.push(r),
      () => {
        const i = t.indexOf(r)
        i > -1 && t.splice(i, 1)
      }
    )
  }
  function n() {
    t = []
  }
  return { add: e, list: () => t.slice(), reset: n }
}
function we(t, e, n, r, i, s = (o) => o()) {
  const o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || [])
  return () =>
    new Promise((l, c) => {
      const u = (h) => {
          h === !1
            ? c(Je(4, { from: n, to: e }))
            : h instanceof Error
              ? c(h)
              : Qa(h)
                ? c(Je(2, { from: e, to: h }))
                : (o && r.enterCallbacks[i] === o && typeof h == 'function' && o.push(h), l())
        },
        f = s(() => t.call(r && r.instances[i], e, n, u))
      let a = Promise.resolve(f)
      t.length < 3 && (a = a.then(u)), a.catch((h) => c(h))
    })
}
function Jr(t, e, n, r, i = (s) => s()) {
  const s = []
  for (const o of t)
    for (const l in o.components) {
      let c = o.components[l]
      if (!(e !== 'beforeRouteEnter' && !o.instances[l]))
        if (Xl(c)) {
          const f = (c.__vccOpts || c)[e]
          f && s.push(we(f, n, r, o, l, i))
        } else {
          let u = c()
          s.push(() =>
            u.then((f) => {
              if (!f) throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`)
              const a = wa(f) ? f.default : f
              ;(o.mods[l] = f), (o.components[l] = a)
              const p = (a.__vccOpts || a)[e]
              return p && we(p, n, r, o, l, i)()
            }),
          )
        }
    }
  return s
}
function eo(t) {
  const e = Qt(Zi),
    n = Qt(lc),
    r = It(() => {
      const c = Bt(t.to)
      return e.resolve(c)
    }),
    i = It(() => {
      const { matched: c } = r.value,
        { length: u } = c,
        f = c[u - 1],
        a = n.matched
      if (!f || !a.length) return -1
      const h = a.findIndex(Ye.bind(null, f))
      if (h > -1) return h
      const p = no(c[u - 2])
      return u > 1 && no(f) === p && a[a.length - 1].path !== p
        ? a.findIndex(Ye.bind(null, c[u - 2]))
        : h
    }),
    s = It(() => i.value > -1 && _h(n.params, r.value.params)),
    o = It(() => i.value > -1 && i.value === n.matched.length - 1 && ec(n.params, r.value.params))
  function l(c = {}) {
    return mh(c) ? e[Bt(t.replace) ? 'replace' : 'push'](Bt(t.to)).catch(Sn) : Promise.resolve()
  }
  return { route: r, href: It(() => r.value.href), isActive: s, isExactActive: o, navigate: l }
}
const gh = en({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: eo,
    setup(t, { slots: e }) {
      const n = Fn(eo(t)),
        { options: r } = Qt(Zi),
        i = It(() => ({
          [ro(t.activeClass, r.linkActiveClass, 'router-link-active')]: n.isActive,
          [ro(t.exactActiveClass, r.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive,
        }))
      return () => {
        const s = e.default && e.default(n)
        return t.custom
          ? s
          : jl(
              'a',
              {
                'aria-current': n.isExactActive ? t.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value,
              },
              s,
            )
      }
    },
  }),
  an = gh
function mh(t) {
  if (
    !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) &&
    !t.defaultPrevented &&
    !(t.button !== void 0 && t.button !== 0)
  ) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const e = t.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(e)) return
    }
    return t.preventDefault && t.preventDefault(), !0
  }
}
function _h(t, e) {
  for (const n in e) {
    const r = e[n],
      i = t[n]
    if (typeof r == 'string') {
      if (r !== i) return !1
    } else if (!Kt(i) || i.length !== r.length || r.some((s, o) => s !== i[o])) return !1
  }
  return !0
}
function no(t) {
  return t ? (t.aliasOf ? t.aliasOf.path : t.path) : ''
}
const ro = (t, e, n) => t ?? e ?? n,
  yh = en({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(t, { attrs: e, slots: n }) {
      const r = Qt(yi),
        i = It(() => t.route || r.value),
        s = Qt(to, 0),
        o = It(() => {
          let u = Bt(s)
          const { matched: f } = i.value
          let a
          for (; (a = f[u]) && !a.components; ) u++
          return u
        }),
        l = It(() => i.value.matched[o.value])
      Yn(
        to,
        It(() => o.value + 1),
      ),
        Yn(ph, l),
        Yn(yi, i)
      const c = Ar()
      return (
        wn(
          () => [c.value, l.value, t.name],
          ([u, f, a], [h, p, _]) => {
            f &&
              ((f.instances[a] = u),
              p &&
                p !== f &&
                u &&
                u === h &&
                (f.leaveGuards.size || (f.leaveGuards = p.leaveGuards),
                f.updateGuards.size || (f.updateGuards = p.updateGuards))),
              u && f && (!p || !Ye(f, p) || !h) && (f.enterCallbacks[a] || []).forEach((w) => w(u))
          },
          { flush: 'post' },
        ),
        () => {
          const u = i.value,
            f = t.name,
            a = l.value,
            h = a && a.components[f]
          if (!h) return io(n.default, { Component: h, route: u })
          const p = a.props[f],
            _ = p ? (p === !0 ? u.params : typeof p == 'function' ? p(u) : p) : null,
            k = jl(
              h,
              it({}, _, e, {
                onVnodeUnmounted: (N) => {
                  N.component.isUnmounted && (a.instances[f] = null)
                },
                ref: c,
              }),
            )
          return io(n.default, { Component: k, route: u }) || k
        }
      )
    },
  })
function io(t, e) {
  if (!t) return null
  const n = t(e)
  return n.length === 1 ? n[0] : n
}
const cc = yh
function vh(t) {
  const e = lh(t.routes, t),
    n = t.parseQuery || hh,
    r = t.stringifyQuery || Zs,
    i = t.history,
    s = ln(),
    o = ln(),
    l = ln(),
    c = ol(me)
  let u = me
  je && t.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const f = Xr.bind(null, (v) => '' + v),
    a = Xr.bind(null, $a),
    h = Xr.bind(null, Tn)
  function p(v, $) {
    let M, F
    return rc(v) ? ((M = e.getRecordMatcher(v)), (F = $)) : (F = v), e.addRoute(F, M)
  }
  function _(v) {
    const $ = e.getRecordMatcher(v)
    $ && e.removeRoute($)
  }
  function w() {
    return e.getRoutes().map((v) => v.record)
  }
  function k(v) {
    return !!e.getRecordMatcher(v)
  }
  function N(v, $) {
    if ((($ = it({}, $ || c.value)), typeof v == 'string')) {
      const g = Yr(n, v, $.path),
        m = e.resolve({ path: g.path }, $),
        x = i.createHref(g.fullPath)
      return it(g, m, { params: h(m.params), hash: Tn(g.hash), redirectedFrom: void 0, href: x })
    }
    let M
    if (v.path != null) M = it({}, v, { path: Yr(n, v.path, $.path).path })
    else {
      const g = it({}, v.params)
      for (const m in g) g[m] == null && delete g[m]
      ;(M = it({}, v, { params: a(g) })), ($.params = a($.params))
    }
    const F = e.resolve(M, $),
      nt = v.hash || ''
    F.params = f(h(F.params))
    const at = Fa(r, it({}, v, { hash: Oa(nt), path: F.path })),
      d = i.createHref(at)
    return it({ fullPath: at, hash: nt, query: r === Zs ? dh(v.query) : v.query || {} }, F, {
      redirectedFrom: void 0,
      href: d,
    })
  }
  function C(v) {
    return typeof v == 'string' ? Yr(n, v, c.value.path) : it({}, v)
  }
  function P(v, $) {
    if (u !== v) return Je(8, { from: $, to: v })
  }
  function O(v) {
    return q(v)
  }
  function I(v) {
    return O(it(C(v), { replace: !0 }))
  }
  function ot(v) {
    const $ = v.matched[v.matched.length - 1]
    if ($ && $.redirect) {
      const { redirect: M } = $
      let F = typeof M == 'function' ? M(v) : M
      return (
        typeof F == 'string' &&
          ((F = F.includes('?') || F.includes('#') ? (F = C(F)) : { path: F }), (F.params = {})),
        it({ query: v.query, hash: v.hash, params: F.path != null ? {} : v.params }, F)
      )
    }
  }
  function q(v, $) {
    const M = (u = N(v)),
      F = c.value,
      nt = v.state,
      at = v.force,
      d = v.replace === !0,
      g = ot(M)
    if (g)
      return q(
        it(C(g), { state: typeof g == 'object' ? it({}, nt, g.state) : nt, force: at, replace: d }),
        $ || M,
      )
    const m = M
    m.redirectedFrom = $
    let x
    return (
      !at && La(r, F, M) && ((x = Je(16, { to: m, from: F })), qt(F, F, !0, !1)),
      (x ? Promise.resolve(x) : J(m, F))
        .catch((y) => (re(y) ? (re(y, 2) ? y : ge(y)) : G(y, m, F)))
        .then((y) => {
          if (y) {
            if (re(y, 2))
              return q(
                it({ replace: d }, C(y.to), {
                  state: typeof y.to == 'object' ? it({}, nt, y.to.state) : nt,
                  force: at,
                }),
                $ || m,
              )
          } else y = Z(m, F, !0, d, nt)
          return H(m, F, y), y
        })
    )
  }
  function U(v, $) {
    const M = P(v, $)
    return M ? Promise.reject(M) : Promise.resolve()
  }
  function K(v) {
    const $ = He.values().next().value
    return $ && typeof $.runWithContext == 'function' ? $.runWithContext(v) : v()
  }
  function J(v, $) {
    let M
    const [F, nt, at] = wh(v, $)
    M = Jr(F.reverse(), 'beforeRouteLeave', v, $)
    for (const g of F)
      g.leaveGuards.forEach((m) => {
        M.push(we(m, v, $))
      })
    const d = U.bind(null, v, $)
    return (
      M.push(d),
      kt(M)
        .then(() => {
          M = []
          for (const g of s.list()) M.push(we(g, v, $))
          return M.push(d), kt(M)
        })
        .then(() => {
          M = Jr(nt, 'beforeRouteUpdate', v, $)
          for (const g of nt)
            g.updateGuards.forEach((m) => {
              M.push(we(m, v, $))
            })
          return M.push(d), kt(M)
        })
        .then(() => {
          M = []
          for (const g of at)
            if (g.beforeEnter)
              if (Kt(g.beforeEnter)) for (const m of g.beforeEnter) M.push(we(m, v, $))
              else M.push(we(g.beforeEnter, v, $))
          return M.push(d), kt(M)
        })
        .then(
          () => (
            v.matched.forEach((g) => (g.enterCallbacks = {})),
            (M = Jr(at, 'beforeRouteEnter', v, $, K)),
            M.push(d),
            kt(M)
          ),
        )
        .then(() => {
          M = []
          for (const g of o.list()) M.push(we(g, v, $))
          return M.push(d), kt(M)
        })
        .catch((g) => (re(g, 8) ? g : Promise.reject(g)))
    )
  }
  function H(v, $, M) {
    l.list().forEach((F) => K(() => F(v, $, M)))
  }
  function Z(v, $, M, F, nt) {
    const at = P(v, $)
    if (at) return at
    const d = $ === me,
      g = je ? history.state : {}
    M &&
      (F || d
        ? i.replace(v.fullPath, it({ scroll: d && g && g.scroll }, nt))
        : i.push(v.fullPath, nt)),
      (c.value = v),
      qt(v, $, M, d),
      ge()
  }
  let Q
  function Et() {
    Q ||
      (Q = i.listen((v, $, M) => {
        if (!jn.listening) return
        const F = N(v),
          nt = ot(F)
        if (nt) {
          q(it(nt, { replace: !0 }), F).catch(Sn)
          return
        }
        u = F
        const at = c.value
        je && za(Ks(at.fullPath, M.delta), Nr()),
          J(F, at)
            .catch((d) =>
              re(d, 12)
                ? d
                : re(d, 2)
                  ? (q(d.to, F)
                      .then((g) => {
                        re(g, 20) && !M.delta && M.type === Nn.pop && i.go(-1, !1)
                      })
                      .catch(Sn),
                    Promise.reject())
                  : (M.delta && i.go(-M.delta, !1), G(d, F, at)),
            )
            .then((d) => {
              ;(d = d || Z(F, at, !1)),
                d &&
                  (M.delta && !re(d, 8)
                    ? i.go(-M.delta, !1)
                    : M.type === Nn.pop && re(d, 20) && i.go(-1, !1)),
                H(F, at, d)
            })
            .catch(Sn)
      }))
  }
  let Ht = ln(),
    et = ln(),
    V
  function G(v, $, M) {
    ge(v)
    const F = et.list()
    return F.length ? F.forEach((nt) => nt(v, $, M)) : console.error(v), Promise.reject(v)
  }
  function pt() {
    return V && c.value !== me
      ? Promise.resolve()
      : new Promise((v, $) => {
          Ht.add([v, $])
        })
  }
  function ge(v) {
    return V || ((V = !v), Et(), Ht.list().forEach(([$, M]) => (v ? M(v) : $())), Ht.reset()), v
  }
  function qt(v, $, M, F) {
    const { scrollBehavior: nt } = t
    if (!je || !nt) return Promise.resolve()
    const at =
      (!M && qa(Ks(v.fullPath, 0))) || ((F || !M) && history.state && history.state.scroll) || null
    return qi()
      .then(() => nt(v, $, at))
      .then((d) => d && Ka(d))
      .catch((d) => G(d, v, $))
  }
  const At = (v) => i.go(v)
  let Le
  const He = new Set(),
    jn = {
      currentRoute: c,
      listening: !0,
      addRoute: p,
      removeRoute: _,
      clearRoutes: e.clearRoutes,
      hasRoute: k,
      getRoutes: w,
      resolve: N,
      options: t,
      push: O,
      replace: I,
      go: At,
      back: () => At(-1),
      forward: () => At(1),
      beforeEach: s.add,
      beforeResolve: o.add,
      afterEach: l.add,
      onError: et.add,
      isReady: pt,
      install(v) {
        const $ = this
        v.component('RouterLink', an),
          v.component('RouterView', cc),
          (v.config.globalProperties.$router = $),
          Object.defineProperty(v.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => Bt(c),
          }),
          je && !Le && c.value === me && ((Le = !0), O(i.location).catch((nt) => {}))
        const M = {}
        for (const nt in me)
          Object.defineProperty(M, nt, { get: () => c.value[nt], enumerable: !0 })
        v.provide(Zi, $), v.provide(lc, il(M)), v.provide(yi, c)
        const F = v.unmount
        He.add(v),
          (v.unmount = function () {
            He.delete(v),
              He.size < 1 && ((u = me), Q && Q(), (Q = null), (c.value = me), (Le = !1), (V = !1)),
              F()
          })
      },
    }
  function kt(v) {
    return v.reduce(($, M) => $.then(() => K(M)), Promise.resolve())
  }
  return jn
}
function wh(t, e) {
  const n = [],
    r = [],
    i = [],
    s = Math.max(e.matched.length, t.matched.length)
  for (let o = 0; o < s; o++) {
    const l = e.matched[o]
    l && (t.matched.find((u) => Ye(u, l)) ? r.push(l) : n.push(l))
    const c = t.matched[o]
    c && (e.matched.find((u) => Ye(u, c)) || i.push(c))
  }
  return [n, r, i]
}
const xh = { class: 'app-header' },
  bh = { class: 'app-nav' },
  Sh = { class: 'app-view' },
  Eh = en({
    __name: 'App',
    setup(t) {
      return (e, n) => (
        Lt(),
        pe(
          Rt,
          null,
          [
            W('header', xh, [
              n[4] || (n[4] = W('h1', null, 'Stratis', -1)),
              W('nav', bh, [
                ut(Bt(an), { to: '/' }, { default: un(() => n[0] || (n[0] = [ce('Home')])), _: 1 }),
                ut(
                  Bt(an),
                  { to: '/issues' },
                  { default: un(() => n[1] || (n[1] = [ce('Issues')])), _: 1 },
                ),
                ut(
                  Bt(an),
                  { to: '/source' },
                  { default: un(() => n[2] || (n[2] = [ce('Source')])), _: 1 },
                ),
                ut(
                  Bt(an),
                  { to: '/runtime' },
                  { default: un(() => n[3] || (n[3] = [ce('Runtime')])), _: 1 },
                ),
              ]),
            ]),
            W('div', Sh, [ut(Bt(cc))]),
          ],
          64,
        )
      )
    },
  }),
  Ah = 'modulepreload',
  Rh = function (t) {
    return '/' + t
  },
  so = {},
  Qr = function (e, n, r) {
    let i = Promise.resolve()
    if (n && n.length > 0) {
      document.getElementsByTagName('link')
      const o = document.querySelector('meta[property=csp-nonce]'),
        l = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute('nonce'))
      i = Promise.allSettled(
        n.map((c) => {
          if (((c = Rh(c)), c in so)) return
          so[c] = !0
          const u = c.endsWith('.css'),
            f = u ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${c}"]${f}`)) return
          const a = document.createElement('link')
          if (
            ((a.rel = u ? 'stylesheet' : Ah),
            u || (a.as = 'script'),
            (a.crossOrigin = ''),
            (a.href = c),
            l && a.setAttribute('nonce', l),
            document.head.appendChild(a),
            u)
          )
            return new Promise((h, p) => {
              a.addEventListener('load', h),
                a.addEventListener('error', () => p(new Error(`Unable to preload CSS for ${c}`)))
            })
        }),
      )
    }
    function s(o) {
      const l = new Event('vite:preloadError', { cancelable: !0 })
      if (((l.payload = o), window.dispatchEvent(l), !l.defaultPrevented)) throw o
    }
    return i.then((o) => {
      for (const l of o || []) l.status === 'rejected' && s(l.reason)
      return e().catch(s)
    })
  },
  Dn = (t, e) => {
    const n = t.__vccOpts || t
    for (const [r, i] of e) n[r] = i
    return n
  },
  Mh = {},
  Ch = { class: 'project-selector' }
function Ph(t, e) {
  return (
    Lt(),
    pe(
      'div',
      Ch,
      e[0] ||
        (e[0] = [
          W(
            'div',
            { class: 'header' },
            [W('h2', null, 'Project'), W('button', null, 'New'), W('button', null, 'Load')],
            -1,
          ),
          W('p', null, 'Project Name', -1),
        ]),
    )
  )
}
const Oh = Dn(Mh, [['render', Ph]]),
  Th = {},
  Nh = { viewBox: '0 0 8.4666669 8.4666669', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' }
function $h(t, e) {
  return (
    Lt(),
    pe(
      'svg',
      Nh,
      e[0] ||
        (e[0] = [
          W(
            'g',
            { transform: 'translate(0,-288.53332)' },
            [
              W('path', {
                d: 'm 3.7041666,288.7979 a 0.26460976,0.26460976 0 0 0 -0.2511475,0.18087 l -0.2687174,0.80615 c -0.1084927,0.0382 -0.2146168,0.082 -0.3183269,0.13178 l -0.7601602,-0.37982 a 0.26460976,0.26460976 0 0 0 -0.3054077,0.0496 l -0.7482748,0.74827 a 0.26460976,0.26460976 0 0 0 -0.049609,0.30541 l 0.379305,0.75861 c -0.049895,0.10423 -0.094048,0.21083 -0.1322917,0.31988 l -0.80511879,0.26871 a 0.26460976,0.26460976 0 0 0 -0.18086751,0.25115 v 1.05833 a 0.26460976,0.26460976 0 0 0 0.18086751,0.25115 l 0.80770259,0.26924 c 0.038069,0.10784 0.081782,0.21314 0.1312582,0.31625 l -0.3808553,0.76172 a 0.26460976,0.26460976 0 0 0 0.049609,0.3054 l 0.7482748,0.74879 a 0.26460976,0.26460976 0 0 0 0.3054077,0.0496 l 0.7601602,-0.38033 c 0.1036035,0.0495 0.209454,0.0932 0.3178101,0.13125 l 0.2692342,0.80719 a 0.26460976,0.26460976 0 0 0 0.2511475,0.18087 h 1.0583333 a 0.26460976,0.26460976 0 0 0 0.2511476,-0.18087 l 0.2692341,-0.80874 c 0.1075521,-0.0379 0.2128936,-0.0815 0.3157429,-0.13074 l 0.7622276,0.38137 a 0.26460976,0.26460976 0 0 0 0.3054074,-0.0496 l 0.748275,-0.74879 a 0.26460976,0.26460976 0 0 0 0.049609,-0.3054 l -0.3798218,-0.75965 c 0.049789,-0.10387 0.093561,-0.21018 0.1317749,-0.31884 L 8.0222491,293.548 a 0.26460976,0.26460976 0 0 0 0.1808676,-0.25115 v -1.05833 a 0.26460976,0.26460976 0 0 0 -0.1808676,-0.25115 l -0.806669,-0.26871 c -0.038193,-0.10832 -0.082077,-0.21427 -0.1317747,-0.31781 l 0.3803385,-0.76068 a 0.26460976,0.26460976 0 0 0 -0.049609,-0.30541 l -0.748275,-0.74827 a 0.26460976,0.26460976 0 0 0 -0.3054074,-0.0496 l -0.7580934,0.37878 c -0.1045763,-0.05 -0.2115013,-0.094 -0.3209105,-0.13229 l -0.2682007,-0.8046 a 0.26460976,0.26460976 0 0 0 -0.251148,-0.18088 z m 0.190686,0.52917 h 0.6769613 l 0.245463,0.73691 a 0.26460976,0.26460976 0 0 0 0.1757,0.17001 c 0.1722022,0.0512 0.3388331,0.11967 0.4971272,0.20464 a 0.26460976,0.26460976 0 0 0 0.243396,0.004 l 0.6934978,-0.34675 0.4785236,0.47852 -0.3482991,0.6966 a 0.26460976,0.26460976 0 0 0 0.00362,0.24391 c 0.084769,0.15725 0.1537229,0.32244 0.2051555,0.49351 a 0.26460976,0.26460976 0 0 0 0.1694987,0.17519 l 0.738456,0.24598 v 0.67696 l -0.7379393,0.24598 a 0.26460976,0.26460976 0 0 0 -0.1694987,0.17518 c -0.051373,0.1714 -0.1203285,0.337 -0.2051555,0.49454 a 0.26460976,0.26460976 0 0 0 -0.00362,0.24392 l 0.3477824,0.69556 -0.4785236,0.47904 -0.6981486,-0.34933 a 0.26460976,0.26460976 0 0 0 -0.2439128,0.004 c -0.1566825,0.0843 -0.3210488,0.15287 -0.4914429,0.20412 a 0.26460976,0.26460976 0 0 0 -0.175183,0.1695 l -0.2464967,0.74052 H 3.8948526 l -0.2464967,-0.73949 a 0.26460976,0.26460976 0 0 0 -0.175183,-0.17001 c -0.1710385,-0.0511 -0.3367447,-0.11916 -0.4940265,-0.20361 a 0.26460976,0.26460976 0 0 0 -0.243396,-0.004 l -0.6960816,0.3483 -0.4785238,-0.47904 0.3488159,-0.69763 a 0.26460976,0.26460976 0 0 0 -0.00362,-0.24391 c -0.08452,-0.15682 -0.1532676,-0.32191 -0.2046387,-0.49248 a 0.26460976,0.26460976 0 0 0 -0.1694987,-0.17467 l -0.73948973,-0.24649 v -0.67696 l 0.73742263,-0.24598 a 0.26460976,0.26460976 0 0 0 0.1700155,-0.17519 c 0.051313,-0.17172 0.1197532,-0.33773 0.2046387,-0.49557 a 0.26460976,0.26460976 0 0 0 0.00362,-0.24392 l -0.3472656,-0.69453 0.4785238,-0.47852 0.6960816,0.34778 a 0.26460976,0.26460976 0 0 0 0.2439127,-0.004 c 0.1573948,-0.0848 0.3227911,-0.15375 0.4940266,-0.20515 a 0.26460976,0.26460976 0 0 0 0.1751832,-0.1695 z',
              }),
              W('path', {
                d: 'm 4.2324219,290.91406 c -1.0197435,0 -1.8515625,0.83377 -1.8515625,1.85352 0,1.01974 0.831819,1.85156 1.8515625,1.85156 1.0197434,0 1.8535156,-0.83182 1.8535156,-1.85156 0,-1.01975 -0.8337722,-1.85352 -1.8535156,-1.85352 z m 0,0.5293 c 0.7337606,0 1.3242187,0.59046 1.3242187,1.32422 0,0.73376 -0.5904581,1.32226 -1.3242187,1.32226 -0.7337606,0 -1.3222657,-0.5885 -1.3222657,-1.32226 0,-0.73376 0.5885051,-1.32422 1.3222657,-1.32422 z',
              }),
            ],
            -1,
          ),
        ]),
    )
  )
}
const kh = Dn(Th, [['render', $h]]),
  Ih = {},
  Fh = { viewBox: '0 0 32 32', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' }
function Lh(t, e) {
  return (
    Lt(),
    pe(
      'svg',
      Fh,
      e[0] ||
        (e[0] = [
          W(
            'path',
            {
              d: 'M27 22.25c-0.831 0.002-1.598 0.277-2.215 0.739l0.010-0.007-3.299-2.998c0.82-1.097 1.313-2.479 1.313-3.977 0-1.614-0.572-3.094-1.525-4.249l0.009 0.011 3.644-3.643c0.584 0.391 1.302 0.624 2.074 0.624 2.077 0 3.76-1.683 3.76-3.76s-1.683-3.76-3.76-3.76c-2.077 0-3.76 1.683-3.76 3.76 0 0.773 0.233 1.491 0.633 2.088l-0.009-0.014-3.643 3.643c-1.145-0.944-2.627-1.517-4.244-1.517-0.937 0-1.828 0.192-2.638 0.54l0.044-0.017-1.032-1.874c0.791-0.688 1.288-1.695 1.288-2.819 0-2.060-1.67-3.729-3.729-3.729s-3.729 1.67-3.729 3.729c0 2.060 1.67 3.729 3.729 3.729 0.007 0 0.015-0 0.022-0h-0.001c0.398-0.006 0.778-0.073 1.133-0.194l-0.026 0.008 1.037 1.883c-1.757 1.243-2.89 3.265-2.894 5.553v0.001c0.010 0.697 0.125 1.364 0.33 1.99l-0.013-0.047-1.423 0.603c-0.681-0.971-1.795-1.597-3.056-1.597-2.056 0-3.722 1.666-3.722 3.722s1.666 3.722 3.722 3.722c2.056 0 3.722-1.666 3.722-3.722 0-0.264-0.027-0.521-0.079-0.769l0.004 0.024 1.419-0.602c1.167 2.093 3.367 3.485 5.892 3.485 1.73 0 3.308-0.654 4.5-1.728l-0.006 0.005 3.309 3.007c-0.335 0.544-0.535 1.201-0.539 1.906v0.001c0 2.071 1.679 3.75 3.75 3.75s3.75-1.679 3.75-3.75c0-2.071-1.679-3.75-3.75-3.75v0zM7.69 5c0-1.243 1.007-2.25 2.25-2.25s2.25 1.007 2.25 2.25c0 1.243-1.007 2.25-2.25 2.25v0c-1.242-0.002-2.248-1.008-2.25-2.25v-0zM5 22.92c-1.242-0.001-2.248-1.007-2.248-2.249s1.007-2.249 2.249-2.249c1.242 0 2.248 1.006 2.249 2.248v0c-0.002 1.242-1.008 2.248-2.25 2.25h-0zM27 2.75c1.243 0 2.25 1.007 2.25 2.25s-1.007 2.25-2.25 2.25c-1.243 0-2.25-1.007-2.25-2.25v0c0.002-1.242 1.008-2.248 2.25-2.25h0zM10.69 16c0-0 0-0 0-0.001 0-2.932 2.377-5.309 5.309-5.309s5.309 2.377 5.309 5.309c0 2.932-2.377 5.309-5.309 5.309h-0c-2.931-0.003-5.306-2.378-5.31-5.308v-0zM27 28.25c-1.243 0-2.25-1.007-2.25-2.25s1.007-2.25 2.25-2.25c1.243 0 2.25 1.007 2.25 2.25v0c-0.002 1.242-1.008 2.248-2.25 2.25h-0z',
            },
            null,
            -1,
          ),
        ]),
    )
  )
}
const Hh = Dn(Ih, [['render', Lh]]),
  Dh = {},
  Vh = { viewBox: '0 0 25 25', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }
function Bh(t, e) {
  return (
    Lt(),
    pe(
      'svg',
      Vh,
      e[0] ||
        (e[0] = [
          W(
            'path',
            {
              d: 'M12.5 13V22M12.5 13L4.5 8M12.5 13L20.5 8M8.5 5.5L16.5 10.5M4.5 8L12.5 3L20.5 8V17L12.5 22L4.5 17V8Z',
              'stroke-width': '1.2',
            },
            null,
            -1,
          ),
        ]),
    )
  )
}
const jh = Dn(Dh, [['render', Bh]]),
  Uh = {},
  Kh = { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }
function zh(t, e) {
  return (
    Lt(),
    pe(
      'svg',
      Kh,
      e[0] ||
        (e[0] = [
          W(
            'path',
            {
              'fill-rule': 'evenodd',
              'clip-rule': 'evenodd',
              d: 'M12.75 9.49794V14.4961H11.25V9.49794H12.75Z',
            },
            null,
            -1,
          ),
          W('path', { d: 'M13 17.495H11V15.4957H13V17.495Z' }, null, -1),
          W(
            'path',
            {
              'fill-rule': 'evenodd',
              'clip-rule': 'evenodd',
              d: 'M11.567 3.99695L3 18.8299V19.9969L21 19.9968V18.8298L12.433 3.99695H11.567ZM19.076 18.4974L4.92404 18.4975L12 6.24613L19.076 18.4974Z',
            },
            null,
            -1,
          ),
        ]),
    )
  )
}
const qh = Dn(Uh, [['render', zh]]),
  Wh = { class: 'project-stats' },
  Gh = { class: 'panel issues' },
  Xh = { class: 'panel packages' },
  Yh = { class: 'panel nodes' },
  Jh = { class: 'panel launch' },
  Qh = en({
    __name: 'ProjectStats',
    setup(t) {
      return (e, n) => (
        Lt(),
        pe('ul', Wh, [
          W('li', Gh, [
            ut(qh),
            n[0] ||
              (n[0] = W(
                'div',
                { class: 'label' },
                [ce(' Issues '), W('span', { class: 'value' }, '1234')],
                -1,
              )),
          ]),
          W('li', Xh, [
            ut(jh, { class: 'stroke' }),
            n[1] ||
              (n[1] = W(
                'div',
                { class: 'label' },
                [ce(' Packages '), W('span', { class: 'value' }, '20')],
                -1,
              )),
          ]),
          W('li', Yh, [
            ut(kh),
            n[2] ||
              (n[2] = W(
                'div',
                { class: 'label' },
                [ce(' Nodes '), W('span', { class: 'value' }, '12')],
                -1,
              )),
          ]),
          W('li', Jh, [
            ut(Hh),
            n[3] ||
              (n[3] = W(
                'div',
                { class: 'label' },
                [ce(' Launch Files '), W('span', { class: 'value' }, '123')],
                -1,
              )),
          ]),
        ])
      )
    },
  })
function fe(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
}
function Zh(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
}
function uc(t) {
  let e, n, r
  t.length !== 2
    ? ((e = fe), (n = (l, c) => fe(t(l), c)), (r = (l, c) => t(l) - c))
    : ((e = t === fe || t === Zh ? t : t0), (n = t), (r = t))
  function i(l, c, u = 0, f = l.length) {
    if (u < f) {
      if (e(c, c) !== 0) return f
      do {
        const a = (u + f) >>> 1
        n(l[a], c) < 0 ? (u = a + 1) : (f = a)
      } while (u < f)
    }
    return u
  }
  function s(l, c, u = 0, f = l.length) {
    if (u < f) {
      if (e(c, c) !== 0) return f
      do {
        const a = (u + f) >>> 1
        n(l[a], c) <= 0 ? (u = a + 1) : (f = a)
      } while (u < f)
    }
    return u
  }
  function o(l, c, u = 0, f = l.length) {
    const a = i(l, c, u, f - 1)
    return a > u && r(l[a - 1], c) > -r(l[a], c) ? a - 1 : a
  }
  return { left: i, center: o, right: s }
}
function t0() {
  return 0
}
function e0(t) {
  return t === null ? NaN : +t
}
const n0 = uc(fe),
  r0 = n0.right
uc(e0).center
class vi extends Map {
  constructor(e, n = o0) {
    if (
      (super(),
      Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: n } }),
      e != null)
    )
      for (const [r, i] of e) this.set(r, i)
  }
  get(e) {
    return super.get(oo(this, e))
  }
  has(e) {
    return super.has(oo(this, e))
  }
  set(e, n) {
    return super.set(i0(this, e), n)
  }
  delete(e) {
    return super.delete(s0(this, e))
  }
}
function oo({ _intern: t, _key: e }, n) {
  const r = e(n)
  return t.has(r) ? t.get(r) : n
}
function i0({ _intern: t, _key: e }, n) {
  const r = e(n)
  return t.has(r) ? t.get(r) : (t.set(r, n), n)
}
function s0({ _intern: t, _key: e }, n) {
  const r = e(n)
  return t.has(r) && ((n = t.get(r)), t.delete(r)), n
}
function o0(t) {
  return t !== null && typeof t == 'object' ? t.valueOf() : t
}
function wi(t) {
  return t
}
function l0(t, ...e) {
  return fc(t, wi, wi, e)
}
function c0(t, e, ...n) {
  return fc(t, wi, e, n)
}
function fc(t, e, n, r) {
  return (function i(s, o) {
    if (o >= r.length) return n(s)
    const l = new vi(),
      c = r[o++]
    let u = -1
    for (const f of s) {
      const a = c(f, ++u, s),
        h = l.get(a)
      h ? h.push(f) : l.set(a, [f])
    }
    for (const [f, a] of l) l.set(f, i(a, o))
    return e(l)
  })(t, 0)
}
function u0(t, e) {
  return Array.from(e, (n) => t[n])
}
function lo(t, ...e) {
  if (typeof t[Symbol.iterator] != 'function') throw new TypeError('values is not iterable')
  t = Array.from(t)
  let [n] = e
  if ((n && n.length !== 2) || e.length > 1) {
    const r = Uint32Array.from(t, (i, s) => s)
    return (
      e.length > 1
        ? ((e = e.map((i) => t.map(i))),
          r.sort((i, s) => {
            for (const o of e) {
              const l = xi(o[i], o[s])
              if (l) return l
            }
          }))
        : ((n = t.map(n)), r.sort((i, s) => xi(n[i], n[s]))),
      u0(t, r)
    )
  }
  return t.sort(f0(n))
}
function f0(t = fe) {
  if (t === fe) return xi
  if (typeof t != 'function') throw new TypeError('compare is not a function')
  return (e, n) => {
    const r = t(e, n)
    return r || r === 0 ? r : (t(n, n) === 0) - (t(e, e) === 0)
  }
}
function xi(t, e) {
  return (t == null || !(t >= t)) - (e == null || !(e >= e)) || (t < e ? -1 : t > e ? 1 : 0)
}
function a0(t, e, n) {
  return (
    e.length !== 2
      ? lo(c0(t, e, n), ([r, i], [s, o]) => fe(i, o) || fe(r, s))
      : lo(l0(t, n), ([r, i], [s, o]) => e(i, o) || fe(r, s))
  ).map(([r]) => r)
}
const h0 = Math.sqrt(50),
  d0 = Math.sqrt(10),
  p0 = Math.sqrt(2)
function fr(t, e, n) {
  const r = (e - t) / Math.max(0, n),
    i = Math.floor(Math.log10(r)),
    s = r / Math.pow(10, i),
    o = s >= h0 ? 10 : s >= d0 ? 5 : s >= p0 ? 2 : 1
  let l, c, u
  return (
    i < 0
      ? ((u = Math.pow(10, -i) / o),
        (l = Math.round(t * u)),
        (c = Math.round(e * u)),
        l / u < t && ++l,
        c / u > e && --c,
        (u = -u))
      : ((u = Math.pow(10, i) * o),
        (l = Math.round(t / u)),
        (c = Math.round(e / u)),
        l * u < t && ++l,
        c * u > e && --c),
    c < l && 0.5 <= n && n < 2 ? fr(t, e, n * 2) : [l, c, u]
  )
}
function g0(t, e, n) {
  if (((e = +e), (t = +t), (n = +n), !(n > 0))) return []
  if (t === e) return [t]
  const r = e < t,
    [i, s, o] = r ? fr(e, t, n) : fr(t, e, n)
  if (!(s >= i)) return []
  const l = s - i + 1,
    c = new Array(l)
  if (r)
    if (o < 0) for (let u = 0; u < l; ++u) c[u] = (s - u) / -o
    else for (let u = 0; u < l; ++u) c[u] = (s - u) * o
  else if (o < 0) for (let u = 0; u < l; ++u) c[u] = (i + u) / -o
  else for (let u = 0; u < l; ++u) c[u] = (i + u) * o
  return c
}
function bi(t, e, n) {
  return (e = +e), (t = +t), (n = +n), fr(t, e, n)[2]
}
function m0(t, e, n) {
  ;(e = +e), (t = +t), (n = +n)
  const r = e < t,
    i = r ? bi(e, t, n) : bi(t, e, n)
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i)
}
function _0(t, e) {
  let n
  if (e === void 0) for (const r of t) r != null && (n < r || (n === void 0 && r >= r)) && (n = r)
  else {
    let r = -1
    for (let i of t) (i = e(i, ++r, t)) != null && (n < i || (n === void 0 && i >= i)) && (n = i)
  }
  return n
}
function y0(t, e, n) {
  ;(t = +t), (e = +e), (n = (i = arguments.length) < 2 ? ((e = t), (t = 0), 1) : i < 3 ? 1 : +n)
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, s = new Array(i); ++r < i; )
    s[r] = t + r * n
  return s
}
function v0(t) {
  return t
}
var Zr = 1,
  ti = 2,
  Si = 3,
  hn = 4,
  co = 1e-6
function w0(t) {
  return 'translate(' + t + ',0)'
}
function x0(t) {
  return 'translate(0,' + t + ')'
}
function b0(t) {
  return (e) => +t(e)
}
function S0(t, e) {
  return (
    (e = Math.max(0, t.bandwidth() - e * 2) / 2), t.round() && (e = Math.round(e)), (n) => +t(n) + e
  )
}
function E0() {
  return !this.__axis
}
function ac(t, e) {
  var n = [],
    r = null,
    i = null,
    s = 6,
    o = 6,
    l = 3,
    c = typeof window < 'u' && window.devicePixelRatio > 1 ? 0 : 0.5,
    u = t === Zr || t === hn ? -1 : 1,
    f = t === hn || t === ti ? 'x' : 'y',
    a = t === Zr || t === Si ? w0 : x0
  function h(p) {
    var _ = r ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()),
      w = i ?? (e.tickFormat ? e.tickFormat.apply(e, n) : v0),
      k = Math.max(s, 0) + l,
      N = e.range(),
      C = +N[0] + c,
      P = +N[N.length - 1] + c,
      O = (e.bandwidth ? S0 : b0)(e.copy(), c),
      I = p.selection ? p.selection() : p,
      ot = I.selectAll('.domain').data([null]),
      q = I.selectAll('.tick').data(_, e).order(),
      U = q.exit(),
      K = q.enter().append('g').attr('class', 'tick'),
      J = q.select('line'),
      H = q.select('text')
    ;(ot = ot.merge(
      ot.enter().insert('path', '.tick').attr('class', 'domain').attr('stroke', 'currentColor'),
    )),
      (q = q.merge(K)),
      (J = J.merge(
        K.append('line')
          .attr('stroke', 'currentColor')
          .attr(f + '2', u * s),
      )),
      (H = H.merge(
        K.append('text')
          .attr('fill', 'currentColor')
          .attr(f, u * k)
          .attr('dy', t === Zr ? '0em' : t === Si ? '0.71em' : '0.32em'),
      )),
      p !== I &&
        ((ot = ot.transition(p)),
        (q = q.transition(p)),
        (J = J.transition(p)),
        (H = H.transition(p)),
        (U = U.transition(p)
          .attr('opacity', co)
          .attr('transform', function (Z) {
            return isFinite((Z = O(Z))) ? a(Z + c) : this.getAttribute('transform')
          })),
        K.attr('opacity', co).attr('transform', function (Z) {
          var Q = this.parentNode.__axis
          return a((Q && isFinite((Q = Q(Z))) ? Q : O(Z)) + c)
        })),
      U.remove(),
      ot.attr(
        'd',
        t === hn || t === ti
          ? o
            ? 'M' + u * o + ',' + C + 'H' + c + 'V' + P + 'H' + u * o
            : 'M' + c + ',' + C + 'V' + P
          : o
            ? 'M' + C + ',' + u * o + 'V' + c + 'H' + P + 'V' + u * o
            : 'M' + C + ',' + c + 'H' + P,
      ),
      q.attr('opacity', 1).attr('transform', function (Z) {
        return a(O(Z) + c)
      }),
      J.attr(f + '2', u * s),
      H.attr(f, u * k).text(w),
      I.filter(E0)
        .attr('fill', 'none')
        .attr('font-size', 10)
        .attr('font-family', 'sans-serif')
        .attr('text-anchor', t === ti ? 'start' : t === hn ? 'end' : 'middle'),
      I.each(function () {
        this.__axis = O
      })
  }
  return (
    (h.scale = function (p) {
      return arguments.length ? ((e = p), h) : e
    }),
    (h.ticks = function () {
      return (n = Array.from(arguments)), h
    }),
    (h.tickArguments = function (p) {
      return arguments.length ? ((n = p == null ? [] : Array.from(p)), h) : n.slice()
    }),
    (h.tickValues = function (p) {
      return arguments.length ? ((r = p == null ? null : Array.from(p)), h) : r && r.slice()
    }),
    (h.tickFormat = function (p) {
      return arguments.length ? ((i = p), h) : i
    }),
    (h.tickSize = function (p) {
      return arguments.length ? ((s = o = +p), h) : s
    }),
    (h.tickSizeInner = function (p) {
      return arguments.length ? ((s = +p), h) : s
    }),
    (h.tickSizeOuter = function (p) {
      return arguments.length ? ((o = +p), h) : o
    }),
    (h.tickPadding = function (p) {
      return arguments.length ? ((l = +p), h) : l
    }),
    (h.offset = function (p) {
      return arguments.length ? ((c = +p), h) : c
    }),
    h
  )
}
function A0(t) {
  return ac(Si, t)
}
function R0(t) {
  return ac(hn, t)
}
var M0 = { value: () => {} }
function hc() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + '') || r in n || /[\s.]/.test(r)) throw new Error('illegal type: ' + r)
    n[r] = []
  }
  return new Zn(n)
}
function Zn(t) {
  this._ = t
}
function C0(t, e) {
  return t
    .trim()
    .split(/^|\s+/)
    .map(function (n) {
      var r = '',
        i = n.indexOf('.')
      if ((i >= 0 && ((r = n.slice(i + 1)), (n = n.slice(0, i))), n && !e.hasOwnProperty(n)))
        throw new Error('unknown type: ' + n)
      return { type: n, name: r }
    })
}
Zn.prototype = hc.prototype = {
  constructor: Zn,
  on: function (t, e) {
    var n = this._,
      r = C0(t + '', n),
      i,
      s = -1,
      o = r.length
    if (arguments.length < 2) {
      for (; ++s < o; ) if ((i = (t = r[s]).type) && (i = P0(n[i], t.name))) return i
      return
    }
    if (e != null && typeof e != 'function') throw new Error('invalid callback: ' + e)
    for (; ++s < o; )
      if ((i = (t = r[s]).type)) n[i] = uo(n[i], t.name, e)
      else if (e == null) for (i in n) n[i] = uo(n[i], t.name, null)
    return this
  },
  copy: function () {
    var t = {},
      e = this._
    for (var n in e) t[n] = e[n].slice()
    return new Zn(t)
  },
  call: function (t, e) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), r = 0, i, s; r < i; ++r) n[r] = arguments[r + 2]
    if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t)
    for (s = this._[t], r = 0, i = s.length; r < i; ++r) s[r].value.apply(e, n)
  },
  apply: function (t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t)
    for (var r = this._[t], i = 0, s = r.length; i < s; ++i) r[i].value.apply(e, n)
  },
}
function P0(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n) if ((i = t[n]).name === e) return i.value
}
function uo(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      ;(t[r] = M0), (t = t.slice(0, r).concat(t.slice(r + 1)))
      break
    }
  return n != null && t.push({ name: e, value: n }), t
}
var Ei = 'http://www.w3.org/1999/xhtml'
const fo = {
  svg: 'http://www.w3.org/2000/svg',
  xhtml: Ei,
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace',
  xmlns: 'http://www.w3.org/2000/xmlns/',
}
function $r(t) {
  var e = (t += ''),
    n = e.indexOf(':')
  return (
    n >= 0 && (e = t.slice(0, n)) !== 'xmlns' && (t = t.slice(n + 1)),
    fo.hasOwnProperty(e) ? { space: fo[e], local: t } : t
  )
}
function O0(t) {
  return function () {
    var e = this.ownerDocument,
      n = this.namespaceURI
    return n === Ei && e.documentElement.namespaceURI === Ei
      ? e.createElement(t)
      : e.createElementNS(n, t)
  }
}
function T0(t) {
  return function () {
    return this.ownerDocument.createElementNS(t.space, t.local)
  }
}
function ts(t) {
  var e = $r(t)
  return (e.local ? T0 : O0)(e)
}
function N0() {}
function es(t) {
  return t == null
    ? N0
    : function () {
        return this.querySelector(t)
      }
}
function $0(t) {
  typeof t != 'function' && (t = es(t))
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], o = s.length, l = (r[i] = new Array(o)), c, u, f = 0; f < o; ++f)
      (c = s[f]) &&
        (u = t.call(c, c.__data__, f, s)) &&
        ('__data__' in c && (u.__data__ = c.__data__), (l[f] = u))
  return new $t(r, this._parents)
}
function k0(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t)
}
function I0() {
  return []
}
function dc(t) {
  return t == null
    ? I0
    : function () {
        return this.querySelectorAll(t)
      }
}
function F0(t) {
  return function () {
    return k0(t.apply(this, arguments))
  }
}
function L0(t) {
  typeof t == 'function' ? (t = F0(t)) : (t = dc(t))
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var o = e[s], l = o.length, c, u = 0; u < l; ++u)
      (c = o[u]) && (r.push(t.call(c, c.__data__, u, o)), i.push(c))
  return new $t(r, i)
}
function pc(t) {
  return function () {
    return this.matches(t)
  }
}
function gc(t) {
  return function (e) {
    return e.matches(t)
  }
}
var H0 = Array.prototype.find
function D0(t) {
  return function () {
    return H0.call(this.children, t)
  }
}
function V0() {
  return this.firstElementChild
}
function B0(t) {
  return this.select(t == null ? V0 : D0(typeof t == 'function' ? t : gc(t)))
}
var j0 = Array.prototype.filter
function U0() {
  return Array.from(this.children)
}
function K0(t) {
  return function () {
    return j0.call(this.children, t)
  }
}
function z0(t) {
  return this.selectAll(t == null ? U0 : K0(typeof t == 'function' ? t : gc(t)))
}
function q0(t) {
  typeof t != 'function' && (t = pc(t))
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], o = s.length, l = (r[i] = []), c, u = 0; u < o; ++u)
      (c = s[u]) && t.call(c, c.__data__, u, s) && l.push(c)
  return new $t(r, this._parents)
}
function mc(t) {
  return new Array(t.length)
}
function W0() {
  return new $t(this._enter || this._groups.map(mc), this._parents)
}
function ar(t, e) {
  ;(this.ownerDocument = t.ownerDocument),
    (this.namespaceURI = t.namespaceURI),
    (this._next = null),
    (this._parent = t),
    (this.__data__ = e)
}
ar.prototype = {
  constructor: ar,
  appendChild: function (t) {
    return this._parent.insertBefore(t, this._next)
  },
  insertBefore: function (t, e) {
    return this._parent.insertBefore(t, e)
  },
  querySelector: function (t) {
    return this._parent.querySelector(t)
  },
  querySelectorAll: function (t) {
    return this._parent.querySelectorAll(t)
  },
}
function G0(t) {
  return function () {
    return t
  }
}
function X0(t, e, n, r, i, s) {
  for (var o = 0, l, c = e.length, u = s.length; o < u; ++o)
    (l = e[o]) ? ((l.__data__ = s[o]), (r[o] = l)) : (n[o] = new ar(t, s[o]))
  for (; o < c; ++o) (l = e[o]) && (i[o] = l)
}
function Y0(t, e, n, r, i, s, o) {
  var l,
    c,
    u = new Map(),
    f = e.length,
    a = s.length,
    h = new Array(f),
    p
  for (l = 0; l < f; ++l)
    (c = e[l]) &&
      ((h[l] = p = o.call(c, c.__data__, l, e) + ''), u.has(p) ? (i[l] = c) : u.set(p, c))
  for (l = 0; l < a; ++l)
    (p = o.call(t, s[l], l, s) + ''),
      (c = u.get(p)) ? ((r[l] = c), (c.__data__ = s[l]), u.delete(p)) : (n[l] = new ar(t, s[l]))
  for (l = 0; l < f; ++l) (c = e[l]) && u.get(h[l]) === c && (i[l] = c)
}
function J0(t) {
  return t.__data__
}
function Q0(t, e) {
  if (!arguments.length) return Array.from(this, J0)
  var n = e ? Y0 : X0,
    r = this._parents,
    i = this._groups
  typeof t != 'function' && (t = G0(t))
  for (var s = i.length, o = new Array(s), l = new Array(s), c = new Array(s), u = 0; u < s; ++u) {
    var f = r[u],
      a = i[u],
      h = a.length,
      p = Z0(t.call(f, f && f.__data__, u, r)),
      _ = p.length,
      w = (l[u] = new Array(_)),
      k = (o[u] = new Array(_)),
      N = (c[u] = new Array(h))
    n(f, a, w, k, N, p, e)
    for (var C = 0, P = 0, O, I; C < _; ++C)
      if ((O = w[C])) {
        for (C >= P && (P = C + 1); !(I = k[P]) && ++P < _; );
        O._next = I || null
      }
  }
  return (o = new $t(o, r)), (o._enter = l), (o._exit = c), o
}
function Z0(t) {
  return typeof t == 'object' && 'length' in t ? t : Array.from(t)
}
function td() {
  return new $t(this._exit || this._groups.map(mc), this._parents)
}
function ed(t, e, n) {
  var r = this.enter(),
    i = this,
    s = this.exit()
  return (
    typeof t == 'function' ? ((r = t(r)), r && (r = r.selection())) : (r = r.append(t + '')),
    e != null && ((i = e(i)), i && (i = i.selection())),
    n == null ? s.remove() : n(s),
    r && i ? r.merge(i).order() : i
  )
}
function nd(t) {
  for (
    var e = t.selection ? t.selection() : t,
      n = this._groups,
      r = e._groups,
      i = n.length,
      s = r.length,
      o = Math.min(i, s),
      l = new Array(i),
      c = 0;
    c < o;
    ++c
  )
    for (var u = n[c], f = r[c], a = u.length, h = (l[c] = new Array(a)), p, _ = 0; _ < a; ++_)
      (p = u[_] || f[_]) && (h[_] = p)
  for (; c < i; ++c) l[c] = n[c]
  return new $t(l, this._parents)
}
function rd() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, s = r[i], o; --i >= 0; )
      (o = r[i]) &&
        (s && o.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(o, s), (s = o))
  return this
}
function id(t) {
  t || (t = sd)
  function e(a, h) {
    return a && h ? t(a.__data__, h.__data__) : !a - !h
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var o = n[s], l = o.length, c = (i[s] = new Array(l)), u, f = 0; f < l; ++f)
      (u = o[f]) && (c[f] = u)
    c.sort(e)
  }
  return new $t(i, this._parents).order()
}
function sd(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
}
function od() {
  var t = arguments[0]
  return (arguments[0] = this), t.apply(null, arguments), this
}
function ld() {
  return Array.from(this)
}
function cd() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length; i < s; ++i) {
      var o = r[i]
      if (o) return o
    }
  return null
}
function ud() {
  let t = 0
  for (const e of this) ++t
  return t
}
function fd() {
  return !this.node()
}
function ad(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, o = i.length, l; s < o; ++s) (l = i[s]) && t.call(l, l.__data__, s, i)
  return this
}
function hd(t) {
  return function () {
    this.removeAttribute(t)
  }
}
function dd(t) {
  return function () {
    this.removeAttributeNS(t.space, t.local)
  }
}
function pd(t, e) {
  return function () {
    this.setAttribute(t, e)
  }
}
function gd(t, e) {
  return function () {
    this.setAttributeNS(t.space, t.local, e)
  }
}
function md(t, e) {
  return function () {
    var n = e.apply(this, arguments)
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n)
  }
}
function _d(t, e) {
  return function () {
    var n = e.apply(this, arguments)
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
  }
}
function yd(t, e) {
  var n = $r(t)
  if (arguments.length < 2) {
    var r = this.node()
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n)
  }
  return this.each(
    (e == null
      ? n.local
        ? dd
        : hd
      : typeof e == 'function'
        ? n.local
          ? _d
          : md
        : n.local
          ? gd
          : pd)(n, e),
  )
}
function _c(t) {
  return (t.ownerDocument && t.ownerDocument.defaultView) || (t.document && t) || t.defaultView
}
function vd(t) {
  return function () {
    this.style.removeProperty(t)
  }
}
function wd(t, e, n) {
  return function () {
    this.style.setProperty(t, e, n)
  }
}
function xd(t, e, n) {
  return function () {
    var r = e.apply(this, arguments)
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n)
  }
}
function bd(t, e, n) {
  return arguments.length > 1
    ? this.each((e == null ? vd : typeof e == 'function' ? xd : wd)(t, e, n ?? ''))
    : Qe(this.node(), t)
}
function Qe(t, e) {
  return t.style.getPropertyValue(e) || _c(t).getComputedStyle(t, null).getPropertyValue(e)
}
function Sd(t) {
  return function () {
    delete this[t]
  }
}
function Ed(t, e) {
  return function () {
    this[t] = e
  }
}
function Ad(t, e) {
  return function () {
    var n = e.apply(this, arguments)
    n == null ? delete this[t] : (this[t] = n)
  }
}
function Rd(t, e) {
  return arguments.length > 1
    ? this.each((e == null ? Sd : typeof e == 'function' ? Ad : Ed)(t, e))
    : this.node()[t]
}
function yc(t) {
  return t.trim().split(/^|\s+/)
}
function ns(t) {
  return t.classList || new vc(t)
}
function vc(t) {
  ;(this._node = t), (this._names = yc(t.getAttribute('class') || ''))
}
vc.prototype = {
  add: function (t) {
    var e = this._names.indexOf(t)
    e < 0 && (this._names.push(t), this._node.setAttribute('class', this._names.join(' ')))
  },
  remove: function (t) {
    var e = this._names.indexOf(t)
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute('class', this._names.join(' ')))
  },
  contains: function (t) {
    return this._names.indexOf(t) >= 0
  },
}
function wc(t, e) {
  for (var n = ns(t), r = -1, i = e.length; ++r < i; ) n.add(e[r])
}
function xc(t, e) {
  for (var n = ns(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r])
}
function Md(t) {
  return function () {
    wc(this, t)
  }
}
function Cd(t) {
  return function () {
    xc(this, t)
  }
}
function Pd(t, e) {
  return function () {
    ;(e.apply(this, arguments) ? wc : xc)(this, t)
  }
}
function Od(t, e) {
  var n = yc(t + '')
  if (arguments.length < 2) {
    for (var r = ns(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1
    return !0
  }
  return this.each((typeof e == 'function' ? Pd : e ? Md : Cd)(n, e))
}
function Td() {
  this.textContent = ''
}
function Nd(t) {
  return function () {
    this.textContent = t
  }
}
function $d(t) {
  return function () {
    var e = t.apply(this, arguments)
    this.textContent = e ?? ''
  }
}
function kd(t) {
  return arguments.length
    ? this.each(t == null ? Td : (typeof t == 'function' ? $d : Nd)(t))
    : this.node().textContent
}
function Id() {
  this.innerHTML = ''
}
function Fd(t) {
  return function () {
    this.innerHTML = t
  }
}
function Ld(t) {
  return function () {
    var e = t.apply(this, arguments)
    this.innerHTML = e ?? ''
  }
}
function Hd(t) {
  return arguments.length
    ? this.each(t == null ? Id : (typeof t == 'function' ? Ld : Fd)(t))
    : this.node().innerHTML
}
function Dd() {
  this.nextSibling && this.parentNode.appendChild(this)
}
function Vd() {
  return this.each(Dd)
}
function Bd() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
}
function jd() {
  return this.each(Bd)
}
function Ud(t) {
  var e = typeof t == 'function' ? t : ts(t)
  return this.select(function () {
    return this.appendChild(e.apply(this, arguments))
  })
}
function Kd() {
  return null
}
function zd(t, e) {
  var n = typeof t == 'function' ? t : ts(t),
    r = e == null ? Kd : typeof e == 'function' ? e : es(e)
  return this.select(function () {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null)
  })
}
function qd() {
  var t = this.parentNode
  t && t.removeChild(this)
}
function Wd() {
  return this.each(qd)
}
function Gd() {
  var t = this.cloneNode(!1),
    e = this.parentNode
  return e ? e.insertBefore(t, this.nextSibling) : t
}
function Xd() {
  var t = this.cloneNode(!0),
    e = this.parentNode
  return e ? e.insertBefore(t, this.nextSibling) : t
}
function Yd(t) {
  return this.select(t ? Xd : Gd)
}
function Jd(t) {
  return arguments.length ? this.property('__data__', t) : this.node().__data__
}
function Qd(t) {
  return function (e) {
    t.call(this, e, this.__data__)
  }
}
function Zd(t) {
  return t
    .trim()
    .split(/^|\s+/)
    .map(function (e) {
      var n = '',
        r = e.indexOf('.')
      return r >= 0 && ((n = e.slice(r + 1)), (e = e.slice(0, r))), { type: e, name: n }
    })
}
function tp(t) {
  return function () {
    var e = this.__on
    if (e) {
      for (var n = 0, r = -1, i = e.length, s; n < i; ++n)
        (s = e[n]),
          (!t.type || s.type === t.type) && s.name === t.name
            ? this.removeEventListener(s.type, s.listener, s.options)
            : (e[++r] = s)
      ++r ? (e.length = r) : delete this.__on
    }
  }
}
function ep(t, e, n) {
  return function () {
    var r = this.__on,
      i,
      s = Qd(e)
    if (r) {
      for (var o = 0, l = r.length; o < l; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options),
            this.addEventListener(i.type, (i.listener = s), (i.options = n)),
            (i.value = e)
          return
        }
    }
    this.addEventListener(t.type, s, n),
      (i = { type: t.type, name: t.name, value: e, listener: s, options: n }),
      r ? r.push(i) : (this.__on = [i])
  }
}
function np(t, e, n) {
  var r = Zd(t + ''),
    i,
    s = r.length,
    o
  if (arguments.length < 2) {
    var l = this.node().__on
    if (l) {
      for (var c = 0, u = l.length, f; c < u; ++c)
        for (i = 0, f = l[c]; i < s; ++i)
          if ((o = r[i]).type === f.type && o.name === f.name) return f.value
    }
    return
  }
  for (l = e ? ep : tp, i = 0; i < s; ++i) this.each(l(r[i], e, n))
  return this
}
function bc(t, e, n) {
  var r = _c(t),
    i = r.CustomEvent
  typeof i == 'function'
    ? (i = new i(e, n))
    : ((i = r.document.createEvent('Event')),
      n
        ? (i.initEvent(e, n.bubbles, n.cancelable), (i.detail = n.detail))
        : i.initEvent(e, !1, !1)),
    t.dispatchEvent(i)
}
function rp(t, e) {
  return function () {
    return bc(this, t, e)
  }
}
function ip(t, e) {
  return function () {
    return bc(this, t, e.apply(this, arguments))
  }
}
function sp(t, e) {
  return this.each((typeof e == 'function' ? ip : rp)(t, e))
}
function* op() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length, o; i < s; ++i) (o = r[i]) && (yield o)
}
var Sc = [null]
function $t(t, e) {
  ;(this._groups = t), (this._parents = e)
}
function Vn() {
  return new $t([[document.documentElement]], Sc)
}
function lp() {
  return this
}
$t.prototype = Vn.prototype = {
  constructor: $t,
  select: $0,
  selectAll: L0,
  selectChild: B0,
  selectChildren: z0,
  filter: q0,
  data: Q0,
  enter: W0,
  exit: td,
  join: ed,
  merge: nd,
  selection: lp,
  order: rd,
  sort: id,
  call: od,
  nodes: ld,
  node: cd,
  size: ud,
  empty: fd,
  each: ad,
  attr: yd,
  style: bd,
  property: Rd,
  classed: Od,
  text: kd,
  html: Hd,
  raise: Vd,
  lower: jd,
  append: Ud,
  insert: zd,
  remove: Wd,
  clone: Yd,
  datum: Jd,
  on: np,
  dispatch: sp,
  [Symbol.iterator]: op,
}
function Ec(t) {
  return typeof t == 'string'
    ? new $t([[document.querySelector(t)]], [document.documentElement])
    : new $t([[t]], Sc)
}
function cp(t) {
  return Ec(ts(t).call(document.documentElement))
}
function rs(t, e, n) {
  ;(t.prototype = e.prototype = n), (n.constructor = t)
}
function Ac(t, e) {
  var n = Object.create(t.prototype)
  for (var r in e) n[r] = e[r]
  return n
}
function Bn() {}
var $n = 0.7,
  hr = 1 / $n,
  Ge = '\\s*([+-]?\\d+)\\s*',
  kn = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
  Zt = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
  up = /^#([0-9a-f]{3,8})$/,
  fp = new RegExp(`^rgb\\(${Ge},${Ge},${Ge}\\)$`),
  ap = new RegExp(`^rgb\\(${Zt},${Zt},${Zt}\\)$`),
  hp = new RegExp(`^rgba\\(${Ge},${Ge},${Ge},${kn}\\)$`),
  dp = new RegExp(`^rgba\\(${Zt},${Zt},${Zt},${kn}\\)$`),
  pp = new RegExp(`^hsl\\(${kn},${Zt},${Zt}\\)$`),
  gp = new RegExp(`^hsla\\(${kn},${Zt},${Zt},${kn}\\)$`),
  ao = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  }
rs(Bn, ke, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t)
  },
  displayable() {
    return this.rgb().displayable()
  },
  hex: ho,
  formatHex: ho,
  formatHex8: mp,
  formatHsl: _p,
  formatRgb: po,
  toString: po,
})
function ho() {
  return this.rgb().formatHex()
}
function mp() {
  return this.rgb().formatHex8()
}
function _p() {
  return Rc(this).formatHsl()
}
function po() {
  return this.rgb().formatRgb()
}
function ke(t) {
  var e, n
  return (
    (t = (t + '').trim().toLowerCase()),
    (e = up.exec(t))
      ? ((n = e[1].length),
        (e = parseInt(e[1], 16)),
        n === 6
          ? go(e)
          : n === 3
            ? new Mt(
                ((e >> 8) & 15) | ((e >> 4) & 240),
                ((e >> 4) & 15) | (e & 240),
                ((e & 15) << 4) | (e & 15),
                1,
              )
            : n === 8
              ? qn((e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, (e & 255) / 255)
              : n === 4
                ? qn(
                    ((e >> 12) & 15) | ((e >> 8) & 240),
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (e & 240),
                    (((e & 15) << 4) | (e & 15)) / 255,
                  )
                : null)
      : (e = fp.exec(t))
        ? new Mt(e[1], e[2], e[3], 1)
        : (e = ap.exec(t))
          ? new Mt((e[1] * 255) / 100, (e[2] * 255) / 100, (e[3] * 255) / 100, 1)
          : (e = hp.exec(t))
            ? qn(e[1], e[2], e[3], e[4])
            : (e = dp.exec(t))
              ? qn((e[1] * 255) / 100, (e[2] * 255) / 100, (e[3] * 255) / 100, e[4])
              : (e = pp.exec(t))
                ? yo(e[1], e[2] / 100, e[3] / 100, 1)
                : (e = gp.exec(t))
                  ? yo(e[1], e[2] / 100, e[3] / 100, e[4])
                  : ao.hasOwnProperty(t)
                    ? go(ao[t])
                    : t === 'transparent'
                      ? new Mt(NaN, NaN, NaN, 0)
                      : null
  )
}
function go(t) {
  return new Mt((t >> 16) & 255, (t >> 8) & 255, t & 255, 1)
}
function qn(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new Mt(t, e, n, r)
}
function yp(t) {
  return (
    t instanceof Bn || (t = ke(t)), t ? ((t = t.rgb()), new Mt(t.r, t.g, t.b, t.opacity)) : new Mt()
  )
}
function Ai(t, e, n, r) {
  return arguments.length === 1 ? yp(t) : new Mt(t, e, n, r ?? 1)
}
function Mt(t, e, n, r) {
  ;(this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r)
}
rs(
  Mt,
  Ai,
  Ac(Bn, {
    brighter(t) {
      return (
        (t = t == null ? hr : Math.pow(hr, t)),
        new Mt(this.r * t, this.g * t, this.b * t, this.opacity)
      )
    },
    darker(t) {
      return (
        (t = t == null ? $n : Math.pow($n, t)),
        new Mt(this.r * t, this.g * t, this.b * t, this.opacity)
      )
    },
    rgb() {
      return this
    },
    clamp() {
      return new Mt(Ne(this.r), Ne(this.g), Ne(this.b), dr(this.opacity))
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      )
    },
    hex: mo,
    formatHex: mo,
    formatHex8: vp,
    formatRgb: _o,
    toString: _o,
  }),
)
function mo() {
  return `#${Pe(this.r)}${Pe(this.g)}${Pe(this.b)}`
}
function vp() {
  return `#${Pe(this.r)}${Pe(this.g)}${Pe(this.b)}${Pe((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`
}
function _o() {
  const t = dr(this.opacity)
  return `${t === 1 ? 'rgb(' : 'rgba('}${Ne(this.r)}, ${Ne(this.g)}, ${Ne(this.b)}${t === 1 ? ')' : `, ${t})`}`
}
function dr(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t))
}
function Ne(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0))
}
function Pe(t) {
  return (t = Ne(t)), (t < 16 ? '0' : '') + t.toString(16)
}
function yo(t, e, n, r) {
  return (
    r <= 0 ? (t = e = n = NaN) : n <= 0 || n >= 1 ? (t = e = NaN) : e <= 0 && (t = NaN),
    new jt(t, e, n, r)
  )
}
function Rc(t) {
  if (t instanceof jt) return new jt(t.h, t.s, t.l, t.opacity)
  if ((t instanceof Bn || (t = ke(t)), !t)) return new jt()
  if (t instanceof jt) return t
  t = t.rgb()
  var e = t.r / 255,
    n = t.g / 255,
    r = t.b / 255,
    i = Math.min(e, n, r),
    s = Math.max(e, n, r),
    o = NaN,
    l = s - i,
    c = (s + i) / 2
  return (
    l
      ? (e === s
          ? (o = (n - r) / l + (n < r) * 6)
          : n === s
            ? (o = (r - e) / l + 2)
            : (o = (e - n) / l + 4),
        (l /= c < 0.5 ? s + i : 2 - s - i),
        (o *= 60))
      : (l = c > 0 && c < 1 ? 0 : o),
    new jt(o, l, c, t.opacity)
  )
}
function wp(t, e, n, r) {
  return arguments.length === 1 ? Rc(t) : new jt(t, e, n, r ?? 1)
}
function jt(t, e, n, r) {
  ;(this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r)
}
rs(
  jt,
  wp,
  Ac(Bn, {
    brighter(t) {
      return (
        (t = t == null ? hr : Math.pow(hr, t)), new jt(this.h, this.s, this.l * t, this.opacity)
      )
    },
    darker(t) {
      return (
        (t = t == null ? $n : Math.pow($n, t)), new jt(this.h, this.s, this.l * t, this.opacity)
      )
    },
    rgb() {
      var t = (this.h % 360) + (this.h < 0) * 360,
        e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * e,
        i = 2 * n - r
      return new Mt(
        ei(t >= 240 ? t - 240 : t + 120, i, r),
        ei(t, i, r),
        ei(t < 120 ? t + 240 : t - 120, i, r),
        this.opacity,
      )
    },
    clamp() {
      return new jt(vo(this.h), Wn(this.s), Wn(this.l), dr(this.opacity))
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      )
    },
    formatHsl() {
      const t = dr(this.opacity)
      return `${t === 1 ? 'hsl(' : 'hsla('}${vo(this.h)}, ${Wn(this.s) * 100}%, ${Wn(this.l) * 100}%${t === 1 ? ')' : `, ${t})`}`
    },
  }),
)
function vo(t) {
  return (t = (t || 0) % 360), t < 0 ? t + 360 : t
}
function Wn(t) {
  return Math.max(0, Math.min(1, t || 0))
}
function ei(t, e, n) {
  return (
    (t < 60 ? e + ((n - e) * t) / 60 : t < 180 ? n : t < 240 ? e + ((n - e) * (240 - t)) / 60 : e) *
    255
  )
}
const is = (t) => () => t
function xp(t, e) {
  return function (n) {
    return t + n * e
  }
}
function bp(t, e, n) {
  return (
    (t = Math.pow(t, n)),
    (e = Math.pow(e, n) - t),
    (n = 1 / n),
    function (r) {
      return Math.pow(t + r * e, n)
    }
  )
}
function Sp(t) {
  return (t = +t) == 1
    ? Mc
    : function (e, n) {
        return n - e ? bp(e, n, t) : is(isNaN(e) ? n : e)
      }
}
function Mc(t, e) {
  var n = e - t
  return n ? xp(t, n) : is(isNaN(t) ? e : t)
}
const pr = (function t(e) {
  var n = Sp(e)
  function r(i, s) {
    var o = n((i = Ai(i)).r, (s = Ai(s)).r),
      l = n(i.g, s.g),
      c = n(i.b, s.b),
      u = Mc(i.opacity, s.opacity)
    return function (f) {
      return (i.r = o(f)), (i.g = l(f)), (i.b = c(f)), (i.opacity = u(f)), i + ''
    }
  }
  return (r.gamma = t), r
})(1)
function Ep(t, e) {
  e || (e = [])
  var n = t ? Math.min(e.length, t.length) : 0,
    r = e.slice(),
    i
  return function (s) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - s) + e[i] * s
    return r
  }
}
function Ap(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView)
}
function Rp(t, e) {
  var n = e ? e.length : 0,
    r = t ? Math.min(n, t.length) : 0,
    i = new Array(r),
    s = new Array(n),
    o
  for (o = 0; o < r; ++o) i[o] = ss(t[o], e[o])
  for (; o < n; ++o) s[o] = e[o]
  return function (l) {
    for (o = 0; o < r; ++o) s[o] = i[o](l)
    return s
  }
}
function Mp(t, e) {
  var n = new Date()
  return (
    (t = +t),
    (e = +e),
    function (r) {
      return n.setTime(t * (1 - r) + e * r), n
    }
  )
}
function Vt(t, e) {
  return (
    (t = +t),
    (e = +e),
    function (n) {
      return t * (1 - n) + e * n
    }
  )
}
function Cp(t, e) {
  var n = {},
    r = {},
    i
  ;(t === null || typeof t != 'object') && (t = {}),
    (e === null || typeof e != 'object') && (e = {})
  for (i in e) i in t ? (n[i] = ss(t[i], e[i])) : (r[i] = e[i])
  return function (s) {
    for (i in n) r[i] = n[i](s)
    return r
  }
}
var Ri = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  ni = new RegExp(Ri.source, 'g')
function Pp(t) {
  return function () {
    return t
  }
}
function Op(t) {
  return function (e) {
    return t(e) + ''
  }
}
function Cc(t, e) {
  var n = (Ri.lastIndex = ni.lastIndex = 0),
    r,
    i,
    s,
    o = -1,
    l = [],
    c = []
  for (t = t + '', e = e + ''; (r = Ri.exec(t)) && (i = ni.exec(e)); )
    (s = i.index) > n && ((s = e.slice(n, s)), l[o] ? (l[o] += s) : (l[++o] = s)),
      (r = r[0]) === (i = i[0])
        ? l[o]
          ? (l[o] += i)
          : (l[++o] = i)
        : ((l[++o] = null), c.push({ i: o, x: Vt(r, i) })),
      (n = ni.lastIndex)
  return (
    n < e.length && ((s = e.slice(n)), l[o] ? (l[o] += s) : (l[++o] = s)),
    l.length < 2
      ? c[0]
        ? Op(c[0].x)
        : Pp(e)
      : ((e = c.length),
        function (u) {
          for (var f = 0, a; f < e; ++f) l[(a = c[f]).i] = a.x(u)
          return l.join('')
        })
  )
}
function ss(t, e) {
  var n = typeof e,
    r
  return e == null || n === 'boolean'
    ? is(e)
    : (n === 'number'
        ? Vt
        : n === 'string'
          ? (r = ke(e))
            ? ((e = r), pr)
            : Cc
          : e instanceof ke
            ? pr
            : e instanceof Date
              ? Mp
              : Ap(e)
                ? Ep
                : Array.isArray(e)
                  ? Rp
                  : (typeof e.valueOf != 'function' && typeof e.toString != 'function') || isNaN(e)
                    ? Cp
                    : Vt)(t, e)
}
function Tp(t, e) {
  return (
    (t = +t),
    (e = +e),
    function (n) {
      return Math.round(t * (1 - n) + e * n)
    }
  )
}
var wo = 180 / Math.PI,
  Mi = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 }
function Pc(t, e, n, r, i, s) {
  var o, l, c
  return (
    (o = Math.sqrt(t * t + e * e)) && ((t /= o), (e /= o)),
    (c = t * n + e * r) && ((n -= t * c), (r -= e * c)),
    (l = Math.sqrt(n * n + r * r)) && ((n /= l), (r /= l), (c /= l)),
    t * r < e * n && ((t = -t), (e = -e), (c = -c), (o = -o)),
    {
      translateX: i,
      translateY: s,
      rotate: Math.atan2(e, t) * wo,
      skewX: Math.atan(c) * wo,
      scaleX: o,
      scaleY: l,
    }
  )
}
var Gn
function Np(t) {
  const e = new (typeof DOMMatrix == 'function' ? DOMMatrix : WebKitCSSMatrix)(t + '')
  return e.isIdentity ? Mi : Pc(e.a, e.b, e.c, e.d, e.e, e.f)
}
function $p(t) {
  return t == null ||
    (Gn || (Gn = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
    Gn.setAttribute('transform', t),
    !(t = Gn.transform.baseVal.consolidate()))
    ? Mi
    : ((t = t.matrix), Pc(t.a, t.b, t.c, t.d, t.e, t.f))
}
function Oc(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + ' ' : ''
  }
  function s(u, f, a, h, p, _) {
    if (u !== a || f !== h) {
      var w = p.push('translate(', null, e, null, n)
      _.push({ i: w - 4, x: Vt(u, a) }, { i: w - 2, x: Vt(f, h) })
    } else (a || h) && p.push('translate(' + a + e + h + n)
  }
  function o(u, f, a, h) {
    u !== f
      ? (u - f > 180 ? (f += 360) : f - u > 180 && (u += 360),
        h.push({ i: a.push(i(a) + 'rotate(', null, r) - 2, x: Vt(u, f) }))
      : f && a.push(i(a) + 'rotate(' + f + r)
  }
  function l(u, f, a, h) {
    u !== f
      ? h.push({ i: a.push(i(a) + 'skewX(', null, r) - 2, x: Vt(u, f) })
      : f && a.push(i(a) + 'skewX(' + f + r)
  }
  function c(u, f, a, h, p, _) {
    if (u !== a || f !== h) {
      var w = p.push(i(p) + 'scale(', null, ',', null, ')')
      _.push({ i: w - 4, x: Vt(u, a) }, { i: w - 2, x: Vt(f, h) })
    } else (a !== 1 || h !== 1) && p.push(i(p) + 'scale(' + a + ',' + h + ')')
  }
  return function (u, f) {
    var a = [],
      h = []
    return (
      (u = t(u)),
      (f = t(f)),
      s(u.translateX, u.translateY, f.translateX, f.translateY, a, h),
      o(u.rotate, f.rotate, a, h),
      l(u.skewX, f.skewX, a, h),
      c(u.scaleX, u.scaleY, f.scaleX, f.scaleY, a, h),
      (u = f = null),
      function (p) {
        for (var _ = -1, w = h.length, k; ++_ < w; ) a[(k = h[_]).i] = k.x(p)
        return a.join('')
      }
    )
  }
}
var kp = Oc(Np, 'px, ', 'px)', 'deg)'),
  Ip = Oc($p, ', ', ')', ')'),
  Ze = 0,
  dn = 0,
  cn = 0,
  Tc = 1e3,
  gr,
  pn,
  mr = 0,
  Ie = 0,
  kr = 0,
  In = typeof performance == 'object' && performance.now ? performance : Date,
  Nc =
    typeof window == 'object' && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (t) {
          setTimeout(t, 17)
        }
function os() {
  return Ie || (Nc(Fp), (Ie = In.now() + kr))
}
function Fp() {
  Ie = 0
}
function _r() {
  this._call = this._time = this._next = null
}
_r.prototype = $c.prototype = {
  constructor: _r,
  restart: function (t, e, n) {
    if (typeof t != 'function') throw new TypeError('callback is not a function')
    ;(n = (n == null ? os() : +n) + (e == null ? 0 : +e)),
      !this._next && pn !== this && (pn ? (pn._next = this) : (gr = this), (pn = this)),
      (this._call = t),
      (this._time = n),
      Ci()
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), Ci())
  },
}
function $c(t, e, n) {
  var r = new _r()
  return r.restart(t, e, n), r
}
function Lp() {
  os(), ++Ze
  for (var t = gr, e; t; ) (e = Ie - t._time) >= 0 && t._call.call(void 0, e), (t = t._next)
  --Ze
}
function xo() {
  ;(Ie = (mr = In.now()) + kr), (Ze = dn = 0)
  try {
    Lp()
  } finally {
    ;(Ze = 0), Dp(), (Ie = 0)
  }
}
function Hp() {
  var t = In.now(),
    e = t - mr
  e > Tc && ((kr -= e), (mr = t))
}
function Dp() {
  for (var t, e = gr, n, r = 1 / 0; e; )
    e._call
      ? (r > e._time && (r = e._time), (t = e), (e = e._next))
      : ((n = e._next), (e._next = null), (e = t ? (t._next = n) : (gr = n)))
  ;(pn = t), Ci(r)
}
function Ci(t) {
  if (!Ze) {
    dn && (dn = clearTimeout(dn))
    var e = t - Ie
    e > 24
      ? (t < 1 / 0 && (dn = setTimeout(xo, t - In.now() - kr)), cn && (cn = clearInterval(cn)))
      : (cn || ((mr = In.now()), (cn = setInterval(Hp, Tc))), (Ze = 1), Nc(xo))
  }
}
function bo(t, e, n) {
  var r = new _r()
  return (
    (e = e == null ? 0 : +e),
    r.restart(
      (i) => {
        r.stop(), t(i + e)
      },
      e,
      n,
    ),
    r
  )
}
var Vp = hc('start', 'end', 'cancel', 'interrupt'),
  Bp = [],
  kc = 0,
  So = 1,
  Pi = 2,
  tr = 3,
  Eo = 4,
  Oi = 5,
  er = 6
function Ir(t, e, n, r, i, s) {
  var o = t.__transition
  if (!o) t.__transition = {}
  else if (n in o) return
  jp(t, n, {
    name: e,
    index: r,
    group: i,
    on: Vp,
    tween: Bp,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: kc,
  })
}
function ls(t, e) {
  var n = zt(t, e)
  if (n.state > kc) throw new Error('too late; already scheduled')
  return n
}
function ee(t, e) {
  var n = zt(t, e)
  if (n.state > tr) throw new Error('too late; already running')
  return n
}
function zt(t, e) {
  var n = t.__transition
  if (!n || !(n = n[e])) throw new Error('transition not found')
  return n
}
function jp(t, e, n) {
  var r = t.__transition,
    i
  ;(r[e] = n), (n.timer = $c(s, 0, n.time))
  function s(u) {
    ;(n.state = So), n.timer.restart(o, n.delay, n.time), n.delay <= u && o(u - n.delay)
  }
  function o(u) {
    var f, a, h, p
    if (n.state !== So) return c()
    for (f in r)
      if (((p = r[f]), p.name === n.name)) {
        if (p.state === tr) return bo(o)
        p.state === Eo
          ? ((p.state = er),
            p.timer.stop(),
            p.on.call('interrupt', t, t.__data__, p.index, p.group),
            delete r[f])
          : +f < e &&
            ((p.state = er),
            p.timer.stop(),
            p.on.call('cancel', t, t.__data__, p.index, p.group),
            delete r[f])
      }
    if (
      (bo(function () {
        n.state === tr && ((n.state = Eo), n.timer.restart(l, n.delay, n.time), l(u))
      }),
      (n.state = Pi),
      n.on.call('start', t, t.__data__, n.index, n.group),
      n.state === Pi)
    ) {
      for (n.state = tr, i = new Array((h = n.tween.length)), f = 0, a = -1; f < h; ++f)
        (p = n.tween[f].value.call(t, t.__data__, n.index, n.group)) && (i[++a] = p)
      i.length = a + 1
    }
  }
  function l(u) {
    for (
      var f =
          u < n.duration
            ? n.ease.call(null, u / n.duration)
            : (n.timer.restart(c), (n.state = Oi), 1),
        a = -1,
        h = i.length;
      ++a < h;

    )
      i[a].call(t, f)
    n.state === Oi && (n.on.call('end', t, t.__data__, n.index, n.group), c())
  }
  function c() {
    ;(n.state = er), n.timer.stop(), delete r[e]
    for (var u in r) return
    delete t.__transition
  }
}
function Up(t, e) {
  var n = t.__transition,
    r,
    i,
    s = !0,
    o
  if (n) {
    e = e == null ? null : e + ''
    for (o in n) {
      if ((r = n[o]).name !== e) {
        s = !1
        continue
      }
      ;(i = r.state > Pi && r.state < Oi),
        (r.state = er),
        r.timer.stop(),
        r.on.call(i ? 'interrupt' : 'cancel', t, t.__data__, r.index, r.group),
        delete n[o]
    }
    s && delete t.__transition
  }
}
function Kp(t) {
  return this.each(function () {
    Up(this, t)
  })
}
function zp(t, e) {
  var n, r
  return function () {
    var i = ee(this, t),
      s = i.tween
    if (s !== n) {
      r = n = s
      for (var o = 0, l = r.length; o < l; ++o)
        if (r[o].name === e) {
          ;(r = r.slice()), r.splice(o, 1)
          break
        }
    }
    i.tween = r
  }
}
function qp(t, e, n) {
  var r, i
  if (typeof n != 'function') throw new Error()
  return function () {
    var s = ee(this, t),
      o = s.tween
    if (o !== r) {
      i = (r = o).slice()
      for (var l = { name: e, value: n }, c = 0, u = i.length; c < u; ++c)
        if (i[c].name === e) {
          i[c] = l
          break
        }
      c === u && i.push(l)
    }
    s.tween = i
  }
}
function Wp(t, e) {
  var n = this._id
  if (((t += ''), arguments.length < 2)) {
    for (var r = zt(this.node(), n).tween, i = 0, s = r.length, o; i < s; ++i)
      if ((o = r[i]).name === t) return o.value
    return null
  }
  return this.each((e == null ? zp : qp)(n, t, e))
}
function cs(t, e, n) {
  var r = t._id
  return (
    t.each(function () {
      var i = ee(this, r)
      ;(i.value || (i.value = {}))[e] = n.apply(this, arguments)
    }),
    function (i) {
      return zt(i, r).value[e]
    }
  )
}
function Ic(t, e) {
  var n
  return (typeof e == 'number' ? Vt : e instanceof ke ? pr : (n = ke(e)) ? ((e = n), pr) : Cc)(t, e)
}
function Gp(t) {
  return function () {
    this.removeAttribute(t)
  }
}
function Xp(t) {
  return function () {
    this.removeAttributeNS(t.space, t.local)
  }
}
function Yp(t, e, n) {
  var r,
    i = n + '',
    s
  return function () {
    var o = this.getAttribute(t)
    return o === i ? null : o === r ? s : (s = e((r = o), n))
  }
}
function Jp(t, e, n) {
  var r,
    i = n + '',
    s
  return function () {
    var o = this.getAttributeNS(t.space, t.local)
    return o === i ? null : o === r ? s : (s = e((r = o), n))
  }
}
function Qp(t, e, n) {
  var r, i, s
  return function () {
    var o,
      l = n(this),
      c
    return l == null
      ? void this.removeAttribute(t)
      : ((o = this.getAttribute(t)),
        (c = l + ''),
        o === c ? null : o === r && c === i ? s : ((i = c), (s = e((r = o), l))))
  }
}
function Zp(t, e, n) {
  var r, i, s
  return function () {
    var o,
      l = n(this),
      c
    return l == null
      ? void this.removeAttributeNS(t.space, t.local)
      : ((o = this.getAttributeNS(t.space, t.local)),
        (c = l + ''),
        o === c ? null : o === r && c === i ? s : ((i = c), (s = e((r = o), l))))
  }
}
function tg(t, e) {
  var n = $r(t),
    r = n === 'transform' ? Ip : Ic
  return this.attrTween(
    t,
    typeof e == 'function'
      ? (n.local ? Zp : Qp)(n, r, cs(this, 'attr.' + t, e))
      : e == null
        ? (n.local ? Xp : Gp)(n)
        : (n.local ? Jp : Yp)(n, r, e),
  )
}
function eg(t, e) {
  return function (n) {
    this.setAttribute(t, e.call(this, n))
  }
}
function ng(t, e) {
  return function (n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n))
  }
}
function rg(t, e) {
  var n, r
  function i() {
    var s = e.apply(this, arguments)
    return s !== r && (n = (r = s) && ng(t, s)), n
  }
  return (i._value = e), i
}
function ig(t, e) {
  var n, r
  function i() {
    var s = e.apply(this, arguments)
    return s !== r && (n = (r = s) && eg(t, s)), n
  }
  return (i._value = e), i
}
function sg(t, e) {
  var n = 'attr.' + t
  if (arguments.length < 2) return (n = this.tween(n)) && n._value
  if (e == null) return this.tween(n, null)
  if (typeof e != 'function') throw new Error()
  var r = $r(t)
  return this.tween(n, (r.local ? rg : ig)(r, e))
}
function og(t, e) {
  return function () {
    ls(this, t).delay = +e.apply(this, arguments)
  }
}
function lg(t, e) {
  return (
    (e = +e),
    function () {
      ls(this, t).delay = e
    }
  )
}
function cg(t) {
  var e = this._id
  return arguments.length
    ? this.each((typeof t == 'function' ? og : lg)(e, t))
    : zt(this.node(), e).delay
}
function ug(t, e) {
  return function () {
    ee(this, t).duration = +e.apply(this, arguments)
  }
}
function fg(t, e) {
  return (
    (e = +e),
    function () {
      ee(this, t).duration = e
    }
  )
}
function ag(t) {
  var e = this._id
  return arguments.length
    ? this.each((typeof t == 'function' ? ug : fg)(e, t))
    : zt(this.node(), e).duration
}
function hg(t, e) {
  if (typeof e != 'function') throw new Error()
  return function () {
    ee(this, t).ease = e
  }
}
function dg(t) {
  var e = this._id
  return arguments.length ? this.each(hg(e, t)) : zt(this.node(), e).ease
}
function pg(t, e) {
  return function () {
    var n = e.apply(this, arguments)
    if (typeof n != 'function') throw new Error()
    ee(this, t).ease = n
  }
}
function gg(t) {
  if (typeof t != 'function') throw new Error()
  return this.each(pg(this._id, t))
}
function mg(t) {
  typeof t != 'function' && (t = pc(t))
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], o = s.length, l = (r[i] = []), c, u = 0; u < o; ++u)
      (c = s[u]) && t.call(c, c.__data__, u, s) && l.push(c)
  return new ae(r, this._parents, this._name, this._id)
}
function _g(t) {
  if (t._id !== this._id) throw new Error()
  for (
    var e = this._groups,
      n = t._groups,
      r = e.length,
      i = n.length,
      s = Math.min(r, i),
      o = new Array(r),
      l = 0;
    l < s;
    ++l
  )
    for (var c = e[l], u = n[l], f = c.length, a = (o[l] = new Array(f)), h, p = 0; p < f; ++p)
      (h = c[p] || u[p]) && (a[p] = h)
  for (; l < r; ++l) o[l] = e[l]
  return new ae(o, this._parents, this._name, this._id)
}
function yg(t) {
  return (t + '')
    .trim()
    .split(/^|\s+/)
    .every(function (e) {
      var n = e.indexOf('.')
      return n >= 0 && (e = e.slice(0, n)), !e || e === 'start'
    })
}
function vg(t, e, n) {
  var r,
    i,
    s = yg(e) ? ls : ee
  return function () {
    var o = s(this, t),
      l = o.on
    l !== r && (i = (r = l).copy()).on(e, n), (o.on = i)
  }
}
function wg(t, e) {
  var n = this._id
  return arguments.length < 2 ? zt(this.node(), n).on.on(t) : this.each(vg(n, t, e))
}
function xg(t) {
  return function () {
    var e = this.parentNode
    for (var n in this.__transition) if (+n !== t) return
    e && e.removeChild(this)
  }
}
function bg() {
  return this.on('end.remove', xg(this._id))
}
function Sg(t) {
  var e = this._name,
    n = this._id
  typeof t != 'function' && (t = es(t))
  for (var r = this._groups, i = r.length, s = new Array(i), o = 0; o < i; ++o)
    for (var l = r[o], c = l.length, u = (s[o] = new Array(c)), f, a, h = 0; h < c; ++h)
      (f = l[h]) &&
        (a = t.call(f, f.__data__, h, l)) &&
        ('__data__' in f && (a.__data__ = f.__data__), (u[h] = a), Ir(u[h], e, n, h, u, zt(f, n)))
  return new ae(s, this._parents, e, n)
}
function Eg(t) {
  var e = this._name,
    n = this._id
  typeof t != 'function' && (t = dc(t))
  for (var r = this._groups, i = r.length, s = [], o = [], l = 0; l < i; ++l)
    for (var c = r[l], u = c.length, f, a = 0; a < u; ++a)
      if ((f = c[a])) {
        for (var h = t.call(f, f.__data__, a, c), p, _ = zt(f, n), w = 0, k = h.length; w < k; ++w)
          (p = h[w]) && Ir(p, e, n, w, h, _)
        s.push(h), o.push(f)
      }
  return new ae(s, o, e, n)
}
var Ag = Vn.prototype.constructor
function Rg() {
  return new Ag(this._groups, this._parents)
}
function Mg(t, e) {
  var n, r, i
  return function () {
    var s = Qe(this, t),
      o = (this.style.removeProperty(t), Qe(this, t))
    return s === o ? null : s === n && o === r ? i : (i = e((n = s), (r = o)))
  }
}
function Fc(t) {
  return function () {
    this.style.removeProperty(t)
  }
}
function Cg(t, e, n) {
  var r,
    i = n + '',
    s
  return function () {
    var o = Qe(this, t)
    return o === i ? null : o === r ? s : (s = e((r = o), n))
  }
}
function Pg(t, e, n) {
  var r, i, s
  return function () {
    var o = Qe(this, t),
      l = n(this),
      c = l + ''
    return (
      l == null && (c = l = (this.style.removeProperty(t), Qe(this, t))),
      o === c ? null : o === r && c === i ? s : ((i = c), (s = e((r = o), l)))
    )
  }
}
function Og(t, e) {
  var n,
    r,
    i,
    s = 'style.' + e,
    o = 'end.' + s,
    l
  return function () {
    var c = ee(this, t),
      u = c.on,
      f = c.value[s] == null ? l || (l = Fc(e)) : void 0
    ;(u !== n || i !== f) && (r = (n = u).copy()).on(o, (i = f)), (c.on = r)
  }
}
function Tg(t, e, n) {
  var r = (t += '') == 'transform' ? kp : Ic
  return e == null
    ? this.styleTween(t, Mg(t, r)).on('end.style.' + t, Fc(t))
    : typeof e == 'function'
      ? this.styleTween(t, Pg(t, r, cs(this, 'style.' + t, e))).each(Og(this._id, t))
      : this.styleTween(t, Cg(t, r, e), n).on('end.style.' + t, null)
}
function Ng(t, e, n) {
  return function (r) {
    this.style.setProperty(t, e.call(this, r), n)
  }
}
function $g(t, e, n) {
  var r, i
  function s() {
    var o = e.apply(this, arguments)
    return o !== i && (r = (i = o) && Ng(t, o, n)), r
  }
  return (s._value = e), s
}
function kg(t, e, n) {
  var r = 'style.' + (t += '')
  if (arguments.length < 2) return (r = this.tween(r)) && r._value
  if (e == null) return this.tween(r, null)
  if (typeof e != 'function') throw new Error()
  return this.tween(r, $g(t, e, n ?? ''))
}
function Ig(t) {
  return function () {
    this.textContent = t
  }
}
function Fg(t) {
  return function () {
    var e = t(this)
    this.textContent = e ?? ''
  }
}
function Lg(t) {
  return this.tween(
    'text',
    typeof t == 'function' ? Fg(cs(this, 'text', t)) : Ig(t == null ? '' : t + ''),
  )
}
function Hg(t) {
  return function (e) {
    this.textContent = t.call(this, e)
  }
}
function Dg(t) {
  var e, n
  function r() {
    var i = t.apply(this, arguments)
    return i !== n && (e = (n = i) && Hg(i)), e
  }
  return (r._value = t), r
}
function Vg(t) {
  var e = 'text'
  if (arguments.length < 1) return (e = this.tween(e)) && e._value
  if (t == null) return this.tween(e, null)
  if (typeof t != 'function') throw new Error()
  return this.tween(e, Dg(t))
}
function Bg() {
  for (
    var t = this._name, e = this._id, n = Lc(), r = this._groups, i = r.length, s = 0;
    s < i;
    ++s
  )
    for (var o = r[s], l = o.length, c, u = 0; u < l; ++u)
      if ((c = o[u])) {
        var f = zt(c, e)
        Ir(c, t, n, u, o, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease,
        })
      }
  return new ae(r, this._parents, t, n)
}
function jg() {
  var t,
    e,
    n = this,
    r = n._id,
    i = n.size()
  return new Promise(function (s, o) {
    var l = { value: o },
      c = {
        value: function () {
          --i === 0 && s()
        },
      }
    n.each(function () {
      var u = ee(this, r),
        f = u.on
      f !== t && ((e = (t = f).copy()), e._.cancel.push(l), e._.interrupt.push(l), e._.end.push(c)),
        (u.on = e)
    }),
      i === 0 && s()
  })
}
var Ug = 0
function ae(t, e, n, r) {
  ;(this._groups = t), (this._parents = e), (this._name = n), (this._id = r)
}
function Lc() {
  return ++Ug
}
var ie = Vn.prototype
ae.prototype = {
  constructor: ae,
  select: Sg,
  selectAll: Eg,
  selectChild: ie.selectChild,
  selectChildren: ie.selectChildren,
  filter: mg,
  merge: _g,
  selection: Rg,
  transition: Bg,
  call: ie.call,
  nodes: ie.nodes,
  node: ie.node,
  size: ie.size,
  empty: ie.empty,
  each: ie.each,
  on: wg,
  attr: tg,
  attrTween: sg,
  style: Tg,
  styleTween: kg,
  text: Lg,
  textTween: Vg,
  remove: bg,
  tween: Wp,
  delay: cg,
  duration: ag,
  ease: dg,
  easeVarying: gg,
  end: jg,
  [Symbol.iterator]: ie[Symbol.iterator],
}
function Kg(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
}
var zg = { time: null, delay: 0, duration: 250, ease: Kg }
function qg(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode)) throw new Error(`transition ${e} not found`)
  return n
}
function Wg(t) {
  var e, n
  t instanceof ae
    ? ((e = t._id), (t = t._name))
    : ((e = Lc()), ((n = zg).time = os()), (t = t == null ? null : t + ''))
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var o = r[s], l = o.length, c, u = 0; u < l; ++u)
      (c = o[u]) && Ir(c, t, e, u, o, n || qg(c, e))
  return new ae(r, this._parents, t, e)
}
Vn.prototype.interrupt = Kp
Vn.prototype.transition = Wg
function Gg(t) {
  return Math.abs((t = Math.round(t))) >= 1e21
    ? t.toLocaleString('en').replace(/,/g, '')
    : t.toString(10)
}
function yr(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf('e')) < 0) return null
  var n,
    r = t.slice(0, n)
  return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)]
}
function tn(t) {
  return (t = yr(Math.abs(t))), t ? t[1] : NaN
}
function Xg(t, e) {
  return function (n, r) {
    for (
      var i = n.length, s = [], o = 0, l = t[0], c = 0;
      i > 0 &&
      l > 0 &&
      (c + l + 1 > r && (l = Math.max(1, r - c)),
      s.push(n.substring((i -= l), i + l)),
      !((c += l + 1) > r));

    )
      l = t[(o = (o + 1) % t.length)]
    return s.reverse().join(e)
  }
}
function Yg(t) {
  return function (e) {
    return e.replace(/[0-9]/g, function (n) {
      return t[+n]
    })
  }
}
var Jg = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i
function vr(t) {
  if (!(e = Jg.exec(t))) throw new Error('invalid format: ' + t)
  var e
  return new us({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10],
  })
}
vr.prototype = us.prototype
function us(t) {
  ;(this.fill = t.fill === void 0 ? ' ' : t.fill + ''),
    (this.align = t.align === void 0 ? '>' : t.align + ''),
    (this.sign = t.sign === void 0 ? '-' : t.sign + ''),
    (this.symbol = t.symbol === void 0 ? '' : t.symbol + ''),
    (this.zero = !!t.zero),
    (this.width = t.width === void 0 ? void 0 : +t.width),
    (this.comma = !!t.comma),
    (this.precision = t.precision === void 0 ? void 0 : +t.precision),
    (this.trim = !!t.trim),
    (this.type = t.type === void 0 ? '' : t.type + '')
}
us.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? '0' : '') +
    (this.width === void 0 ? '' : Math.max(1, this.width | 0)) +
    (this.comma ? ',' : '') +
    (this.precision === void 0 ? '' : '.' + Math.max(0, this.precision | 0)) +
    (this.trim ? '~' : '') +
    this.type
  )
}
function Qg(t) {
  t: for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
    switch (t[n]) {
      case '.':
        r = i = n
        break
      case '0':
        r === 0 && (r = n), (i = n)
        break
      default:
        if (!+t[n]) break t
        r > 0 && (r = 0)
        break
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t
}
var Hc
function Zg(t, e) {
  var n = yr(t, e)
  if (!n) return t + ''
  var r = n[0],
    i = n[1],
    s = i - (Hc = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = r.length
  return s === o
    ? r
    : s > o
      ? r + new Array(s - o + 1).join('0')
      : s > 0
        ? r.slice(0, s) + '.' + r.slice(s)
        : '0.' + new Array(1 - s).join('0') + yr(t, Math.max(0, e + s - 1))[0]
}
function Ao(t, e) {
  var n = yr(t, e)
  if (!n) return t + ''
  var r = n[0],
    i = n[1]
  return i < 0
    ? '0.' + new Array(-i).join('0') + r
    : r.length > i + 1
      ? r.slice(0, i + 1) + '.' + r.slice(i + 1)
      : r + new Array(i - r.length + 2).join('0')
}
const Ro = {
  '%': (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + '',
  d: Gg,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Ao(t * 100, e),
  r: Ao,
  s: Zg,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16),
}
function Mo(t) {
  return t
}
var Co = Array.prototype.map,
  Po = ['y', 'z', 'a', 'f', 'p', 'n', 'µ', 'm', '', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']
function tm(t) {
  var e =
      t.grouping === void 0 || t.thousands === void 0
        ? Mo
        : Xg(Co.call(t.grouping, Number), t.thousands + ''),
    n = t.currency === void 0 ? '' : t.currency[0] + '',
    r = t.currency === void 0 ? '' : t.currency[1] + '',
    i = t.decimal === void 0 ? '.' : t.decimal + '',
    s = t.numerals === void 0 ? Mo : Yg(Co.call(t.numerals, String)),
    o = t.percent === void 0 ? '%' : t.percent + '',
    l = t.minus === void 0 ? '−' : t.minus + '',
    c = t.nan === void 0 ? 'NaN' : t.nan + ''
  function u(a) {
    a = vr(a)
    var h = a.fill,
      p = a.align,
      _ = a.sign,
      w = a.symbol,
      k = a.zero,
      N = a.width,
      C = a.comma,
      P = a.precision,
      O = a.trim,
      I = a.type
    I === 'n' ? ((C = !0), (I = 'g')) : Ro[I] || (P === void 0 && (P = 12), (O = !0), (I = 'g')),
      (k || (h === '0' && p === '=')) && ((k = !0), (h = '0'), (p = '='))
    var ot = w === '$' ? n : w === '#' && /[boxX]/.test(I) ? '0' + I.toLowerCase() : '',
      q = w === '$' ? r : /[%p]/.test(I) ? o : '',
      U = Ro[I],
      K = /[defgprs%]/.test(I)
    P =
      P === void 0
        ? 6
        : /[gprs]/.test(I)
          ? Math.max(1, Math.min(21, P))
          : Math.max(0, Math.min(20, P))
    function J(H) {
      var Z = ot,
        Q = q,
        Et,
        Ht,
        et
      if (I === 'c') (Q = U(H) + Q), (H = '')
      else {
        H = +H
        var V = H < 0 || 1 / H < 0
        if (
          ((H = isNaN(H) ? c : U(Math.abs(H), P)),
          O && (H = Qg(H)),
          V && +H == 0 && _ !== '+' && (V = !1),
          (Z = (V ? (_ === '(' ? _ : l) : _ === '-' || _ === '(' ? '' : _) + Z),
          (Q = (I === 's' ? Po[8 + Hc / 3] : '') + Q + (V && _ === '(' ? ')' : '')),
          K)
        ) {
          for (Et = -1, Ht = H.length; ++Et < Ht; )
            if (((et = H.charCodeAt(Et)), 48 > et || et > 57)) {
              ;(Q = (et === 46 ? i + H.slice(Et + 1) : H.slice(Et)) + Q), (H = H.slice(0, Et))
              break
            }
        }
      }
      C && !k && (H = e(H, 1 / 0))
      var G = Z.length + H.length + Q.length,
        pt = G < N ? new Array(N - G + 1).join(h) : ''
      switch ((C && k && ((H = e(pt + H, pt.length ? N - Q.length : 1 / 0)), (pt = '')), p)) {
        case '<':
          H = Z + H + Q + pt
          break
        case '=':
          H = Z + pt + H + Q
          break
        case '^':
          H = pt.slice(0, (G = pt.length >> 1)) + Z + H + Q + pt.slice(G)
          break
        default:
          H = pt + Z + H + Q
          break
      }
      return s(H)
    }
    return (
      (J.toString = function () {
        return a + ''
      }),
      J
    )
  }
  function f(a, h) {
    var p = u(((a = vr(a)), (a.type = 'f'), a)),
      _ = Math.max(-8, Math.min(8, Math.floor(tn(h) / 3))) * 3,
      w = Math.pow(10, -_),
      k = Po[8 + _ / 3]
    return function (N) {
      return p(w * N) + k
    }
  }
  return { format: u, formatPrefix: f }
}
var Xn, Dc, Vc
em({ thousands: ',', grouping: [3], currency: ['$', ''] })
function em(t) {
  return (Xn = tm(t)), (Dc = Xn.format), (Vc = Xn.formatPrefix), Xn
}
function nm(t) {
  return Math.max(0, -tn(Math.abs(t)))
}
function rm(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(tn(e) / 3))) * 3 - tn(Math.abs(t)))
}
function im(t, e) {
  return (t = Math.abs(t)), (e = Math.abs(e) - t), Math.max(0, tn(e) - tn(t)) + 1
}
function fs(t, e) {
  switch (arguments.length) {
    case 0:
      break
    case 1:
      this.range(t)
      break
    default:
      this.range(e).domain(t)
      break
  }
  return this
}
const Oo = Symbol('implicit')
function Bc() {
  var t = new vi(),
    e = [],
    n = [],
    r = Oo
  function i(s) {
    let o = t.get(s)
    if (o === void 0) {
      if (r !== Oo) return r
      t.set(s, (o = e.push(s) - 1))
    }
    return n[o % n.length]
  }
  return (
    (i.domain = function (s) {
      if (!arguments.length) return e.slice()
      ;(e = []), (t = new vi())
      for (const o of s) t.has(o) || t.set(o, e.push(o) - 1)
      return i
    }),
    (i.range = function (s) {
      return arguments.length ? ((n = Array.from(s)), i) : n.slice()
    }),
    (i.unknown = function (s) {
      return arguments.length ? ((r = s), i) : r
    }),
    (i.copy = function () {
      return Bc(e, n).unknown(r)
    }),
    fs.apply(i, arguments),
    i
  )
}
function jc() {
  var t = Bc().unknown(void 0),
    e = t.domain,
    n = t.range,
    r = 0,
    i = 1,
    s,
    o,
    l = !1,
    c = 0,
    u = 0,
    f = 0.5
  delete t.unknown
  function a() {
    var h = e().length,
      p = i < r,
      _ = p ? i : r,
      w = p ? r : i
    ;(s = (w - _) / Math.max(1, h - c + u * 2)),
      l && (s = Math.floor(s)),
      (_ += (w - _ - s * (h - c)) * f),
      (o = s * (1 - c)),
      l && ((_ = Math.round(_)), (o = Math.round(o)))
    var k = y0(h).map(function (N) {
      return _ + s * N
    })
    return n(p ? k.reverse() : k)
  }
  return (
    (t.domain = function (h) {
      return arguments.length ? (e(h), a()) : e()
    }),
    (t.range = function (h) {
      return arguments.length ? (([r, i] = h), (r = +r), (i = +i), a()) : [r, i]
    }),
    (t.rangeRound = function (h) {
      return ([r, i] = h), (r = +r), (i = +i), (l = !0), a()
    }),
    (t.bandwidth = function () {
      return o
    }),
    (t.step = function () {
      return s
    }),
    (t.round = function (h) {
      return arguments.length ? ((l = !!h), a()) : l
    }),
    (t.padding = function (h) {
      return arguments.length ? ((c = Math.min(1, (u = +h))), a()) : c
    }),
    (t.paddingInner = function (h) {
      return arguments.length ? ((c = Math.min(1, h)), a()) : c
    }),
    (t.paddingOuter = function (h) {
      return arguments.length ? ((u = +h), a()) : u
    }),
    (t.align = function (h) {
      return arguments.length ? ((f = Math.max(0, Math.min(1, h))), a()) : f
    }),
    (t.copy = function () {
      return jc(e(), [r, i]).round(l).paddingInner(c).paddingOuter(u).align(f)
    }),
    fs.apply(a(), arguments)
  )
}
function sm(t) {
  return function () {
    return t
  }
}
function om(t) {
  return +t
}
var To = [0, 1]
function Ue(t) {
  return t
}
function Ti(t, e) {
  return (e -= t = +t)
    ? function (n) {
        return (n - t) / e
      }
    : sm(isNaN(e) ? NaN : 0.5)
}
function lm(t, e) {
  var n
  return (
    t > e && ((n = t), (t = e), (e = n)),
    function (r) {
      return Math.max(t, Math.min(e, r))
    }
  )
}
function cm(t, e, n) {
  var r = t[0],
    i = t[1],
    s = e[0],
    o = e[1]
  return (
    i < r ? ((r = Ti(i, r)), (s = n(o, s))) : ((r = Ti(r, i)), (s = n(s, o))),
    function (l) {
      return s(r(l))
    }
  )
}
function um(t, e, n) {
  var r = Math.min(t.length, e.length) - 1,
    i = new Array(r),
    s = new Array(r),
    o = -1
  for (t[r] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse())); ++o < r; )
    (i[o] = Ti(t[o], t[o + 1])), (s[o] = n(e[o], e[o + 1]))
  return function (l) {
    var c = r0(t, l, 1, r) - 1
    return s[c](i[c](l))
  }
}
function fm(t, e) {
  return e
    .domain(t.domain())
    .range(t.range())
    .interpolate(t.interpolate())
    .clamp(t.clamp())
    .unknown(t.unknown())
}
function am() {
  var t = To,
    e = To,
    n = ss,
    r,
    i,
    s,
    o = Ue,
    l,
    c,
    u
  function f() {
    var h = Math.min(t.length, e.length)
    return o !== Ue && (o = lm(t[0], t[h - 1])), (l = h > 2 ? um : cm), (c = u = null), a
  }
  function a(h) {
    return h == null || isNaN((h = +h)) ? s : (c || (c = l(t.map(r), e, n)))(r(o(h)))
  }
  return (
    (a.invert = function (h) {
      return o(i((u || (u = l(e, t.map(r), Vt)))(h)))
    }),
    (a.domain = function (h) {
      return arguments.length ? ((t = Array.from(h, om)), f()) : t.slice()
    }),
    (a.range = function (h) {
      return arguments.length ? ((e = Array.from(h)), f()) : e.slice()
    }),
    (a.rangeRound = function (h) {
      return (e = Array.from(h)), (n = Tp), f()
    }),
    (a.clamp = function (h) {
      return arguments.length ? ((o = h ? !0 : Ue), f()) : o !== Ue
    }),
    (a.interpolate = function (h) {
      return arguments.length ? ((n = h), f()) : n
    }),
    (a.unknown = function (h) {
      return arguments.length ? ((s = h), a) : s
    }),
    function (h, p) {
      return (r = h), (i = p), f()
    }
  )
}
function hm() {
  return am()(Ue, Ue)
}
function dm(t, e, n, r) {
  var i = m0(t, e, n),
    s
  switch (((r = vr(r ?? ',f')), r.type)) {
    case 's': {
      var o = Math.max(Math.abs(t), Math.abs(e))
      return r.precision == null && !isNaN((s = rm(i, o))) && (r.precision = s), Vc(r, o)
    }
    case '':
    case 'e':
    case 'g':
    case 'p':
    case 'r': {
      r.precision == null &&
        !isNaN((s = im(i, Math.max(Math.abs(t), Math.abs(e))))) &&
        (r.precision = s - (r.type === 'e'))
      break
    }
    case 'f':
    case '%': {
      r.precision == null && !isNaN((s = nm(i))) && (r.precision = s - (r.type === '%') * 2)
      break
    }
  }
  return Dc(r)
}
function pm(t) {
  var e = t.domain
  return (
    (t.ticks = function (n) {
      var r = e()
      return g0(r[0], r[r.length - 1], n ?? 10)
    }),
    (t.tickFormat = function (n, r) {
      var i = e()
      return dm(i[0], i[i.length - 1], n ?? 10, r)
    }),
    (t.nice = function (n) {
      n == null && (n = 10)
      var r = e(),
        i = 0,
        s = r.length - 1,
        o = r[i],
        l = r[s],
        c,
        u,
        f = 10
      for (l < o && ((u = o), (o = l), (l = u), (u = i), (i = s), (s = u)); f-- > 0; ) {
        if (((u = bi(o, l, n)), u === c)) return (r[i] = o), (r[s] = l), e(r)
        if (u > 0) (o = Math.floor(o / u) * u), (l = Math.ceil(l / u) * u)
        else if (u < 0) (o = Math.ceil(o * u) / u), (l = Math.floor(l * u) / u)
        else break
        c = u
      }
      return t
    }),
    t
  )
}
function Uc() {
  var t = hm()
  return (
    (t.copy = function () {
      return fm(t, Uc())
    }),
    fs.apply(t, arguments),
    pm(t)
  )
}
function gn(t, e, n) {
  ;(this.k = t), (this.x = e), (this.y = n)
}
gn.prototype = {
  constructor: gn,
  scale: function (t) {
    return t === 1 ? this : new gn(this.k * t, this.x, this.y)
  },
  translate: function (t, e) {
    return (t === 0) & (e === 0) ? this : new gn(this.k, this.x + this.k * t, this.y + this.k * e)
  },
  apply: function (t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y]
  },
  applyX: function (t) {
    return t * this.k + this.x
  },
  applyY: function (t) {
    return t * this.k + this.y
  },
  invert: function (t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
  },
  invertX: function (t) {
    return (t - this.x) / this.k
  },
  invertY: function (t) {
    return (t - this.y) / this.k
  },
  rescaleX: function (t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
  },
  rescaleY: function (t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
  },
  toString: function () {
    return 'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')'
  },
}
gn.prototype
const gm = { class: 'header', ref: 'header' },
  mm = { class: 'chart', ref: 'chart' },
  _m = en({
    __name: 'StatsChart',
    props: { data: {} },
    setup(t) {
      const e = t,
        n = Hu('chart')
      return (
        yl(() => {
          const r = n.value.getBoundingClientRect().height || 0,
            i = parseFloat(getComputedStyle(n.value).fontSize)
          Ec(n.value).append(() => {
            const o = r - i,
              l = 0,
              c = 0,
              u = 2 * i,
              f = 2.5 * i,
              a = e.data,
              h = jc()
                .domain(
                  a0(
                    a,
                    ([w]) => -w.value,
                    (w) => w.key,
                  ),
                )
                .range([f, 800 - c])
                .padding(0.1),
              p = Uc()
                .domain([0, _0(a, (w) => w.value) || 1])
                .range([o - u, l]),
              _ = cp('svg').attr('width', 800).attr('height', o).attr('viewBox', [0, 0, 800, o])
            return (
              _.append('g')
                .attr('class', 'bars')
                .selectAll()
                .data(a)
                .join('rect')
                .attr('x', (w) => h(w.key) || 0)
                .attr('y', (w) => p(w.value))
                .attr('height', (w) => p(0) - p(w.value))
                .attr('width', h.bandwidth()),
              _.append('g')
                .attr('transform', `translate(0,${o - u})`)
                .call(A0(h).tickSizeOuter(0)),
              _.append('g')
                .attr('transform', `translate(${f},0)`)
                .call(R0(p).tickFormat((w) => (w.valueOf() * 100).toFixed()))
                .call((w) => w.select('.domain').remove()),
              _.node()
            )
          })
        }),
        (r, i) => (
          Lt(),
          pe(
            Rt,
            null,
            [
              W(
                'div',
                gm,
                i[0] ||
                  (i[0] = [W('h2', null, 'Overview', -1), W('p', null, '↑ Frequency (%)', -1)]),
                512,
              ),
              W('div', mm, null, 512),
            ],
            64,
          )
        )
      )
    },
  }),
  ym = { class: 'home-view' },
  vm = { class: 'left-side' },
  wm = { class: 'right-side' },
  xm = en({
    __name: 'HomeView',
    setup(t) {
      const e = [
        { key: 'A', value: 0.08167 },
        { key: 'B', value: 0.01492 },
        { key: 'C', value: 0.02782 },
        { key: 'D', value: 0.04253 },
        { key: 'E', value: 0.12702 },
        { key: 'F', value: 0.02268 },
      ]
      return (n, r) => (
        Lt(), pe('div', ym, [W('div', vm, [ut(Oh), ut(Qh)]), W('div', wm, [ut(_m, { data: e })])])
      )
    },
  }),
  bm = vh({
    history: Ja('/'),
    routes: [
      { path: '/', name: 'home', component: xm },
      {
        path: '/issues',
        name: 'issues',
        component: () => Qr(() => import('./IssuesView-ToZ7kQ1l.js'), __vite__mapDeps([0, 1])),
      },
      {
        path: '/source',
        name: 'source',
        component: () => Qr(() => import('./SourceView-DrXWSVFa.js'), []),
      },
      {
        path: '/runtime',
        name: 'runtime',
        component: () => Qr(() => import('./RuntimeView-4zp2RM15.js'), __vite__mapDeps([2, 3])),
      },
    ],
  }),
  as = fa(Eh)
as.use(pa())
as.use(bm)
as.mount('#app')
export {
  wn as A,
  Bc as B,
  cp as C,
  yl as D,
  Rt as F,
  Dn as _,
  W as a,
  Em as b,
  pe as c,
  en as d,
  Rm as e,
  hc as f,
  $c as g,
  Pm as h,
  Am as i,
  It as j,
  Cm as k,
  ce as l,
  ai as m,
  Li as n,
  Lt as o,
  un as p,
  ut as q,
  Ar as r,
  Ec as s,
  nu as t,
  Om as u,
  Mm as v,
  Sm as w,
  Bt as x,
  Of as y,
  Hu as z,
}
