import { Component, Input, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { FileStorageProviderEnum, ITenantSetting } from '@gauzy/contracts';

@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'file-provider-selector',
	templateUrl: './file-provider.component.html',
	styleUrls: ['./file-provider.component.scss']
})
export class FileProviderComponent implements OnInit {

	public fileStorageProviders: { label: FileStorageProviderEnum; value: any }[] = [];

	/*
	* Getter & Setter for dynamic settings element
	*/
	private _settings: ITenantSetting;
	public get settings(): ITenantSetting {
		return this._settings;
	}
	@Input() public set settings(settings: ITenantSetting) {
		this._settings = settings;
	}

	ngOnInit(): void {
		this.fileStorageProviders = Object.keys(FileStorageProviderEnum).map(
			(label: FileStorageProviderEnum) => ({
				label,
				value: FileStorageProviderEnum[label]
			})
		);
	}
}
