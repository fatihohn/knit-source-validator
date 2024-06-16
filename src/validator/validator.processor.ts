import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('validator')
export class ValidatorProcessor {
  @Process()
  async handleJob(job: Job<any>) {
    console.log('Processing job:', job.data);
    // Your job processing logic here
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate job processing
    console.log('Job completed');
  }
}
