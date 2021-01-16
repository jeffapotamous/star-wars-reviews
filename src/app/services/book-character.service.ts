import { Injectable } from '@angular/core';
import { Gender } from '../interfaces/enums';

@Injectable({
  providedIn: 'root'
})
export class BookCharacterService {

  private bookCharacters: any;

  constructor() {
    this.bookCharacters = {
      15: [
        {
          label: 'Jedi',
          characters: [
            { name: 'Master Avar Kriss', gender: Gender.F, photo: 'AvarKriss.png' },
            { name: 'Elzar Mann', gender: Gender.M, photo: 'ElzarMann_LOTJ.png' },
            { name: "Te'Ami", gender: Gender.F, species: 'Durros', physicalDescription: 'Green skin, large red eyes, high domed skull' },
            { name: 'Mikkel Sutmani', gender: Gender.M, species: 'Ithorian' },
            { name: 'Nib Assek', gender: Gender.F },
            { name: 'Burryaga Agaburry', gender: Gender.M, species: 'Wookie', physicalDescription: 'Nib\'s Padawan', photo: 'Burryaga.png' },
            { name: 'Master Loden Greatstorm', gender: Gender.M, species: "Twi'lek", photo: 'LodenGreatstorm.png' },
            { name: 'Bell Zettifar', gender: Gender.M, species: 'Human', physicalDescription: 'Loden\'s Padawan', photo: 'Bell-Zettifar-CA.png' },
            { name: 'Indeera Stokes', gender: Gender.F, species: 'Tholothian', photo: 'IndeeraStokes.jpg', physicalDescription: 'Dark skin, elegant white tendrils, blue eyes.' },
            { name: 'Ember', gender: Gender.F, species: 'Charhound', photo: 'EmberCharhound.jpg' },
            { name: 'Porter Engle', gender: Gender.M, species: 'Ikkrukki', physicalDescription: 'More beard than being, excellent chef. Had 1 eye, and a long scar down his face. Known as "The Blade of Bardotta"', photo: 'PorterEngle.jpg' },
            { name: 'Stellan Gios', gender: Gender.M, photo: 'StellanGios-SWTLC.png' },
            { name: 'Master Jora Malli', gender: Gender.F },
            { name: 'Master Sskeer', species: 'Trandoshan', photo: 'Sskeer.png' },
            { name: 'Estala Maru', gender: Gender.F, species: 'Kessurian', photo: 'EstalaMaru.png' },
            { name: 'Rohmar Montgo' },
            { name: 'Lio Josse' },
            { name: 'Knight Rah Barocci', gender: Gender.M },
            { name: 'Yarael Poof', gender: Gender.M, species: 'Quermian', photo: 'YaraelPoof-SWCT.png' },
            { name: 'Jora Malli', gender: Gender.F, species: 'Togruta', physicalDescription: 'Bright orange skin and striking white facial markings.' },
          ]
        },

        {
          label: 'Nihil',
          characters: [
            { name: 'Pan Eyta', gender: Gender.M, species: 'Dowutin', physicalDescription: 'Massive heavy brows and horns sprouting from chin, very low voice. Precise planner.' },
            { name: 'Lourna Dee', gender: Gender.F, species: "Twi'lek", physicalDescription: '40 years old, thin, green, emaciated lekku with bone white stripes. Armored leather from kell dragon, blue eyes. Subtle, introverted, keeping her intentions close until the result was achieved. Generally the cruelest of the 3.', photo: 'LournaDee.jpg' },
            { name: 'Kassav Millik', gender: Gender.M, species: 'Weequay', physicalDescription: 'Aged, skin like sun-dried meat, fur cape. Chaotic and impulsive.' },
            { name: 'Marchion Ro', gender: Gender.M, physicalDescription: 'gray skin, wholly black eyes, predator like. Son of Asgar Ro, former Eye of Nihil', photo: 'Marchion-ro-concept-art.jpg' },
            { name: 'Zagyar', gender: Gender.M, physicalDescription: 'Part of Lourna\'s crew' }
          ]
        },

        {
          label: 'Politicians',
          characters: [
            { name: 'Chancelor Lina Soh', gender: Gender.F, photo: 'Lina-Soh.png' },
            { name: 'Minister Zeffren Ecka of Hetzal Prime', gender: Gender.M },
            { name: 'Counselor Daan of Hetzal', gender: Gender.M },
            { name: 'Norel Quo', gender: Gender.M, species: 'Koorivar', physicalDescription: 'Unpigmented. Aid to Chancelor Lina Soh' },
            { name: 'Senator Izzet Noor of Serenno', gender: Gender.M, physicalDescription: 'Thin, tall, aged, but vigorous, bald but for a lush fringe of white hair that he wore long.' },
            { name: 'Jeffo Lorilla', gender: Gender.M, species: 'Munn' }
          ]
        },

        {
          label: 'Pilots',
          characters: [
            { name: 'Captain Hedda Casset', gender: Gender.F, species: '' },
            { name: 'Lieutenant Bowman', gender: Gender.M, species: '' },
            { name: 'Cadet Kalwar', gender: Gender.M, species: '' },
            { name: 'Petty Officer Innamin', gender: Gender.M, species: 'Human', physicalDescription: 'Young (20s)' },
            { name: 'Captain Bright', gender: Gender.M, species: 'Nautolan', physicalDescription: 'Green skin, big black eyes. Tentacles' },
            { name: 'Ensign Peeples', gender: Gender.M, physicalDescription: 'Needle like snout, 19 eyes' },
            { name: 'Joss Adren', gender: Gender.M, species: '', physicalDescription: 'Married to Pikka. Looked "like an engine block with a head stuck on top, with hair he kept cropped tight"' },
            { name: 'Pikka Adren', gender: Gender.F, species: '', physicalDescription: 'light eyes, dark curly hair, a pile of dark freckles, light skin' },
            { name: 'Odabba', species: 'Shistavanem', gender: Gender.M },
            { name: 'Mari San Tekka', gender: Gender.F, species: 'Human', physicalDescription: 'Over a century old, running on medical support. Pilot of the Gaze Electric, Marchion Ro\'s ship' }
          ]
        },

        {
          label: 'Military',
          characters: [
            { name: 'Admiral Pevel Kronara', gender: Gender.M }
          ]
        },

        {
          label: 'Civilians',
          characters: [
            { name: 'Scantech (Third Class) Merven', gender: Gender.M, species: 'Mirialan' },
            { name: 'Sella', gender: Gender.F, species: 'Twi\'lek' },
            { name: 'Scantech (Second Class) Vel Carann', gender: Gender.F },
            { name: 'Shai Tennem', species: 'Bith' },
            { name: 'Keven Tarr', gender: Gender.M },
            { name: 'Larence Garello', gender: Gender.M, physicalDescription: 'Chief executive of Garello Tech' },
            { name: 'Marlowe San Tekka', gender: Gender.M, physicalDescription: 'Scieon of the San Tekka empire. Pale, blonde hair, blue eyes. Softer looking face.' },
            { name: 'Vellis San Tekka', gender: Gender.M, physicalDescription: 'Member of the San Tekka empire. Pale, blonde hair, blue eyes. Face looked chopped from granite.' },
          ]
        }
      ]
    }
  }

  public getBookCharactersByBookID(bookID: number) {
    return this.bookCharacters[bookID];
  }
}
