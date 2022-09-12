import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  listPokemons:any = []
  constructor(
    private pokemonService: PokemonService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe(
      pokemon=>{
        pokemon.results.map((pokemonItem:any)=>{
          this.pokemonService.getDetailPokemon(pokemonItem.url).subscribe(detail=>{
            this.listPokemons.push(detail)
          })
        })

      }
    )
    console.log(this.listPokemons);


  }
  openDialog(name:string){
    this.dialog.open(DialogComponent,{
      data :{'name':name}
    })


  }

}
