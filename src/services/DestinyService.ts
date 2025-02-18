import { DestinyRepository } from "@/repositories/DestinyRepository";


export class DestinyService {
  // Obtiene los datos del jugador a través del Repository
  static async getPlayerData(gamertag: string) {
    try {
      const data = await DestinyRepository.getPlayerData(gamertag);
      // Aquí podrías agregar lógica de negocio adicional si es necesario
      return data;
    } catch (error) {
      console.error('Error en el servicio de Destiny:', error);
      throw error;
    }
  }

  // Obtiene el perfil del jugador a través del Repository
  static async getPlayerProfile(playerId: string) {
    try {
      const profile = await DestinyRepository.getPlayerProfile(playerId);
      // Puedes transformar los datos aquí si es necesario
      return profile;
    } catch (error) {
      console.error('Error en el servicio de Destiny:', error);
      throw error;
    }
  }

   // Obtiene el perfil del jugador a través del Repository
  static async getManifest() {
    try {
      const profile = await DestinyRepository.getDestinyManifest();
      // Puedes transformar los datos aquí si es necesario
      return profile;
    } catch (error) {
      console.error('Error en el servicio de Destiny:', error);
      throw error;
    }
  }

  static async getProfileInfo(platformId:number,profileId:number) {
    try {
      const profile = await DestinyRepository.getProfileInfo(platformId,profileId);
      // Puedes transformar los datos aquí si es necesario
      return profile;
    } catch (error) {
      console.error('Error en el servicio de Destiny:', error);
      throw error;
    }
  }


}
