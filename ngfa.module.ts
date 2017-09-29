import 'font-awesome/css/font-awesome.min.css';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaIcon, FaListIcon } from './ngfa.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        FaIcon,
        FaListIcon
    ],
    exports: [
        FaIcon,
        FaListIcon
    ]
})
export class NgFontAwesomeModule {}
