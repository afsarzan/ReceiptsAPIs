import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Category } from '../../../models/recipes.model';
import { TruncatePipe } from '../../../pipes/truncate.pipe';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [TruncatePipe,MatButtonModule,CommonModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {
  @Input() type: string = '';
  @Input() cat: string = 'Category Name';
  @Input() item: Category = {
    idCategory: '',
    strCategory: '',
    strCategoryThumb: '',
    strCategoryDescription: ''
  }
  constructor(private router: Router) { 
  }

  goto(item:Category){
    
    if(this.type === 'category'){
      this.router.navigateByUrl('/categories/details/'+item.strCategory);
    } else {
            this.router.navigateByUrl('/recipe/details/'+item.idCategory);
    }
  }
  
}
