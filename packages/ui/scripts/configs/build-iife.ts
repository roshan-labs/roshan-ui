import { buildPack, createBuildConfig, uiEntry } from '../build-config'

export async function buildIIFE() {
  return buildPack(createBuildConfig(uiEntry, 'iife', false))
}
