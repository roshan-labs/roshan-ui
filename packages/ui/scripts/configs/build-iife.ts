import { buildPack, createBuildConfig } from '../build-config'

export function buildIIFE() {
  return buildPack(createBuildConfig('iife'))
}
