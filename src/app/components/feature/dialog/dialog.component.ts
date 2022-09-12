import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  informationPokemon: any
  abilitiesPokemon: any = []

  constructor(
    @Inject( MAT_DIALOG_DATA) public data: any,
    private pokemonService:  PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonService.getDeteilByName(this.data.name).subscribe(detail=>{
      this.informationPokemon = detail
      detail.abilities.map((abilitie:any)=>{
        this.abilitiesPokemon.push(abilitie)
      })

      console.log(detail);

    })
    console.log(this.abilitiesPokemon);


  }

}
