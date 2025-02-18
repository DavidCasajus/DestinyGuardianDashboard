import { Manifest } from '@/interfaces/manifests/Manifest';
import axiosInstance from '../api/axiosInstance';
import { Profile } from '@/interfaces/profile/Profile';

export class DestinyRepository {
  // Obtiene los datos de un jugador usando su gamertag
  static async getPlayerData(gamertag: string) {
    try {
      const response = await axiosInstance.get(`Destiny2/SearchDestinyPlayer/-1/${gamertag}/`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los datos del jugador:', error);
      throw new Error('No se pudo obtener los datos del jugador');
    }
  }

  // Obtiene el perfil de un jugador usando su ID
  static async getPlayerProfile(playerId: string) {
    try {
      const response = await axiosInstance.get(`Destiny2/1/Profile/${playerId}/`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener el perfil del jugador:', error);
      throw new Error('No se pudo obtener el perfil del jugador');
    }
  }

  // Obtiene el manifiesto de Destiny
  static async getDestinyManifest() {
    try {
      const response = await axiosInstance.get<Manifest>('/Destiny2/Manifest/');
      return response.data;
    } catch (error) {
      console.error('Error al obtener el manifiesto de Destiny:', error);
      throw new Error('No se pudo obtener el manifiesto de Destiny');
    }
  }

  // Obtiene los datos de un jugador usando su gamertag
  static async getProfileInfo(platformId:number,profileId:number) {
    try {
      const response = await axiosInstance.get<Profile>(`https://www.bungie.net/Platform/Destiny2/${platformId}/Profile/${profileId}/LinkedProfiles/?getAllMemberships=true`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los datos del clan:', error);
      throw new Error('No se pudo obtener los datos del clan');
    }
  }
}
