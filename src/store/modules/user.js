import { login } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((res, rej) => {
      login({ ad_account: username.trim(), ad_password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)// 更新store的token
        setToken(data.token)// 更新Cookie的token
        res()
      }).catch(error => {
        rej(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
