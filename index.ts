#!/usr/bin/env bun //shebang it tells the system to use bun to execute this file

import {Command} from "commander";
import {runWakeup} from "./tui/wakeup";

const program = new Command();

program
    .name("openclaw-build")
    .description("A build tool for OpenClaw projects")
    .version("0.1.0");

program
    .command("wakeup")
    .description("show the banner and pick cli or telegram mode")
    .action(
        async()=>{
            await runWakeup()
        }
    ); 
await program.parseAsync(process.argv);