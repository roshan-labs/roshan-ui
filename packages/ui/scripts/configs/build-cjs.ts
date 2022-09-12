import { buildPack, createBuildConfig, uiEntry } from '../build-config'

export async function buildCJS() {
  return buildPack(createBuildConfig(uiEntry, 'cjs'))
}
