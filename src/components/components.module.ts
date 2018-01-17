import { NgModule } from '@angular/core';
import { CoinListComponent } from './coin-list/coin-list';
import { IonicModule } from 'ionic-angular';
import { CryptoPerformanceComponent } from './crypto-performance/crypto-performance';
import { TopPicksComponent } from './top-picks/top-picks';
import { PortfolioSizeComponent } from './portfolio-size/portfolio-size';
import { FeedItemComponent } from './feed-item/feed-item';
import { UserListComponent } from './user-list/user-list';

@NgModule({
    declarations: [CoinListComponent,
        CryptoPerformanceComponent,
        TopPicksComponent,
        PortfolioSizeComponent,
        FeedItemComponent,
        UserListComponent],
    imports: [IonicModule],
    exports: [CoinListComponent,
        CryptoPerformanceComponent,
        TopPicksComponent,
        PortfolioSizeComponent,
        FeedItemComponent,
        UserListComponent]
})
export class ComponentsModule { }
