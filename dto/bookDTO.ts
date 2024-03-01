import { Expose, Transform, Exclude} from 'class-transformer';
import { IsString, IsDecimal } from 'class-validator';

export class ModifyBookRequestDTO {
    @IsString()
    title!: string;

    @IsString()
    author!: string;

    @IsDecimal()
    price!: string;
}

export class BookResponse {
    @Expose({ name: '_id' })
    @Transform(({ obj }) => obj._id.toString())
    id !: string;

    @Expose()
    title !: string;

    @Expose()
    author !: string;

    @Expose()
    price !: string;

    @Exclude()
    __v !: number
}
