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
            { name: 'Elzar Mann', gender: Gender.M, photo: 'ElzarMann_LOTJ.png', description: 'Looked like someone out of a holo-drama. Olive skin and dark, wavy hair.' },
            { name: "Te'Ami", gender: Gender.F, species: 'Durros', description: 'Green skin, large red eyes, high domed skull', photo: 'TeAmi.png' },
            { name: 'Mikkel Sutmani', gender: Gender.M, species: 'Ithorian', photo: 'MikkelSutmani.png' },
            { name: 'Nib Assek', gender: Gender.F, photo: 'NibAssek.png' },
            { name: 'Burryaga Agaburry', gender: Gender.M, label1: 'AKA: Burry', species: 'Wookie', description: 'Nib\'s Padawan', photo: 'Burryaga.png' },
            { name: 'Master Loden Greatstorm', gender: Gender.M, species: "Twi'lek", photo: 'LodenGreatstorm.png' },
            { name: 'Bell Zettifar', gender: Gender.M, species: 'Human', description: 'Loden\'s Padawan', photo: 'Bell-Zettifar-CA.png' },
            { name: 'Indeera Stokes', gender: Gender.F, species: 'Tholothian', photo: 'IndeeraStokes.jpg', description: 'Dark skin, elegant white tendrils, blue eyes.' },
            { name: 'Ember', gender: Gender.F, species: 'Charhound', photo: 'EmberCharhound.jpg' },
            { name: 'Porter Engle', gender: Gender.M, species: 'Ikkrukki', description: 'More beard than being, excellent chef. Had 1 eye, and a long scar down his face. Known as "The Blade of Bardotta"', photo: 'PorterEngle.jpg' },
            { name: 'Stellan Gios', gender: Gender.M, photo: 'StellanGios-SWTLC.png' },
            { name: 'Jora Malli', gender: Gender.F },
            { name: 'Sskeer', species: 'Trandoshan', photo: 'Sskeer.png' },
            { name: 'Estala Maru', gender: Gender.F, species: 'Kessurian', photo: 'EstalaMaru.png' },
            { name: 'Rohmar Montgo' },
            { name: 'Lio Josse' },
            { name: 'Rah Barocci', gender: Gender.M },
            { name: 'Yarael Poof', gender: Gender.M, species: 'Quermian', photo: 'YaraelPoof-SWCT.png' },
            { name: 'Jora Malli', gender: Gender.F, species: 'Togruta', description: 'Bright orange skin and striking white facial markings.' },
            { name: 'Zaviel Tepp' },
            { name: 'Arkoff' }
          ]
        },

        {
          label: 'Nihil',
          characters: [
            { name: 'Pan Eyta', gender: Gender.M, species: 'Dowutin', description: 'Massive heavy brows and horns sprouting from chin, very low voice. Precise planner.' },
            { name: 'Lourna Dee', gender: Gender.F, species: "Twi'lek", description: '40 years old, thin, green, emaciated lekku with bone white stripes. Armored leather from kell dragon, blue eyes. Subtle, introverted, keeping her intentions close until the result was achieved. Generally the cruelest of the 3.', photo: 'LournaDee.jpg' },
            { name: 'Kassav Millik', gender: Gender.M, species: 'Weequay', description: 'Aged, skin like sun-dried meat, fur cape. Chaotic and impulsive.' },
            { name: 'Marchion Ro', gender: Gender.M, description: 'gray skin, wholly black eyes, predator like. Son of Asgar Ro, former Eye of Nihil', photo: 'Marchion-ro-concept-art.jpg' },
            { name: 'Zagyar', gender: Gender.M, description: 'Part of Lourna\'s crew' },
            { name: 'Gravhan', gender: Gender.M, species: 'Chevin', description: 'One of Kassav\'s Storm. Had tusks, one huge head to look at. Wrinkled gray skin and wisps of long blond hair.' },
            { name: 'Dellex', gender: Gender.F, description: 'One of Kassav\'s Storm. One organic eye. Had many mechanical upgrades since she considered herself ugly.' },
            { name: 'Wet Bub', gender: Gender.M, species: 'Gungan', description: 'One of Kassav\'s Storm. Slicer.' }
          ]
        },

        {
          label: 'Politicians',
          characters: [
            { name: 'Chancelor Lina Soh', gender: Gender.F, photo: 'Lina-Soh.png' },
            { name: 'Minister Zeffren Ecka of Hetzal Prime', gender: Gender.M, photo: 'ZeffrenEcka.png' },
            { name: 'Counselor Daan of Hetzal', gender: Gender.M },
            { name: 'Norel Quo', gender: Gender.M, species: 'Koorivar', description: 'Unpigmented. Aid to Chancelor Lina Soh' },
            { name: 'Senator Izzet Noor of Serenno', gender: Gender.M, description: 'Thin, tall, aged, but vigorous, bald but for a lush fringe of white hair that he wore long.' },
            {name: 'Jeni Wataro', gender: Gender.F, species: 'Chagrain', description: 'Blue skin and thick, horn-tipped tentacles curling out from the sides of her head. Long time aid to Senator Noor.'},
            { name: 'Jeffo Lorillia', gender: Gender.M, species: 'Munn' }
          ]
        },

        {
          label: 'Pilots',
          characters: [
            { name: 'Captain Hedda Casset', gender: Gender.F, species: 'Human', photo: 'HeddaCasset.png' },
            { name: 'Lieutenant Jary Bowman', gender: Gender.M, species: '' },
            { name: 'Cadet Kalwar', gender: Gender.M, species: 'Quermian', photo: 'Kalwar.png' },
            { name: 'Petty Officer Innamin', gender: Gender.M, species: 'Human', description: 'Young (20s)' },
            { name: 'Captain Finial Bright', gender: Gender.M, species: 'Nautolan', description: 'Green skin, big black eyes. Tentacles' },
            { name: 'Ensign Peeples', gender: Gender.M, description: 'Needle like snout, 19 eyes' },
            { name: 'Joss Adren', gender: Gender.M, species: '', description: 'Married to Pikka. Looked "like an engine block with a head stuck on top, with hair he kept cropped tight". Or "like a tree trunk with a head on top".' },
            { name: 'Pikka Adren', gender: Gender.F, species: 'Human', description: 'light eyes, dark curly hair, a pile of dark freckles, light skin' },
            { name: 'Odabba', species: 'Shistavanem', gender: Gender.M },
            { name: 'Mari San Tekka', gender: Gender.F, species: 'Human', description: 'Over a century old, running on medical support. Pilot of the Gaze Electric, Marchion Ro\'s ship' },
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
            { name: 'Scantech (Third Class) Merven Getter', gender: Gender.M, species: 'Mirialan' },
            { name: 'Sella', gender: Gender.F, species: 'Twi\'lek' },
            { name: 'Scantech (Second Class) Vel Carann', gender: Gender.F },
            { name: 'Shai Tennem', species: 'Bith', gender: Gender.M },
            { name: 'Keven Tarr', gender: Gender.M, species: 'Human', description: 'Genius slicer. Head of the Ministry of Technology in Hetzal Prime' },
            { name: 'Larence Garello', gender: Gender.M, description: 'Chief executive of Garello Tech' },
            { name: 'Marlowe San Tekka', gender: Gender.M, species: 'Human', description: 'Scieon of the San Tekka empire, married to Vellis. Pale, blonde hair, blue eyes. Softer looking face.' },
            { name: 'Vellis San Tekka', gender: Gender.M, species: 'Human', description: 'Member of the San Tekka empire, married to Marlowe. Pale, blonde hair, blue eyes. Face looked chopped from granite.' },
            { name: 'Ottoh Blythe', gender: Gender.M, species: 'Human', description: 'Farmer on Elphrona.' },
            { name: 'Erika Blythe', gender: Gender.F, species: 'Human' },
            { name: 'Ronn Blythe', gender: Gender.M, species: 'Human' },
            { name: 'Bailen Blythe', gender: Gender.F, species: 'Human', label1: 'AKA: Bee' }
          ]
        }
      ],

      16: [
        {
          label: 'Chiss',
          characters: [
            { name: 'Mitth\'raw\'nuruodo', gender: Gender.M, species: 'Chiss', label1: 'Core Name: Thrawn', label2: 'Birth Name: Kivu\'raw\'nuru (Vurawn)', photo: 'thrawn.png' },
            { name: 'Ar\'alani', gender: Gender.F, species: 'Chiss', label1: 'Core Name: Ziara', label2: 'Birth Name: Irizi\'ar\'alani', photo: 'aralani.png' }
          ]
        }
      ]
    }
  }

  public getBookCharactersByBookID(bookID: number) {
    return this.bookCharacters[bookID];
  }
}
