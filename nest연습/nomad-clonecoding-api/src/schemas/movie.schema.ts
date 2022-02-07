import { Movie } from './../movies/entities/movie.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema()
export class MovieSchema {
  @Prop()
  title: string;


}

export const CatSchema = SchemaFactory.createForClass(MovieSchema);