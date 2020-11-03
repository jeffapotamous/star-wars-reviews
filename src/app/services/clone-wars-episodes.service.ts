import { Injectable } from '@angular/core';
import { CloneWarsEpisode } from '../interfaces/interfaces';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class CloneWarsEpisodesService {

  listOfCloneWars: CloneWarsEpisode[];

  constructor(private utilsService: UtilsService) {
    this.listOfCloneWars = [
      { season: 4, episode: 10, releaseOrder: 77, chronologicalOrder: 77, name: 'Carnage of Krell', link: 'https://www.disneyplus.com/video/3ea87b6f-c298-4847-a69d-05d6ec748f59' },
      { season: 4, episode: 9, releaseOrder: 76, chronologicalOrder: 76, name: 'Plan of Dissent', link: 'https://www.disneyplus.com/video/5dfa03d3-ec0c-462e-96b9-9995bb5b7e1d' },
      { season: 7, episode: 11, releaseOrder: 133, chronologicalOrder: 133, name: 'Shattered', link: 'https://www.disneyplus.com/video/cfcd7267-d3d1-4e98-92d6-3129b4c8d686' },
      { season: 4, episode: 8, releaseOrder: 75, chronologicalOrder: 75, name: 'The General', link: 'https://www.disneyplus.com/video/61e6b80b-ae44-431d-ae37-3ff46db6fdf6' },
      { season: 4, episode: 7, releaseOrder: 74, chronologicalOrder: 74, name: 'Darkness on Umbara', link: 'https://www.disneyplus.com/video/f9bfac62-4bb9-443b-905c-db5d978df3f2' },
      { season: 7, episode: 12, releaseOrder: 134, chronologicalOrder: 134, name: 'Victory and Death', link: '	https://www.disneyplus.com/video/f21bd5ab-d24d-4a4a-b09c-d09d4361148b' },
      { season: 7, episode: 10, releaseOrder: 132, chronologicalOrder: 132, name: 'The Phantom Apprentice', link: 'https://www.disneyplus.com/video/24dd0033-1f7d-492e-9114-63a684fa4f78' },
      { season: 1, episode: 5, releaseOrder: 6, chronologicalOrder: 10, name: 'Rookies', link: 'https://www.disneyplus.com/video/598d1e7b-f39e-4527-9487-b5e891f5eefa' },
      { season: 3, episode: 1, releaseOrder: 46, chronologicalOrder: 4, name: 'Clone Cadets', link: 'https://www.disneyplus.com/video/7851718f-2530-47e2-bf32-a8b498b3efa9' },
      { season: 7, episode: 9, releaseOrder: 131, chronologicalOrder: 131, name: 'Old Friends Not Forgotten', link: 'https://www.disneyplus.com/video/0626c961-a67c-4203-bee2-a8166e95b895' },
      { season: 5, episode: 6, releaseOrder: 95, chronologicalOrder: 94, name: 'The Gathering', link: 'https://www.disneyplus.com/video/dce32899-0e62-479d-b33a-37ca69ad9565' },
      { season: 5, episode: 14, releaseOrder: 103, chronologicalOrder: 103, name: 'Eminence', link: 'https://www.disneyplus.com/video/bce6b831-36ff-4ef7-9c85-7ae8030cdbcb' },
      { season: 5, episode: 15, releaseOrder: 104, chronologicalOrder: 104, name: 'Shades of Reason', link: 'https://www.disneyplus.com/video/9fce5334-6a7b-4308-9d90-e50e579b5cbb' },
      { season: 5, episode: 16, releaseOrder: 105, chronologicalOrder: 105, name: 'The Lawless', link: 'https://www.disneyplus.com/video/13bc0d23-46f6-4650-952c-57a19aac17bd' },
      { season: 1, episode: 12, releaseOrder: 13, chronologicalOrder: 17, name: 'The Gungan General', link: 'https://www.disneyplus.com/video/c1ac160f-7cc2-444f-a8a6-e1a1aa68d12d' },
      { season: 3, episode: 2, releaseOrder: 47, chronologicalOrder: 49, name: 'ARC Troopers', link: 'https://www.disneyplus.com/video/6e2c8c2f-a7ce-49d5-ad90-88f4a97eb303' },
      { season: 1, episode: 14, releaseOrder: 15, chronologicalOrder: 19, name: 'Defenders of Peace', link: 'https://www.disneyplus.com/video/b258d36e-98da-419a-bcc4-58826cd79f95' },
      { season: 5, episode: 1, releaseOrder: 90, chronologicalOrder: 102, name: 'Revival', link: 'https://www.disneyplus.com/video/46bf27c0-bc74-404a-98de-56bbe187d941' },
      { season: 6, episode: 4, releaseOrder: 113, chronologicalOrder: 113, name: 'chronologicalOrders', link: 'https://www.disneyplus.com/video/46c3decc-a11c-4d2e-a792-069ebe535003' },
      { season: 6, episode: 1, releaseOrder: 110, chronologicalOrder: 110, name: 'The Unknown', link: 'https://www.disneyplus.com/video/ec135b2d-d990-4564-99d4-2e3a2ee866bd' },
      { season: 6, episode: 2, releaseOrder: 111, chronologicalOrder: 111, name: 'Conspiracy', link: 'https://www.disneyplus.com/video/d4e8fd92-4d92-494d-8d49-d5b148bdcbb5' },
      { season: 6, episode: 3, releaseOrder: 112, chronologicalOrder: 112, name: 'Fugitive', link: 'https://www.disneyplus.com/video/e3d63b2f-8e40-4064-9fe8-1f32299f17d3' },
      { season: 4, episode: 17, releaseOrder: 84, chronologicalOrder: 84, name: 'The Box', link: 'https://www.disneyplus.com/video/f95cb9de-abf7-4d7f-8a65-d9a731a60f47' },
      { season: 7, episode: 1, releaseOrder: 123, chronologicalOrder: 127, name: 'The Bad Batch', link: 'https://www.disneyplus.com/video/9ee46453-c414-4c89-b3ef-b0d4d1c001fc' },
      { season: 7, episode: 2, releaseOrder: 124, chronologicalOrder: 128, name: 'A Distant Echo', link: 'https://www.disneyplus.com/video/cbcde944-1622-4f15-a136-47a85e7f75c1' },
      { season: 1, episode: 11, releaseOrder: 12, chronologicalOrder: 16, name: 'Dooku Captured', link: 'https://www.disneyplus.com/video/9bc09e32-83d9-4e00-a49e-a0241b4fb243' },
      { season: 6, episode: 13, releaseOrder: 122, chronologicalOrder: 122, name: 'Sacrifice', link: 'https://www.disneyplus.com/video/37357ff9-88a7-4652-b16e-cda4808d1930' },
      { season: 6, episode: 12, releaseOrder: 121, chronologicalOrder: 121, name: 'Destiny', link: 'https://www.disneyplus.com/video/99e77e6b-d43a-4f6f-b07c-51d48ee4c3bd' },
      { season: 6, episode: 11, releaseOrder: 120, chronologicalOrder: 120, name: 'Voices', link: 'https://www.disneyplus.com/video/ced4924c-6c39-4346-b07e-d22fb33de653' },
      { season: 6, episode: 10, releaseOrder: 119, chronologicalOrder: 119, name: 'The Lost One', link: 'https://www.disneyplus.com/video/f8d1131b-c197-4e8e-b1a5-9f9ad5e7cb9b' },
      { season: 1, episode: 13, releaseOrder: 14, chronologicalOrder: 18, name: 'Jedi Crash', link: 'https://www.disneyplus.com/video/28c0b907-8efe-4400-af50-c13c66e18468' },
      { season: 4, episode: 16, releaseOrder: 83, chronologicalOrder: 83, name: 'Friends and Enemies', link: 'https://www.disneyplus.com/video/8fa14ce6-7c73-48b9-b271-16dffeb62fec' },
      { season: 5, episode: 7, releaseOrder: 96, chronologicalOrder: 95, name: 'A Test of Strength', link: 'https://www.disneyplus.com/video/da339c6c-de91-40f2-a091-09cb11a80f17' },
      { season: 4, episode: 15, releaseOrder: 82, chronologicalOrder: 82, name: 'Deception', link: 'https://www.disneyplus.com/video/c639cb21-5137-4090-a440-8f84a171d235' },
      { season: 5, episode: 20, releaseOrder: 109, chronologicalOrder: 109, name: 'The Wrong Jedi', link: 'https://www.disneyplus.com/video/c09fcde1-1b4d-40da-af52-5d8fa0611a53' },
      { season: 3, episode: 20, releaseOrder: 65, chronologicalOrder: 65, name: 'Citadel Rescue', link: 'https://www.disneyplus.com/video/8799713b-3cd0-48e7-b32d-aef303971020' },
      { season: 3, episode: 18, releaseOrder: 63, chronologicalOrder: 63, name: 'The Citadel', link: 'https://www.disneyplus.com/video/5ce7d03a-c7d7-4e63-8cb1-eae92bcd1349' },
      { season: 3, episode: 19, releaseOrder: 64, chronologicalOrder: 64, name: 'Counter Attack', link: 'https://www.disneyplus.com/video/da31968a-f4f6-457b-8d4a-9938d5bdb6f0' },
      { season: 5, episode: 18, releaseOrder: 107, chronologicalOrder: 107, name: 'The Jedi Who Knew Too Much', link: 'https://www.disneyplus.com/video/a799d6f3-a50e-4be0-b8f2-8102f11c1bb7' },
      { season: 5, episode: 19, releaseOrder: 108, chronologicalOrder: 108, name: 'To Catch a Jedi', link: 'https://www.disneyplus.com/video/d504b77e-8c64-44a4-b051-ca5e9300d4a9' },
      { season: 4, episode: 22, releaseOrder: 89, chronologicalOrder: 89, name: 'Revenge', link: 'https://www.disneyplus.com/video/6a302c32-b9bb-4d73-b69d-7698df40ae54' },
      { season: 3, episode: 16, releaseOrder: 61, chronologicalOrder: 61, name: 'Altar of Mortis', link: 'https://www.disneyplus.com/video/75e60bba-9b85-4531-aec2-7f3b9ed18e4c' },
      { season: 3, episode: 15, releaseOrder: 60, chronologicalOrder: 60, name: 'Overlords', link: 'https://www.disneyplus.com/video/48c78dd1-73f6-40ef-9e0d-d469ea00ada8' },
      { season: 3, episode: 17, releaseOrder: 62, chronologicalOrder: 62, name: 'Ghosts of Mortis', link: 'https://www.disneyplus.com/video/6eccdac1-2d29-416d-88f7-779791c8bbca' },
      { season: 2, episode: 17, releaseOrder: 40, chronologicalOrder: 29, name: 'Bounty Hunters', link: 'https://www.disneyplus.com/video/2bfad4dd-0bf4-4c76-a7ce-7e34df37618a' },
      { season: 5, episode: 17, releaseOrder: 106, chronologicalOrder: 106, name: 'Sabotage', link: 'https://www.disneyplus.com/video/17176f47-85e5-4687-ae84-a3d7f6984415' },
      { season: 5, episode: 10, releaseOrder: 99, chronologicalOrder: 98, name: 'Secret Weapons', link: 'https://www.disneyplus.com/video/29f4f86d-1c16-47b5-9f2c-9df1e58fc01f' },
      { season: 3, episode: 21, releaseOrder: 66, chronologicalOrder: 66, name: 'Padawan Lost', link: 'https://www.disneyplus.com/video/e9010f4d-8e53-4100-9e56-37526a34d8cb' },
      { season: 5, episode: 12, releaseOrder: 101, chronologicalOrder: 100, name: 'Missing in Action', link: 'https://www.disneyplus.com/video/3f8328ff-925d-4554-808c-5dc2c03c5df7' },
      { season: 3, episode: 22, releaseOrder: 67, chronologicalOrder: 67, name: 'Wookiee Hunt', link: 'https://www.disneyplus.com/video/d332b464-3b44-4ace-af1b-bcabcf5f9155' },
      { season: 4, episode: 18, releaseOrder: 85, chronologicalOrder: 85, name: 'Crisis on Naboo', link: 'https://www.disneyplus.com/video/ca31a17c-8cb2-4b69-acf5-4f1e399abf5d' },
      { season: 5, episode: 9, releaseOrder: 98, chronologicalOrder: 97, name: 'A Necessary Bond', link: 'https://www.disneyplus.com/video/06eb2462-5d0c-42a9-a1b4-acc9ccfd109e' },
      { season: 2, episode: 18, releaseOrder: 41, chronologicalOrder: 30, name: 'The Zillo Beast', link: 'https://www.disneyplus.com/video/13d1cbe9-abf9-4691-a407-228d16cfa48d' },
      { season: 2, episode: 19, releaseOrder: 42, chronologicalOrder: 31, name: 'The Zillo Beast Strikes Back', link: 'https://www.disneyplus.com/video/6f2cd6cf-8e7a-42e6-893a-6465f2683648' },
      { season: 5, episode: 8, releaseOrder: 97, chronologicalOrder: 96, name: 'Bound for Rescue', link: 'https://www.disneyplus.com/video/8cc2c6fb-ec6b-406e-a334-bb44f2fed008' },
      { season: 5, episode: 11, releaseOrder: 100, chronologicalOrder: 99, name: 'A Sunny Day in the Void', link: 'https://www.disneyplus.com/video/9c96ac8c-2f1e-463e-8361-218fb2796aff' },
      { season: 3, episode: 14, releaseOrder: 59, chronologicalOrder: 59, name: 'Witches of the Mist', link: 'https://www.disneyplus.com/video/43682151-f351-4280-9a86-ca1986ac7a72' },
      { season: 3, episode: 13, releaseOrder: 58, chronologicalOrder: 58, name: 'Monster', link: 'https://www.disneyplus.com/video/60ae22d3-0e23-42ae-9931-30076c8cd519' },
      { season: 3, episode: 12, releaseOrder: 57, chronologicalOrder: 57, name: 'Nightsisters', link: 'https://www.disneyplus.com/video/7efbccb3-2bc5-4271-8e20-ab78c9efbccc' },
      { season: 4, episode: 21, releaseOrder: 88, chronologicalOrder: 88, name: 'Brothers', link: 'https://www.disneyplus.com/video/ea059b38-a21c-4ff2-8e64-6c3bda2d6afc' },

      { season: 2, episode: 1, releaseOrder: 24, chronologicalOrder: 26, name: 'Holocron Heist', link: 'https://www.disneyplus.com/video/0eb555a3-9420-4364-aef2-7186f5e4fb4e' },
      { season: 2, episode: 10, releaseOrder: 33, chronologicalOrder: 38, name: 'The Deserter', link: 'https://www.disneyplus.com/video/09f9af96-40bd-4e9a-a18d-92fb9f373298' },
      { season: 2, episode: 12, releaseOrder: 35, chronologicalOrder: 40, name: 'The Mandalore Plot', link: 'https://www.disneyplus.com/video/91d2a7e2-8eb1-411d-941e-4bd8babe4e55' },
      { season: 4, episode: 19, releaseOrder: 86, chronologicalOrder: 86, name: 'Massacre', link: 'https://www.disneyplus.com/video/2467b031-3144-40b8-a3c2-55160986820d' },
      { season: 4, episode: 20, releaseOrder: 87, chronologicalOrder: 87, name: 'Bounty', link: 'https://www.disneyplus.com/video/f7e92583-e67e-4ade-8da8-f64a2b38534a' },
      { season: 2, episode: 3, releaseOrder: 26, chronologicalOrder: 28, name: 'Children of the Force', link: 'https://www.disneyplus.com/video/2b77cbb2-045c-456d-a551-be454175ca28' },
      { season: 3, episode: 9, releaseOrder: 54, chronologicalOrder: 53, name: 'Hunt for Ziro', link: 'https://www.disneyplus.com/video/b6d7ab23-6fa5-4311-973c-0eebb8e62133' },
      { season: 1, episode: 22, releaseOrder: 23, chronologicalOrder: 52, name: 'Hostage Crisis', link: 'https://www.disneyplus.com/video/fd88476e-ab17-437e-94e3-7465b5adda40' },
      { season: 2, episode: 16, releaseOrder: 39, chronologicalOrder: 1, name: 'Cat and Mouse', link: 'https://www.disneyplus.com/video/5faf61af-2ce0-4baa-a647-a4f4363eba0e' },
      { season: 1, episode: 17, releaseOrder: 18, chronologicalOrder: 21, name: 'Blue Shadow Virus', link: 'https://www.disneyplus.com/video/393b2b72-7e23-420d-ae09-f5332cb6b726' },
      { season: 2, episode: 14, releaseOrder: 37, chronologicalOrder: 42, name: 'Duchess of Mandalore', link: 'https://www.disneyplus.com/video/9aedb852-9abb-4c59-95c3-58f1bfb0cef6' },
      { season: 4, episode: 13, releaseOrder: 80, chronologicalOrder: 80, name: 'Escape from Kadavo', link: 'https://www.disneyplus.com/video/b2e1fd41-8496-4860-9ef8-80bed1b92754' },
      { season: 1, episode: 10, releaseOrder: 11, chronologicalOrder: 15, name: 'Lair of Grievous', link: 'https://www.disneyplus.com/video/3755d2fb-2904-47a2-9315-fd4969401c30' },
      { season: 1, episode: 16, releaseOrder: 17, chronologicalOrder: 2, name: 'Hidden Enemy', link: 'https://www.disneyplus.com/video/7c732b05-b90f-4090-a184-5652be228139' },
      { season: 2, episode: 15, releaseOrder: 38, chronologicalOrder: 56, name: 'Senate Murders', link: 'https://www.disneyplus.com/video/af719ca6-3fae-435e-a2f5-07d5a3f6499d' },
      { season: 7, episode: 3, releaseOrder: 125, chronologicalOrder: 129, name: 'On the Wings of Keeradaks', link: 'https://www.disneyplus.com/video/1df8336f-23c4-437a-a360-043e5cb26a41' },
      { season: 2, episode: 7, releaseOrder: 30, chronologicalOrder: 35, name: 'Legacy of Terror', link: 'https://www.disneyplus.com/video/ed8f1cb7-f3e3-4ab0-af03-888ba8b20d25' },
      { season: 6, episode: 8, releaseOrder: 117, chronologicalOrder: 117, name: 'The Disappeared', link: 'https://www.disneyplus.com/video/6173c7f8-b2d8-448c-8143-77eb71c73589' },
      { season: 6, episode: 9, releaseOrder: 118, chronologicalOrder: 118, name: 'The Disappeared: Pt. II', link: 'https://www.disneyplus.com/video/2e4fe8fe-c7e3-40dc-87d7-bdb7e02eb896' },
      { season: 4, episode: 5, releaseOrder: 72, chronologicalOrder: 72, name: 'Mercy Mission', link: 'https://www.disneyplus.com/video/1d717a67-fdce-4404-aed6-3cca361e0946' },
      { season: 2, episode: 13, releaseOrder: 36, chronologicalOrder: 41, name: 'Voyage of Temptation', link: 'https://www.disneyplus.com/video/9d2c4240-5a2e-4f2a-ab88-628a5dc68540' },
      { season: 2, episode: 6, releaseOrder: 29, chronologicalOrder: 34, name: 'Weapons Factory', link: 'https://www.disneyplus.com/video/a4fc767f-a20d-4fb6-b8ce-5e9b6ec80dac' },
      { season: 5, episode: 13, releaseOrder: 102, chronologicalOrder: 101, name: 'Point of No Return', link: 'https://www.disneyplus.com/video/7fd11383-337a-43ef-a633-94f357cc511a' },
      { season: 1, episode: 20, releaseOrder: 21, chronologicalOrder: 24, name: 'Innocents of Ryloth', link: 'https://www.disneyplus.com/video/d4f5abd5-3e71-4cef-9928-6be9527fdb89' },
      { season: 4, episode: 12, releaseOrder: 79, chronologicalOrder: 79, name: 'Slaves of the Republic', link: 'https://www.disneyplus.com/video/22ffd322-9702-403f-93d3-47dc7780e062' },
      { season: 1, episode: 21, releaseOrder: 22, chronologicalOrder: 25, name: 'Liberty on Ryloth', link: 'https://www.disneyplus.com/video/0f87705e-7773-4154-8ff8-fdee5671431d' },
      { season: 4, episode: 4, releaseOrder: 71, chronologicalOrder: 71, name: 'Shadow Warrior', link: 'https://www.disneyplus.com/video/794938c4-0700-4b1f-a6c3-20aff7ca1b39' },
      { season: 2, episode: 8, releaseOrder: 31, chronologicalOrder: 36, name: 'Brain Invaders', link: 'https://www.disneyplus.com/video/521b49b5-26a5-4153-af04-3fc40e4ececd' },
      { season: 3, episode: 10, releaseOrder: 55, chronologicalOrder: 54, name: 'Heroes on Both Side', link: 'https://www.disneyplus.com/video/1e012171-5147-461e-b42c-80ee6bed9c29' },
      { season: 2, episode: 5, releaseOrder: 28, chronologicalOrder: 33, name: 'Landing at Point Rain', link: 'https://www.disneyplus.com/video/6ba55d34-2db4-4f82-b219-fc82500ca89a' },
      { season: 6, episode: 5, releaseOrder: 114, chronologicalOrder: 114, name: 'An Old Friend', link: 'https://www.disneyplus.com/video/64438a1c-f629-4085-b461-33fac7ea99ba' },
      { season: 6, episode: 6, releaseOrder: 115, chronologicalOrder: 115, name: 'The Rise of Clovis', link: 'https://www.disneyplus.com/video/cad54530-94eb-4b92-b380-b0a807d195c5' },
      { season: 6, episode: 7, releaseOrder: 116, chronologicalOrder: 116, name: 'Crisis at the Heart', link: 'https://www.disneyplus.com/video/2a2fc61d-3813-4cf8-88a7-cab1975cee35' },
      { season: 4, episode: 6, releaseOrder: 73, chronologicalOrder: 73, name: 'Nomad Droids', link: 'https://www.disneyplus.com/video/70b7d424-fd27-4388-b934-b4bfad3f898d' },
      { season: 5, episode: 5, releaseOrder: 94, chronologicalOrder: 93, name: 'Tipping Points', link: 'https://www.disneyplus.com/video/682b3543-c8ae-4f19-99f9-411bb43a0467' },
      { season: 3, episode: 7, releaseOrder: 52, chronologicalOrder: 48, name: 'Assassin', link: 'https://www.disneyplus.com/video/652f203c-8b9a-4b3f-981a-59915aa99cfb' },
      { season: 4, episode: 11, releaseOrder: 78, chronologicalOrder: 78, name: 'Kidnapped', link: 'https://www.disneyplus.com/video/02bd06fc-230f-4667-b9da-23fb11d66b70' },
      { season: 3, episode: 5, releaseOrder: 50, chronologicalOrder: 46, name: 'Corruption', link: 'https://www.disneyplus.com/video/3ce7a07a-460a-4e02-9fe9-e7240bff2b01' },
      { season: 1, episode: 15, releaseOrder: 16, chronologicalOrder: 20, name: 'Trespass', link: 'https://www.disneyplus.com/video/bf62fc31-f895-4dec-9d96-6635bda89f26' },
      { season: 3, episode: 11, releaseOrder: 56, chronologicalOrder: 55, name: 'Pursuit of Peace', link: 'https://www.disneyplus.com/video/ac44bc69-553d-4c58-83ab-e621966d35e4' },
      { season: 1, episode: 18, releaseOrder: 19, chronologicalOrder: 22, name: 'Mystery of a Thousand Moons', link: 'https://www.disneyplus.com/video/f6fe3f35-5e5e-440b-97d6-425ea1a1820d' },
      { season: 2, episode: 2, releaseOrder: 25, chronologicalOrder: 27, name: 'Cargo of Doom', link: 'https://www.disneyplus.com/video/865525da-5daa-4188-9bca-8abd942909fd' },
      { season: 1, episode: 1, releaseOrder: 2, chronologicalOrder: 6, name: 'Ambush', link: 'https://www.disneyplus.com/video/0bf87f10-d9a1-44ca-8371-f38543eb3706' },
      { season: 3, episode: 3, releaseOrder: 48, chronologicalOrder: 5, name: 'Supply Lines', link: 'https://www.disneyplus.com/video/9d78f2ca-bcf7-413c-a0ab-f6afe9edf677' },
      { season: 2, episode: 11, releaseOrder: 34, chronologicalOrder: 39, name: 'Lightsaber Lost', link: 'https://www.disneyplus.com/video/07c0124a-5234-4c58-a2f0-79508e3b14b6' },
      { season: 3, episode: 4, releaseOrder: 49, chronologicalOrder: 50, name: 'Sphere of Influence', link: 'https://www.disneyplus.com/video/b091b508-0880-4cb6-9d2b-24c2075acd52' },

      { season: 5, episode: 2, releaseOrder: 91, chronologicalOrder: 90, name: 'A War on Two Fronts', link: 'https://www.disneyplus.com/video/ede2e807-00f4-4c49-b634-16d7826ef47a' },
      { season: 5, episode: 3, releaseOrder: 92, chronologicalOrder: 91, name: 'Front Runners', link: 'https://www.disneyplus.com/video/e834cd28-5335-43c7-a5f1-9814431f414c' },
      { season: 5, episode: 4, releaseOrder: 93, chronologicalOrder: 92, name: 'The Soft War', link: 'https://www.disneyplus.com/video/bda5b155-0414-458c-9c65-457697ae8fb5' },
      { season: 4, episode: 14, releaseOrder: 81, chronologicalOrder: 81, name: 'A Friend In Need', link: 'https://www.disneyplus.com/video/916bff39-2aae-47db-b43a-e22f4179d093' },
      { season: 7, episode: 8, releaseOrder: 130, chronologicalOrder: 126, name: 'Together Again', link: 'https://www.disneyplus.com/video/c59f5965-71d6-40e5-8650-ddf076125e0d' },
      { season: 2, episode: 20, releaseOrder: 43, chronologicalOrder: 43, name: 'Death Trap', link: 'https://www.disneyplus.com/video/c60abd64-34bd-4141-ab53-3a265a929a7b' },
      { season: 2, episode: 21, releaseOrder: 44, chronologicalOrder: 44, name: 'R2 Come Home', link: 'https://www.disneyplus.com/video/28034e35-c413-4219-8072-444cef55bd64' },
      { season: 2, episode: 22, releaseOrder: 45, chronologicalOrder: 45, name: 'Lethal Trackdown', link: 'https://www.disneyplus.com/video/eccba821-6a8a-4007-8ea2-1995ffe5637d' },
      { season: 1, episode: 9, releaseOrder: 10, chronologicalOrder: 14, name: 'Cloak of Darkness', link: 'https://www.disneyplus.com/video/96574cf0-9dd5-48f4-9625-545a13cff7db' },
      { season: 3, episode: 8, releaseOrder: 53, chronologicalOrder: 51, name: 'Evil Plans', link: 'https://www.disneyplus.com/video/c69bad71-ab68-4c2c-8da7-add1e929b6bd' },
      { season: 2, episode: 4, releaseOrder: 27, chronologicalOrder: 32, name: 'Senate Spy', link: 'https://www.disneyplus.com/video/094ea69a-1e8f-44cd-9ebb-1551993b5129' },
      { season: 1, episode: 4, releaseOrder: 5, chronologicalOrder: 9, name: 'Destroy Malevolence', link: 'https://www.disneyplus.com/video/7097d305-bca4-40e9-9cf0-cc84d89583a6' },
      { season: 1, episode: 2, releaseOrder: 3, chronologicalOrder: 7, name: 'Rising Malevolence', link: 'https://www.disneyplus.com/video/5bb0c4dc-91f1-434b-974f-1716511ecd4e' },
      { season: 4, episode: 1, releaseOrder: 68, chronologicalOrder: 68, name: 'Water War', link: 'https://www.disneyplus.com/video/0118dfcf-cb59-44eb-bb93-15888e9cb8a6' },
      { season: 4, episode: 2, releaseOrder: 69, chronologicalOrder: 69, name: 'Gungan Attack', link: 'https://www.disneyplus.com/video/661736f6-035f-4d8f-98b7-d1a75d3359db' },
      { season: 4, episode: 3, releaseOrder: 70, chronologicalOrder: 70, name: 'Prisoners', link: 'https://www.disneyplus.com/video/a78235e0-c137-410c-abd8-69601e432648' },
      { season: 2, episode: 9, releaseOrder: 32, chronologicalOrder: 37, name: 'Grievous Intrigue', link: 'https://www.disneyplus.com/video/83357ef1-f768-4f3b-8b03-2f0c2e4617e7' },
      { season: 1, episode: 3, releaseOrder: 4, chronologicalOrder: 8, name: 'Shadow of Malevolence', link: 'https://www.disneyplus.com/video/96e47d91-f975-4302-8bb0-73dfe9ad0a37' },
      { season: 3, episode: 6, releaseOrder: 51, chronologicalOrder: 47, name: 'The Academy', link: 'https://www.disneyplus.com/video/f464497e-a4e5-44db-922e-d44d1a70fd73' },
      { season: 1, episode: 19, releaseOrder: 20, chronologicalOrder: 23, name: 'Storm over Ryloth', link: 'https://www.disneyplus.com/video/76710ca6-5a5f-4fbd-8bc3-2a62beba88cf' },
      { season: 7, episode: 6, releaseOrder: 128, chronologicalOrder: 124, name: 'Deal No Deal', link: 'https://www.disneyplus.com/video/7ed29bb0-bfff-462c-ae96-f89a4f3f89e2' },

      { season: 7, episode: 7, releaseOrder: 129, chronologicalOrder: 125, name: 'Dangerous Debt', link: 'https://www.disneyplus.com/video/468b341b-4d54-4adf-823f-8934ff05800b' },
      { season: 7, episode: 5, releaseOrder: 127, chronologicalOrder: 123, name: 'Gone with a Trace', link: 'https://www.disneyplus.com/video/a1dfba86-2134-41e9-8794-e8040896bef6' },
      { season: 7, episode: 4, releaseOrder: 126, chronologicalOrder: 130, name: 'Unfinished Business', link: 'https://www.disneyplus.com/video/2aba28e0-4dbe-49ab-9512-fa856ff1e791' },
      { season: 1, episode: 7, releaseOrder: 8, chronologicalOrder: 12, name: 'Duel of the Droids', link: 'https://www.disneyplus.com/video/6dfef4c5-f797-4ff3-95ca-2f6e6f865f82' },
      { season: 1, episode: 6, releaseOrder: 7, chronologicalOrder: 11, name: 'Downfall of a Droid', link: 'https://www.disneyplus.com/video/41059c6d-bb4c-4185-91f4-7b5eb3f15849' },
      { season: 1, episode: 8, releaseOrder: 9, chronologicalOrder: 13, name: 'Bombad Jedi', link: 'https://www.disneyplus.com/video/c0491eed-234e-461d-9e98-82dd297e1f6f' },
      { releaseOrder: 1, chronologicalOrder: 3, name: 'The Clone Wars Theatrical Release', link: 'https://www.disneyplus.com/video/a42962f3-a4bd-4e63-b5d5-025dbee2b150' }
    ];
  }

  public getCloneWarsEpisodes(): CloneWarsEpisode[] {
    return this.listOfCloneWars;
  }

  public getCloneWarsEpisodesChronological(): CloneWarsEpisode[] {
    const a = this.utilsService.deepCopy(this.listOfCloneWars);
    return a.sort((a: CloneWarsEpisode, b: CloneWarsEpisode) => { return a.chronologicalOrder - b.chronologicalOrder });
  }

  public getCloneWarsEpisodesRelease(): CloneWarsEpisode[] {
    const a = this.utilsService.deepCopy(this.listOfCloneWars);
    return a.sort((a: CloneWarsEpisode, b: CloneWarsEpisode) => { return a.releaseOrder - b.releaseOrder });
  }
}
