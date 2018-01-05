import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatePortfolioPage } from './create-portfolio';
import { ComponentsModule} from '../../components/components.module';

@NgModule({
  declarations: [
    CreatePortfolioPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CreatePortfolioPage),
  ],
})
export class CreatePortfolioPageModule {}
